
function passingTest() {

}

try {
    passingTest();
    console.log('test PASSED');
}
catch(err) {
    console.log('test FAILED', err.message);
    
}

function failingTest() {
    throw new Error ('assertion error');
}

try {
    failingTest();
    console.log('test PASSED');
}
catch(err) {
    console.log('test FAILED', err.message);
    
}