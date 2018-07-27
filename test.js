/* globals assert */

var tests = [];

function test(name, testFn) {
    tests.push({
        name:name,
        testFn: testFn
    });
}

test.run = function() {
    var results = runTests();
    displayResults(results);
};

function runTests() {
    var results = [];
    var test;
    for(var i = 0; i < tests.length; i++) {
        test = tests[i];
        
        try {
            test.testFn();
            // if no errors - passes
            test.status = 'PASSED';
        }
        catch(err) {
            // if errors - fails
            test.status = 'FAILED';
            test.error = err.message;
        }

        // record the results
        results.push(test);

       
    }
     // return all results
    return results;
}
function displayResults(results) {
    var result;
    var color;
    
    for(var i = 0; i < results.length; i++) {
        result = results[i];
        
        if(result.status === 'PASSED'){
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
            console.log (
                '\t%c' + (result.error || ''),
                'color: red;'
            );
        }   
    }
}
// change to true to run test tests
if(false) { // eslint-disable-line


    test('1 + 1 = 2 passes', function() {
        assert.equal(1 + 1, 2);
    });

    test('1 + 1 = 2 fails', function() {
        assert.equal(1 + 1, 3);
    });

    test.run();
}