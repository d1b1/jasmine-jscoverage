This repo contains a working Jasmine + JSCoverage example. It will run as is without any problems. 

## Installation

    git clone git@github.com:d1b1/jasmine-jscoverage.git
    npm install

## Usage

    node cover.js <jasmine-node spec>

1. cover.js is the wrapper for the jasmine CLI calls.
2. spec is the name of the folder containing all the calls.
2. add other jasmine-node parameters, --junitreport etc after the spec folder.