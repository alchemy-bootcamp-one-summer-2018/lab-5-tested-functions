/* globals test, assert */

/* globals calc */

test('adds to number', function() {
    var sum = calc.add(3, 4);
    assert.equal (sum, 7);

});

test ('subtracts two number', function() {
    var diff = calc.subtract(7, 3);
    assert.equal(diff, 4);

});


test.run();



/* exported calc */


