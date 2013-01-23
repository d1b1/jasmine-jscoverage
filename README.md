This repo contains a working Jasmine + JSCoverage example. It will run as is without any problems. This code contains the jasmine UI as well to provide better visiblity into the spec(s) provided. To view the UI, see the section on UI. The pattern used in the src.js file and in the spec files allows the same code to run in both the browser and in node. This provides two ways to use any given spec; first for visual testing and spec development, second in CI process to collection overall code testing stats.

Note this example used the jscoverage pattern of 'instrumenting code', but does not use the actual [jscoverage](http://siliconforks.com/jscoverage/) install or newer jar file. 'Instrumenting' basically injects code into a copy of all the files in a codebase, which allows the jscoverage to monitor what lines are run. 

This solution is based upon the work done in node by fishbar - https://github.com/fishbar/jscoverage

## Installation

    git clone git@github.com:d1b1/jasmine-jscoverage.git
    npm install

## Usage
General Usage:

    node cover.js <jasmine-node spec>

Working Example:

    node cover.js jasmine-node spec 

1. cover.js is the wrapper for the jasmine CLI calls.
2. spec is the name of the folder containing all the calls.
2. add other jasmine-node parameters, --junitreport etc after the spec folder.

## Customize
The following are notes on how you can customize the sample code for different usages.

1. in the cover.js you can edit and set the 'reports' folder. If you do not want the coverage report, then comment the call to jasmine-reporter calls.

## Sample Output
When the following command is called from the command line, you will see the jasmine output as well as the JSCOVERAGE data. JSCoverage uses the file path as the index for coverage statistics. Following the filename you will see the percentage of the file covered by the spec file you wrote. 

    ......

    Finished in 0.01 seconds
    6 tests, 6 assertions, 0 failures


    Process Complete.
    [JSCOVERAGE] /Users/steve/Dropbox/github/jasmine-jscoverage/src.js:75.00%

## Jasmine UI
To view the report in the browser, use the following to launch the jasmine UI.

    servedir .
    http://localhost:8000/runner.html

## Notes
There is a lot of room for improvement on both the sample and the implimentation of the jscoverage node package. Below is a first guess on the next steps.

1. Updated the jscoverage key to use the function file name only and or filename + function name. 
1. Extract the coverage report data into a better json report.
1. Provide codebase wide rollup report and UI.

## Whats Next
The next step is to get the cover.js to do the following:

* Generate a static coverage report. Mostly because how often do we really need the rollup numbers?
* Generate a grunt.js task to use in provisioning.

## Reference
Getting the patterns straight for js code that will run in both enviroments takes a bit of research. Below are several articles the helped moved this along.

* http://caolanmcmahon.com/posts/writing_for_node_and_the_browser/
* http://stackoverflow.com/questions/3225251/how-can-i-share-code-between-node-js-and-the-browser