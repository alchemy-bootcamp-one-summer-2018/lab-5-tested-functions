/* globals test, assert */
/* globals calc */

test('adds to number', function() {
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});

test('subtracts two numbers', function(){
    var difference = calc.subtract(5, 2);
    assert.equal(difference, 3);
});

test('multiplies two numbers', function(){
    var product = calc.multiply(10, 3);
    assert.equal(product, 30);
});

test('divides two numbers', function(){
    var quotient = calc.divide(6, 2);
    assert.equal(quotient, 3);
});

test.run();