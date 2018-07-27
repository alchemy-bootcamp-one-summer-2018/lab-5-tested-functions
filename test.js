/*global assert*/

var tests = [];

function test(name, testFn) {
    var test = {
        name: name,
        testFn: testFn
    };
    tests.push(test);
}

function runTests() {
    //loop through tests
    var results = [];
    var test;
    for(var i = 0; i < tests.length; i++) {
        // run each test
        test = tests[i];

        try {
            test.testFn();
            //if no errors- passes
            test.status = 'PASSED';
        }

        catch(err) {
            
            //if errors - fails
            test.status = 'FAILED';
            test.error = err.message;
        }
        //record results
        results.push(test);
        
    }    

    //return all results
    return results;

}

test.run = function() {
    var results = runTests();
    displayResults(results);
};

function displayResults(results) {
    var result;
    var color;
    for(var i = 0; i < results.length; i++) {
        result = results[i];

        if(result.status === 'PASSED') {
            color = 'green';
        }
        else {
            color = 'red';
        }
        
        console.log(
            result.name + '%c' + result.status,
            'color: ' + color + ';'
        );

        if(result.status === 'FAILED') {
            console.log(
                '\t%c' + (result.error || ''),
                'color: red;'
            );
        }

        //log name and PASS/FAIL
    }
}
if(false) { //eslint-disable-line

    test('1 + 1 = 2 passes', function() {
        assert.equal(1 + 1, 2);
    });
    
    test('1 + 1 = 3 fails', function() {
        assert.equal(1 + 1, 3);
    });
    
    test.run();
}
