/* globals assert */
var tests = [];

function test(name, testFn) {
    tests.push ({
        name: name,
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
            test.status = 'PASSED';    
        }
        catch(err) {
            test.status = 'FAILED';
            test.error = err.message;
        }

        results.push(test);

    }

    test.run = function() {
        var results = runTests();
        displayResults(results);
    };

    return results;
}

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
            
        console.log(result.name + ' %c' + result.status,
            'color: ' + color + ';');
    }
}

// change to tru to run test tests
if(true) { //eslint-disable-line
    test('1 + 1 =2 passes', function() {
        assert.equal (1 + 1, 2);

    });

    test('1 + 1 = 2 fails', function() {
        assert.equal (1 + 1, 3);

    });

    test.run();
}
