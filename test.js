


function passingTest(){

}

function failingTest(){
    throw new Error('assertion error');
}


try {
    passingTest()
    console.log('Test PASSED');
}


catch (err) {
    console.log('Test FAILED', err.message);
}

try {
    failingTest();
    console.log('Test FAILED');
}

catch(err) {
    console.log('Test FAILED', err.message);
}
