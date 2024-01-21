// console.log("hello from tsc 3");
//
// const func = (names:string[]):void =>{
// }
//
// func(["max","ira"]);
// func(["asd","qer"]);
// func(["ddd","qaz"]);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//----------------------------------------
// let a:number = 6;
//
// let b:string = a + "";
//АБО
var a = 6;
var b = a.toString();
//----------------------------------------
// interface IUser{
//     name:string;
//     age:number;
//     house:number;
// }
//
// const user:IUser ={
//     name:"max",
//     age:15,
//     house:20
// }
//
// const user2:IUser = {
//     name:"kira",
//     age:25,
//     house:55
// }
//----------------------------------------
// interface IUser<DATA>{
//     name:string;
//     age:number;
//     house:number;
//     data:DATA //DATA невідома поки що
// }
//
// const user1: IUser<number[]> = {
//     name:"Max",
//     age:15,
//     house:40,
//     data:[1,2,3,4]
// }
//
//
// const user2: IUser<string> ={
//     name:"oleg",
//     age:15,
//     house:55,
//     data:"dddd"
// }
//----------------------------------------
// interface IUser {
//     name: string;
//     age:number;
//     house?:number;
// }
// const user:IUser = {
//     name:"Gosha",
//     age:19
// }
//АБО
// interface IUser{
//     name:string;
//     age:number;
//     house:number;
// }
//
// const user:Partial<IUser> ={//дозволяє внести 1 або декілька або жодної зміної
//     name:"aaaa"
// }
//----------------------------------------
// class  User {
//     private name:string;
//     private age:number
//
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     getName():string {
//         return this.name
// }
//
// }
//
// const user = new User("Max",22);
// console.log(user.getName());
//Скорочено
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user = new User("max", 21);
console.log(user.getName());
var users = [
    new User("max", 15),
    new User("kokos", 3)
];
var Car = /** @class */ (function () {
    function Car(seats, brand, year, enginPower) {
        this.seats = seats;
        this.brand = brand;
        this.year = year;
        this.enginPower = enginPower;
    }
    Car.prototype.getLedStatus = function () {
        return true;
    };
    Car.prototype.start = function () {
        console.log("Brrrrrrrrrrr");
    };
    Car.prototype.getInfo = function () {
        console.log("Brand: ".concat(this.brand, " -- seats: ").concat(this.seats, " -- year: ").concat(this.year));
    };
    return Car;
}());
var car = new Car(5, "BMW", 2000, 3500);
car.getInfo();
car.start();
// class Electrocar extends Car {
//
//     constructor(seats: number, brand: string, year: number,private enginePower:number) {
//         super(seats, brand, year);
//     }
// }
//----------------------------------------
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.a + this.b / this.c;
    };
    Triangle.prototype.area = function () {
        return this.c / this.a + this.b;
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return this.a * this.b * 2;
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    return Rectangle;
}(Shape));
var shapes = [
    new Triangle(1, 2, 3),
    new Rectangle(4, 5),
    new Triangle(6, 7, 8)
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.constructor["name"]);
    console.log(shape.area());
    console.log(shape.perimeter());
}
//----------------------------------------
var AAA = /** @class */ (function (_super) {
    __extends(AAA, _super);
    function AAA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AAA.prototype.area = function () {
        return 0;
    };
    AAA.prototype.perimeter = function () {
        return 0;
    };
    return AAA;
}(Shape));
var dog1 = {
    name: "Oleg",
    age: 12,
    box: ["hello", "22"],
    asd: 1111
};
var dog2 = {
    name: "rex",
    age: 22,
    box: 999,
    asd: false
};
var dog3 = {
    name: "Oskar",
    age: 11,
    box: false,
    asd: 333
};
