function a() {
    b = 10;
    console.log(this);
}
b = 20;
console.log(this);
a();