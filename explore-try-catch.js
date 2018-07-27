
function passingTest() {
    
}

try {
    passingTest();
    console.log ('Test PASSED');
}

catch(err) {

    console.log ('Test FAIL', err.message);
}

function failingTest(){

    throw new Error ('assertion Error');
}

try {
    failingTest();
    console.log ('Test PASSED');
}

catch(err) {

    console.log ('Test Fail', err.message);
}