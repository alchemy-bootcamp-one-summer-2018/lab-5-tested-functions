/* globals test, assert */
/* globals calc */

test('adds two numbers', function() {
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});

test('subtracts two numbers', function() {
    var diff = calc.subtract(7, 3);
    assert.equal(diff, 4);
});

test('multiplies two numbers', function() {
    var product = calc.multiply(10, 3);
    assert.equal(product, 30);
});

test('divides two numbers', function() {
    var quotient = calc.divide(9, 3);
    assert.equal(quotient, 3);
});

//multiply (product)

//divide (quotient)

test.run();