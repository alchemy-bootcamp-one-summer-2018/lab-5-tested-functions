/* globals test, assert */
/* globals calc */

test('adds to number', function() {
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});

test('subtracts from number', function() {
    var subtract = calc.subtract(4, 3);
    assert.equal(subtract, 1);
});

test('multiplies two numbers', function() {
    var product = calc.multiply(3, 4);
    assert.equal(product, 12);
});

test('divides two numbers', function() {
    var quotient = calc.divide(6, 2);
    assert.equal(quotient, 3);
});


test.run();

