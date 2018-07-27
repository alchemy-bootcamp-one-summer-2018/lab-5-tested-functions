/* globals test, assert */
/* globals calc */

test('adds to number', function() {
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});

test('subtract two numbers', function() {
    var diff = calc.subtract(7, 3);
    assert.equal(diff, 4);
});

test('multiply two numbers', function() {
    var prod = calc.multiply(3, 6);
    assert.equal(prod, 18);
});

test('divide two numbers', function(){
    var quot = calc.divide(18, 6);
    assert.equal(quot, 3);
});


test.run();