let myCar = {
    id: "bmw",
    car: "BMW",
    model: "F94",
    color: "BLACK",
    date: "2016",
    horsepower: "ყველა",
    price: "18000$",
}

let myCar2 = {
    id: "mercedes",
    car: "MERCEDES",
    model: "G",
    color: "BLACK",
    date: "2015",
    horsepower: "ყველა",
    price: "13000$",
}

let myCar3 = {
    id: "audi",
    car: "AUDI",
    model: "TT",
    color: "GREY",
    date: "2018",
    horsepower: "ყველა",
    price: "9000$",
}

let myCar4 = {
    id: "toyota",
    car: "TOYOTA",
    model: "PRADO",
    color: "white",
    date: "2013",
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
   for(i=0; i<loveCar.length; i++) {
       if(loveCar[i].id === carid) {
           return loveCar[i];
       }
   }
}

function getDescription(myCar){
    return  `ამ მანქანას აქვს შენდეგი მახასიათებლები: \n car: ${myCar.car}, \n color: ${myCar.color}, \n model: ${myCar.model}, \n date: ${myCar.date}, \n horsePower: ${myCar.horsePower}, \n price: ${myCar.price}`
}


// function getDescription(myCar){
//     return  "ამ მანქანას აქვს შენდეგი მახასიათებლები: \n car: BMW \n color: შავი \n model: F94 \n date: 2019 \n horsePower: ყველა \n price: 6000$"
// }


// function getDescription(myCar){
//     return  ამ მანქანას აქვს შენდეგი მახასიათებლები: \n car: ${myCar.mark}, \n color: ${myCar.color}, \n model: ${myCar.model}, \n date: ${myCar.year}, \n horsePower: ${myCar.horsePower}, \n price: ${myCar.price} $
// }