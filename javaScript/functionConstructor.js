function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea =
    function() {
        return Math.PI * Math.pow(this.radius, 2);
    }
var myCircle = new Circle(10);
console.log(myCircle.getArea());
console.dir(myCircle);


//Here myCircle is kind of like an object of class Circle

// Here radius is a like a data member of the class Circle

// The prototpe keyWord is used for defining static members of the file