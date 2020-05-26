let myCar = {
    id: "bmw",
    car: "BMW",
    model: "F94",
    color: "BLACK",
    date: "2016",
    horsepower: "400",
    price: "20000",
}

let myCar2 = {
    id: "mercedes",
    car: "MERCEDES",
    model: "G",
    color: "BLACK",
    date: "2015",
    horsepower: "320",
    price: "15000",
}

let myCar3 = {
    id: "audi",
    car: "AUDI",
    model: "TT",
    color: "GREY",
    date: "2018",
    horsepower: "280",
    price: "10000",
}

let myCar4 = {
    id: "toyota",
    car: "TOYOTA",
    model: "PRADO",
    color: "white",
    date: "2013",
    horsepower: "240",
    price: "5000",
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
    return  `ამ მანქანას აქვს შენდეგი მახასიათებლები: \n car: ${myCar.car}, \n color: ${myCar.color}, \n model: ${myCar.model}, \n date: ${myCar.date}, \n horsePower: ${myCar.horsepower}, \n price: ${myCar.price}`
}

function giveAlert(){
    let input = parseInt(document.querySelector('#search').value);
    let stringInput = input.toString();
    let searchedloveCar = [];
    if(stringInput === "NaN"){
        alert(`გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.`);
    }else{
        searchedloveCar = [];
        disableExpenciveCars(input, loveCar);
        for(let i = 0; i < loveCar.length; i++){
            if(input >= loveCar[i].price ){
                searchedloveCar.push(`\n \n ამ ${input} ფასად შეგიძლიათ შეიძინოთ: \n სახელი: ${loveCar[i].car}, \n მოდელი: ${loveCar[i].model}, \n ფასი: ${loveCar[i].price}$`);
            }
        }
        if(searchedloveCar.length > 0){
            alert(searchedloveCar);
        }else{
             alert(`სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა`);
        }
    }
}
  
function disableExpenciveCars(price, loveCar) {
    let expenciveCars =[]
    for(let i = 0; i < loveCar.length; i++) {
        if(loveCar[i].price > price) {
            expenciveCars.push(loveCar[i]);
        }

    for(let i = 0; i < expenciveCars.length; i++) {   
       let currentElement  = document.getElementById(expenciveCars[i].id);
       currentElement.querySelector(".button2").setAttribute("disabled", true);
    }
}
}