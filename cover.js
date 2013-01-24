var fs  = require('fs')
var jsc = require('jscoverage');
var _   = require('underscore');

// Set the defaults for the --Cover and --NoInject

jsc.enableCoverage(true);
jsc.enableInject(false);

// Require the base packages for the tests.
require('jasmine-node');
require('jscoverage-reporter');

// Define the Jasmine Environment
var jasmineEnv = jasmine.getEnv();

jsc.report = function() {

  var file;
  var tmp;
  var total;
  var touched;
  var perc;
  var n, len;
  if (typeof _$jscoverage === 'undefined') return;

  var data = [];
  for (var i in _$jscoverage) {
    file = i;
    tmp = _$jscoverage[i];
    if (typeof tmp === 'function' || tmp.length === undefined) continue;
    total = touched = 0;
    for (n = 0, len = tmp.length; n < len; n++) {
      if (tmp[n] !== undefined) {
        total ++;
        if (tmp[n] > 0)
          touched ++;
      }
    }
    perc = (total ? (((touched / total) * 100).toFixed(2) + '%') : "Not prepared!!!");
    data.push({ key: file, touched: touched, total: total, percent: perc });
  }

  return data;
}

// Define the end event.
process.on('exit', function () {

  console.log('Process Complete.');

  // Comment if not needed. This will dump the 
  // coverage report for any file called by the jsc.require()
  // calls.

  jsc.coverage(); // print summary info, cover percent

  var report = jsc.report();

  var total = 0, touched = 0;

  _.each(report, function(o) {
    total+=o.total;
    touched+=o.touched;
  });

  var total_perc = touched / total;

  console.log('Files Tests: ', _.size(report));
  console.log('Total Lines: ', total);
  console.log('Total Tested: ', touched);
  console.log('Code Coverage: ' + total_perc.toFixed(2) * 100 + '%' )

  // UnComment the following to show 
  // the uncovered code 

  // jsc.coverageDetail(); // print uncovered lines
});

// Setup the report for the jasmine calls
// This is optional so we can remove if we do not want
// the reports output.

jasmineEnv.addReporter(new jasmine.JSCoverageReporter('./reports'));

// Now require the jasmine-node CLI.
require('./node_modules/jasmine-node/lib/jasmine-node/cli.js');
