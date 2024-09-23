// Задача 1

console.log("Задача 1");
let pet = {
  name: "Бобик",
  type: "пес",
  sound: "гав",
  say: function (text) {
    if (text) {
      return `"${this.type} ${this.name} говорит ${text}"`;
    } else {
      return `"${this.type} ${this.name} говорит ${this.sound}"`;
    }
  },
};
console.log(pet.say("мяу"));
console.log(pet.say());

// Задача 2

console.log("\nЗадача 2");
const products = {
  potato: "овощи",

  carrot: "овощи",

  banana: "фрукты",

  orange: "фрукты",

  apple: "фрукты",

  strawberry: "ягоды",

  tomato: "овощи",

  melon: "фрукты",

  lemon: "фрукты",
};

const result = {};
for (let key in products) {
  if (Object.hasOwn(result, products[key])) {
    result[products[key]] += 1;
  } else {
    result[products[key]] = 1;
  }
}

console.log(result);

// Задача 3

console.log("\nЗадача 3");

let oldCars = {};
let newCars = {};
const count = 3;
let minYear = Infinity;
let oldCar = "";
let maxYear = 0;
let newCar = "";
let cars = {
  bmw: {
    color: "black",
    country: "Germany",
    year: 2020,
  },
  kia: {
    color: "grey",
    country: "Korea",
    year: 2014,
  },
  mitsubishi: {
    color: "pink",
    country: "Japan",
    year: 2010,
  },
  ford: {
    color: "blue",
    country: "USA",
    year: 2007,
  },
  lada: {
    color: "white",
    country: "Russia",
    year: 2004,
  },
  toyota: {
    color: "grey",
    country: "Japan",
    year: 2015,
  },
  audi: {
    color: "white",
    country: "Germany",
    year: 2021,
  },
  pagani: {
    color: "red",
    country: "Italy",
    year: 2005,
  },
  hyundai: {
    color: "yellow",
    country: "Korea",
    year: 2022,
  },
  citroen: {
    color: "black",
    country: "France",
    year: 2023,
  },
};

for (let i = 0; i < count; i++) {
  for (let key in cars) {
    if (cars[key]["year"] < minYear) {
      minYear = cars[key]["year"];
      oldCar = key;
    }
    if (cars[key]["year"] > maxYear) {
      maxYear = cars[key]["year"];
      newCar = key;
    }
  }
  oldCars[oldCar] = cars[oldCar];
  delete cars[oldCar];
  newCars[newCar] = cars[newCar];
  delete cars[newCar];
  minYear = Infinity;
  maxYear = 0;
}
console.log("Самые старые автомобили", oldCars);
console.log("\nСамые новые автомобили", newCars);