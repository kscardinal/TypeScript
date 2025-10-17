function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);

type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; sideLength: number };
type Triangle = { kind: 'triangle'; base: number; height: number };

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return 0.5 * shape.base * shape.height;
  }
}

const myShape: Shape = { kind: 'circle', radius: 5 };

console.log(getArea(myShape));






type iPhone = { manufacture: "Apple", price: number}
type Galaxy = { manufacture: "Samsung", price: number}

type MobilePhone = iPhone | Galaxy

function getPrice(phone: MobilePhone): number {
    switch(phone.manufacture) {
        case 'Apple':
            return phone.price
        case 'Samsung':
            return phone.price * 100
        default:
            const _exhaustiveCheck: never = phone;
            return _exhaustiveCheck;
    }
}

const myPhone: MobilePhone = { manufacture: "Apple", price: 999}
const mySecondPhone: iPhone = { manufacture: "Apple", price: 1099 };

console.log(getPrice(myPhone));
console.log(getPrice(mySecondPhone));




type Chevy = { parent: "GM", model: String, cost: number };
type Cadillac = { parent: "GM", model: String, cost: number };
type Lincoln = { parent: "Ford", model: String, cost: number};

type Car = Chevy | Cadillac | Lincoln;

function getCarInfo(car: Car):  String {
    switch(car.parent) {
        case "GM":
            switch(car.model) {
                case "Corvette":
                    return car.model + " by " + car.parent + " for $" + car.cost + " (FAST)"
                case "Trax":
                    return car.model + " by " + car.parent + " for $" + car.cost + " (SLOW)"
                default:
                    return "Car is not in the system"
            }
        case "Ford":
            switch(car.model) {
                case "Aviator":
                    return car.model + " by " + car.parent + " for $" + car.cost + " (FANCY)"
                default:
                    return "Car is not in the system"
            }
        default:
            const _exhaustiveCheck: never = car;
            return _exhaustiveCheck
    }
}


const myCar_1:Chevy = { parent: "GM", model:"Corvette", cost: 100000 };
const myCar_2:Chevy = { parent: "GM", model:"Trax", cost: 30000 };
const myCar_3:Chevy = { parent: "GM", model:"Equinox EV", cost: 45000 };

const friendCar_1:Cadillac = { parent: "GM", model:"Lyric", cost: 100000 };
const friendCar_2:Lincoln = { parent: "Ford", model:"Aviator", cost: 100000 };
const friendCar_3:Lincoln = { parent: "Ford", model:"Explorer", cost: 50000 };


console.log(getCarInfo(myCar_1));
console.log(getCarInfo(myCar_2));
console.log(getCarInfo(myCar_3));
console.log(getCarInfo(friendCar_1));
console.log(getCarInfo(friendCar_2));
console.log(getCarInfo(friendCar_3));



function personal({ name, age = 18, car }: { name?: string; age?: number; car?: string } = {}) {
    if (name) console.log("My name is " + name);
    if (age) console.log("I am " + age + " years old");
    if (car) console.log("My car is " + car);
}

personal({car: "Cadillac"});



const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Kyle = 21;
nameAgeMap.Kyle = 18;

console.log(nameAgeMap.Kyle);


function printStatusCode(code: String | number): String {
    return `The code is ${code}`;
}

console.log(printStatusCode(404));
console.log(printStatusCode('404'));


function printNumber(num: number = 10):number {
    return num;
}

console.log(printNumber(40));


function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add(1,2,3,4,5,6,7,8,9,10));




class Setting<T> {
  constructor(private name: string, private value: T) {}

  setValue(v: T) {
    console.log(`Setting ${this.name} changed to ${v}`);
    this.value = v;
  }

  getValue() {
    return this.value;
  }
}

let theme = new Setting("theme", "dark");
let volume = new Setting("volume", 10);

console.log(theme.getValue());
console.log(volume.getValue());




function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'

let array: number[] = [1, 2, 3];
let value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`

console.log(value);