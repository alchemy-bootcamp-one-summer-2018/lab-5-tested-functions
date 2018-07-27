function passingTest(){
    console.log('hi');
}


try {
    passingTest();
    console.log('passed');
}
catch(err) {
    console.log('failed', err.message);
}



function failingTest(){
    throw new Error('assertion error');
}

try {
    failingTest();
    console.log('passed');
}
catch(err) {
    console.log('failed', err.message);
}

foo;