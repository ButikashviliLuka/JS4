let myCar = {
    id: "bmw",
    car: "BMW",
    model: "F94",
    color: "BLACK",
    date: 2004,
    horsepower: "ყველა",
    price: "6000$",
}

let myCar2 = {
    id: "mercedes",
    car: "MERCEDES",
    model: "G",
    color: "WHITE",
    date: 2012,
    horsepower: "ყველა",
    price: "13000$",
}

let myCar3 = {
    id: "audi",
    car: "AUDI",
    model: "TT",
    color: "GREY",
    date: 2007,
    horsepower: "ყველა",
    price: "9000$",
}

let myCar4 = {
    id: "toyota",
    car: "TOYOTA",
    model: "PRADO",
    color: "whote",
    date: 2013,
    horsepower: "ყველა",
    price: "12000$",
}

let loveCar = []

loveCar.push(myCar);
loveCar.push(myCar2);
loveCar.push(myCar3);
loveCar.push(myCar4);

function displayDescription(carid){
    let foundCar = findCarById(carid);
    let description = getDescription(foundCar);
    alert(description);
}

function findCarById(carid){
   for(i=0; i<car.length; i++) {
       if(loveCar[i].id === carid) {
           return loveCar[i];
       }
   }
}

function getDescription(myCar){
    return {
    id: "bmw",
    car: "BMW",
    model: "F94",
    color: "BLACK",
    date: 2004,
    horsepower: "ყველა",
    price: "6000$",
    }
}

function giveAlert() {
    alert("work");
}


