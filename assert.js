
function assert(success, message) {
    if(!success) {
        throw new Error(message || 'expected true but was false');
    }
}

assert.equal = function(actual, expected, message){

    assert.equal = function(actual, expected, message) {
        message = (message || '') + 'expected ' + expected + 
        
        'but was' + actual; 
    
        // eslint-disable-next-line eqeqeq
        assert(actual == expected);

    };
};

//change to tru assert and assert equal test
if(false) { //eslint-disabled-line

    try {
        assert.equal(true, false, 'expect error to be thrown');
        console.log('assert.equal (true,false)FAILED');
    }
    catch(err) {
        console.log('assert.equal (true,false)PASSED');
    }

    try {
        assert.equal(true, true);
        console.log('assert.equal(true,true) PASSED');
    }
    catch(err) {
        console.log('assert.equal(tru,true)FAILED');
    }

    try {
        assert(true);
        console.log('assert(true) PASSED');
    }
    catch(err) {
        console.log('assert(true)', err.message);
    }


    try {
        assert(false);
        console.log('assert(false) FAILED');
    }
    catch(err) {
        console.log('assert(false) PASSED', err.message); 
    }
}