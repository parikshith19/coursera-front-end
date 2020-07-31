// The this keyword always refers to the window object unless it is uused in a class or a function constructor.
// The this keyword comes into place whenever we use the new keyword in something
// when we write 
var literalCircle = {
    radius: 10,

    getArea: function() {
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};


// This is writing itself as 
// var literalCircle = new Object();
// literalCircle={
//     ...
// }
console.log(literalCircle.getArea());


//That's why the this keyword works inside the object literalCircle.