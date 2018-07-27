/* globals test, assert */
/* globals calc */

test('adds to number', function(){
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});


test('subtracts two numbers', function() {
    var diff = calc.subtract(7, 3);
    assert.equal(diff, 4);
});

test('multiplies two numbers', function() {
    var product = calc.multiply(7, 3);
    assert.equal(product, 21);
});

test('divides two numbers', function() {
    var quotient = calc.divide(21, 7);
    assert.equal(quotient, 3);
});


test.run();