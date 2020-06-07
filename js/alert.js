

class Car{
    constructor( id, car, model, color, date, horsepower, price ) {
        this.id = id;
        this.car = car;
        this.model = model;
        this.color = color;
        this.date = date;
        this.horsepower = horsepower;
        this.price = price; 
    }
    description(){
        alert(`ამ მანქანას აქვს შენდეგი მახასიათებლები: \n car: ${this.car}, \n color: ${this.color}, \n model: ${this.model}, \n date: ${this.date}, \n horsePower: ${this.horsepower}, \n price: ${this.price}`);
    }
}

  let myCar = new Car ( "bmw", "bmw", "F94", "black", "2016", "400", 11000);
  let myCar2 = new Car ( "mercedes", "MERCEDES", "G", "black", "2015", "320", 18000);
  let myCar3 = new Car ( "audi", "AUDI", "TT", "grey", "2018", "280", 10000);
  let myCar4 = new Car ( "toyota", "TOYOTA", "PRADO", "white", "2013", "240", 5000);
  
  let loveCar = [myCar, myCar2, myCar3, myCar4];

  function displayDescription (carid) {
    for ( i=0; i < loveCar.length; i++ ) {
      if ( loveCar[i].id === carid ) {
        loveCar[i].description();
      }
    }
  }

function giveAlert() {
    let input = parseInt ( document.querySelector ('#search').value );
    let stringInput = input.toString();
    let searchedloveCar = [];
    if ( stringInput === "NaN" ) {
        alert (`გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.`);
    } else {
        searchedloveCar = [];
        disableExpenciveCars (input, loveCar);
        for ( let i = 0; i < loveCar.length; i++ ) {
            if ( input >= loveCar[i].price ) {
                searchedloveCar.push(`\n \n ამ ${input} ფასად შეგიძლიათ შეიძინოთ: \n სახელი: ${loveCar[i].car}, \n მოდელი: ${loveCar[i].model}, \n ფასი: ${loveCar[i].price}$`);
            }
        }
        if ( searchedloveCar.length > 0 ) {
            alert(searchedloveCar);
        } else {
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

let maxprice = 0;

// EDZEBS YVELAZE DZVIR MANQANAS
function searchMostExpensiveCar(){
    let count = 1;
    for(let i = 0; i<loveCar.length;i++){
        count++;//aketebs tvlas rata daabrunos max=is mxolod bolos migebuli mnishvneloba

        if(maxprice < loveCar[i].price){
            max = loveCar[i];//anichebs yvelaze dzviriani manqanis obieqts max-s
            maxprice = loveCar[i].price;//anichebs fas cvlads rata sheadaros momdevno manqanis fasebs
        }
        if(count===loveCar.length){
            return max;
        }
        
    }
}



//Gilakis dacherisas amoqmdebs funqcias romelic tovebs mxolod yvelaze dzvirian manqanas
function displayMostExpensiveCar(){
    let mostexpensivecar = searchMostExpensiveCar().id;
        for(i = 0; i < loveCar.length; i++){
            let SelectAllCars = document.getElementById(loveCar[i].id);
            SelectAllCars.style.display = "none";
            if(mostexpensivecar === SelectAllCars.id){
                SelectAllCars.style.display = "block";
            }
            
        }
}
// disable();




// EDZEBS YVELAZE Iafasian MANQANAS

function searchCheapestCar(){
    let count = 0;
    //shemogvaqvs yvelaze dzviriani manqana rom masze iafiani manqanebis Shedareba
    let minprice = searchMostExpensiveCar().price;
    for(let i = 0; i<loveCar.length;i++){
        
        count++;//aketebs tvlas rata daabrunos min=is mxolod bolos migebuli mnishvneloba
        if(minprice > loveCar[i].price){
            min = loveCar[i];//anichebs yvelaze dzviriani manqanis obieqts max-s
            minprice = loveCar[i].price;//anichebs fas cvlads rata sheadaros momdevno manqanis fasebs);
        }
        if(count===loveCar.length){
            return min;
        }
        
    }
}

//GAMOAQVS YVELAZE IAFASIANI MANQANA
function displayCheapestCar(){
    let cheapestcar = searchCheapestCar().id;
    for(i = 0; i < loveCar.length; i++){
        let SelectAllCars = document.getElementById(loveCar[i].id);
        SelectAllCars.style.display = "none";
        if(cheapestcar === SelectAllCars.id){
            SelectAllCars.style.display = "block";
        }
        
    }
}


//Gamoaqvs yvela manqana
function cancel(){
    for(i = 0; i < loveCar.length; i++){
        let SelectAllCars = document.getElementById(loveCar[i].id);
        SelectAllCars.style.display = "block";

        
    }
}

//Gamoaqvs sashualo pasi

function getAlertAboutAveragePrice() {
    let totalPrice;
    for (let i = 0; i < loveCar.length; i++) {
        totalPrice =+ loveCar[i].price;
        
    }
    alert(`მანქანების საშუალო ღირებულება არის: ${totalPrice/loveCar.length}`);
}

// Image Title

for(let i = 0; i < loveCar.length; i++){
    let imageTitle = document.getElementById(loveCar[i].id);
    imageTitle.querySelector('p').innerHTML = `${loveCar[i].car} | ${loveCar[i].model}`;
}