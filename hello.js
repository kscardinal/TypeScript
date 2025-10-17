function greet(name) {
    return "Hello, ".concat(name, "!");
}
var message = greet("World");
console.log(message);
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.sideLength, 2);
        case 'triangle':
            return 0.5 * shape.base * shape.height;
    }
}
var myShape = { kind: 'circle', radius: 5 };
console.log(getArea(myShape));
function getPrice(phone) {
    switch (phone.manufacture) {
        case 'Apple':
            return phone.price;
        case 'Samsung':
            return phone.price * 100;
        default:
            var _exhaustiveCheck = phone;
            return _exhaustiveCheck;
    }
}
var myPhone = { manufacture: "Apple", price: 999 };
var mySecondPhone = { manufacture: "Apple", price: 1099 };
console.log(getPrice(myPhone));
console.log(getPrice(mySecondPhone));
function getCarInfo(car) {
    switch (car.parent) {
        case "GM":
            switch (car.model) {
                case "Corvette":
                    return car.model + " by " + car.parent + " for $" + car.cost + " (FAST)";
                case "Trax":
                    return car.model + " by " + car.parent + " for $" + car.cost + " (SLOW)";
                default:
                    return "Car is not in the system";
            }
        case "Ford":
            switch (car.model) {
                case "Aviator":
                    return car.model + " by " + car.parent + " for $" + car.cost + " (FANCY)";
                default:
                    return "Car is not in the system";
            }
        default:
            var _exhaustiveCheck = car;
            return _exhaustiveCheck;
    }
}
var myCar_1 = { parent: "GM", model: "Corvette", cost: 100000 };
var myCar_2 = { parent: "GM", model: "Trax", cost: 30000 };
var myCar_3 = { parent: "GM", model: "Equinox EV", cost: 45000 };
var friendCar_1 = { parent: "GM", model: "Lyric", cost: 100000 };
var friendCar_2 = { parent: "Ford", model: "Aviator", cost: 100000 };
var friendCar_3 = { parent: "Ford", model: "Explorer", cost: 50000 };
console.log(getCarInfo(myCar_1));
console.log(getCarInfo(myCar_2));
console.log(getCarInfo(myCar_3));
console.log(getCarInfo(friendCar_1));
console.log(getCarInfo(friendCar_2));
console.log(getCarInfo(friendCar_3));
function personal(_a) {
    var _b = _a === void 0 ? {} : _a, name = _b.name, _c = _b.age, age = _c === void 0 ? 18 : _c, car = _b.car;
    if (name)
        console.log("My name is " + name);
    if (age)
        console.log("I am " + age + " years old");
    if (car)
        console.log("My car is " + car);
}
personal({ car: "Cadillac" });
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Kyle = 21;
nameAgeMap.Kyle = 18;
console.log(nameAgeMap.Kyle);
function printStatusCode(code) {
    return "The code is ".concat(code);
}
console.log(printStatusCode(404));
console.log(printStatusCode('404'));
function printNumber(num) {
    if (num === void 0) { num = 10; }
    return num;
}
console.log(printNumber(40));
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
var Setting = /** @class */ (function () {
    function Setting(name, value) {
        this.name = name;
        this.value = value;
    }
    Setting.prototype.setValue = function (v) {
        console.log("Setting ".concat(this.name, " changed to ").concat(v));
        this.value = v;
    };
    Setting.prototype.getValue = function () {
        return this.value;
    };
    return Setting;
}());
var theme = new Setting("theme", "dark");
var volume = new Setting("volume", 10);
console.log(theme.getValue());
console.log(volume.getValue());
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
var array = [1, 2, 3];
var value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
console.log(value);
