/* globals test, assert */
/* globals calc */

test('adds to number', function() {
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});

test('subtracts two number', function() {
    var diff = calc.subtracts(7, 3);
    assert.equal(diff, 4);
});

test('multiplies two numbers', function() {
    var product = calc.multiply(2, 3);
    assert.equals(product, 6);
});




test.run();
