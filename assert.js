function assert(sucess, message) {
    if(!sucess) {
        throw new Error(message || 'expected true but was false');
    }
}

assert.equal = function(actual, expected, message) {
    message = message + 'expected ' + expected + ' but was ' + actual; 
    // eslint-disable-next-line eqeqeq
    assert(actual == expected, message);
};

if(false) { //eslint-disable-line
    try {
        assert.equal(true, false, 'expect error to be thrown');
        console.log('assert.equal(true, false) FAILED');
    }
    catch(err) {
        console.log('assert.equal(true, false) PASSED');
    }

    try {
        assert(true);
        console.log('assert(true) PASSED');
        
    }
    catch(err) {
        console.log('assert(true) FAILED', err.message);
    }

    try {
        assert(false);
        console.log('assert(false) FAILED');
        
    }
    catch(err) {
        console.log('assert(false) PASSED', err.message);
    }

    try {
        assert.equal(true, true);
        console.log('assert.equal(true, true) PASSED');
    }
    catch(err) {
        console.log('assert.equal(true, true) FAILED'); 
    }
}

//  try {
//     failingTest();
//     console.log('TEST PASSED');
    
// }

// catch(err) {
//     console.log('TEST FAILED', err.message);
// }