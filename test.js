/* globals assert */

var tests = [];

function test(name, testFn) {
    tests.push({
        name: name,
        testFn: testFn
    });
}

test.run = function() {
    var results = runTests();
    displayResults(results);
};

function runTests() {
    // loop thru tests
    var results = [];
    var test;
    for(var i = 0; i < tests.length; i++) {
        test = tests[i];

        try {
            test.testFn();
            test.status = 'PASSED';
        }
        catch(err){
            test.status = 'FAILED';
            test.error = err.message;
        }

        results.push(test);
    }

    return results;
}

function displayResults(results){
    var color;
    var result;
    for(var i = 0; i < results.length; i++) {
        result = results[i];
        if(result.status === 'PASSED') {
            color = 'green';
        }
        else {
            color = 'red';
        }
        console.log(
            result.name + ' %c' + result.status,
            'color: ' + color + ';'
        );

        if(result.status === 'FAILED') {
            console.log(
                '\t%c' + (result.error || ''),
                'color: red;'
            );
        }
    }
}

if(false) { // eslint-disable-line

    test('1 + 1 = 2 passes', function() {
        assert.equal(1 + 1, 2);
    });

    test('1 + 1 = 2 fails', function() {
        assert.equal(1 + 1, 3);
    });

    test.run();
}
