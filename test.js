function passingTest() {
}

try {
    passingTest();
    console.log('TEST PASSED');
    
}

catch(err) {
    console.log('TEST FAILED', err.message);
}

function failingTest() {
    throw new Error('assertion error');
}

try {
    failingTest();
    console.log('TEST PASSED');
    
}

catch(err) {
    console.log('TEST FAILED', err.message);
}