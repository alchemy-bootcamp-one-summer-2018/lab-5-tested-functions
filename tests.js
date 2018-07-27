/* global assert */
var tests = [];

function test(name, testFn) {
    tests.push({
        name: name,
        testFn: testFn
    });
}


test('1 + 1 = 2 passes', function(){
    assert.equal(1 + 1, 2);
});
// assert.equal(1 + 1, 3, '1 + 1 = 2 passes');

test('1 + 1 = 3 fails', function(){
    assert.equal(1 + 1, 3);
});

test.run = function() {
    var results = runTests();
    displayResults(results);
};

test.run();


function runTests() {
    var results = [];
    for(var i = 0; i < tests.length; i++){
        var test = tests[i];

        try {
            test.testFn();
            test.status = 'PASSED';
        }
        catch (err) {
            test.status = 'FAILED';
            test.error = err.message;
        }
        results.push(test);
    }
    return results;
}

function displayResults (results) {
    var result;
    var color;
    for(var i = 0; i < results.length; i++){
        result = results[i];
        if(result.status === 'PASSED'){
            color = 'green';
        }
        else {
            color = 'red';
        }
        console.log(result.name + 
            ' %c' + result.status, 
        'color: ' + color + ';');
        if(result.status === 'FAILED'){
            console.log('\t%c' + (result.error || ''), 
            'color: red');
        }
    }

}
// var results = runTests();
// displayResults(results);
