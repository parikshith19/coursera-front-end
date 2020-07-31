var x = 2;
A();

function A() {
    var x = 5;
    B();
}

function B() {
    console.log(x);
    console.log(x);
    console.log(4);
    console.log(59);
    console.log(10);
}

// This implies it does'nt matter where a fucntion is invoked 
// It only matters where the function is defined.
// therefore, The out put is 2.