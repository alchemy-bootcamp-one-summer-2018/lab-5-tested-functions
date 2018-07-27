function add(num1, num2){
    return num1+num2;
}

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

//assert(add(5, 7) === 12, '5+7');
//assert.equal(add(5, 7), 12, '5+7');
//assert.equal(add(5, 7), 13, '5+7');


// try {
//     assert(true);
//     console.log('assert true passed');
// }
// catch (err) {
//     console.log('assert true failed', err.message);
// }

// try {
//     assert(false);
//     console.log('assert false passed');
// }
// catch (err) {
//     console.log('assert false failed', err.message);
// }

// try {
//     assert.equal(true, true);
//     console.log('assert equal (true, true) passed');
// }
// catch (err) {
//     console.log('assert equal (true, true) failed', err.message);
// }


// function failingTest(){
//     throw new Error('assertion error');
// }
