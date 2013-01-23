var fs = require('fs')
var jsc = require('jscoverage');

// Set the defaults for the --Cover and --NoInject

jsc.enableCoverage(true);
jsc.enableInject(false);

// Require the base packages for the tests.
require('jasmine-node');
require('jscoverage-reporter');

// Define the Jasmine Environment
var jasmineEnv = jasmine.getEnv();

// Define the end event.
process.on('exit', function () {

  console.log('Process Complete.');

  // Comment if not needed. This will dump the 
  // coverage report for any file called by the jsc.require()
  // calls.

  jsc.coverage(); // print summary info, cover percent

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
