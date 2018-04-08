var assert = require('assert');
var webDriver = require('selenium-webdriver');


describe('',function(){
    it("Test-1", function(done){

        var promise;
        promise = new Promise(function(resolve, reject){
            setTimeout(function(){

                console.log("Timeout");
                resolve();

            }, 3000);

        });
        // mocha will wait for the promise to be resolved before exiting
        return promise;
    });
});