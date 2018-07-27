function add(num1, num2){
    return num1+num2;
}

var calc = {
    subtract: function(x,y) {
        return x-y;
    },
    multiply: function(x,y) {
        return x*y;
    }
};

console.log(calc.subtract(7,3));

function assert(success, message){
    if(!success) {
        throw new Error(message || 'expected true but false');
    }
}

assert.equal = function(actual, expected, message){
    message = (message || '') + ' expected ' + expected + ' but was ' + actual;
    //eslint-disable-next-line eqeqeq
    assert (actual == expected, message);
};

// I want to figure out whether or not my add function works.
// Assert will throw an error if my add function fails a test.
// Assert will take in two arguments.
// Assert.equal is just another way of calling the assert function but
// with two inputs instead of three:

//another thing to note: when you throw an error, nothing happens below.
//thats why you want to comment one of the asserts below out at a time

console.log('two arguments - uncomment this')
// assert(add(5, 7) === 13, 'testing 5+7=13');
console.log('three arguments - uncomment this')
// assert.equal(add(5,7), 13, 'testing 5+7=13' );

//another thing to note: assert doesnt do anything if test passes:
console.log('i dont see anything printed below because tests passes!')
assert(add(5, 7) === 12, 'testing 5+7=12');

//i'll want to run a bunch of tests at once so lets make a list

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

test('1 + 1 = 3 fails', function(){
    assert.equal(1 + 1, 3);
});

test('5-3=2 passes', function(){
    assert.equal(calc.subtract(5, 3), 2);
});

test('7-6=4 fails', function(){
    assert.equal(calc.subtract(7, 6), 4);
});

//since we dont want the program to stop running if we find an error, 
// we need to use a try/catch


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

// add color to warnings:

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
            console.log('\t%c' + (result.error || ''), 'color: red');
        }
    }

}
//run the whole thang
test.run = function() {
    var results = runTests();
    displayResults(results);
};

test.run();

