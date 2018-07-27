/* globals test, assert */
/* globals calc */

test('adds to number', function() {
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});

test('subtracts two numbers', function() {
    var diff = calc.subtract(7, 3);
    assert.equal(diff, 4);
});

test('multiplies two numbers', function() {
    var product = calc.multiply(4, 5);
    assert.equal(product, 20);
});

test('divides two numbers', function() {
    var quotient = calc.divide(15, 3);
    assert.equal(quotient, 5);
});

test.run();