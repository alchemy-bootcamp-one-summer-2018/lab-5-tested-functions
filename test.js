function passingTest() {

}

try {
    passingTest();
    console.log('test PASSED');
}
catch(err){
    console.log('Test FAILED', err.message);
}

function failingTest() {
    throw new Error('test PASSED');
}

try {
    failingTest();
    console.log('test PASSED'); 
}
catch(err){
    console.log('test FAILED', err.message);
}