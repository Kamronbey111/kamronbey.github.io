
let name = "Kamron";

let age = 17;

let isOnline = true;


let o; 
console.log(o);

let y = null;




let element = document.getElementById("demo");
console.log(element);


let elements = document.getElementsByClassName("text");
console.log(elements[0]);


let el = document.querySelector(".text");
let all = document.querySelectorAll(".text");

let p = document.getElementById("demo");
p.innerText = "Yangi matn";
p.style.color = "red";
p.style.fontWeight = "bold";


let newElement = document.createElement("h1");
newElement.innerText = "DOM zo'r!";
document.body.appendChild(newElement);







let a = 10;
let b = 3;

console.log(a + b); 
console.log(a - b);
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 


let x = 5;
x += 2; 
x -= 1;
x *= 3;
x /= 2;



console.log(5 == "5"); 
console.log(5 === "5"); 
console.log(5 != 4);    
console.log(5 !== "5");
console.log(5 > 3);     
console.log(5 < 3);     
console.log(5 >= 5);    


console.log(true && false); 
console.log(true || false); 
console.log(!true);         


console.log(typeof 123);      
console.log(typeof "hello");   
console.log(typeof true);      


let car = {
    brand: "BMW",
    model: "M5",
    year: 2022,
    color: "black"
};


console.log(car.brand);     
console.log(car["model"]); 


car.color = "white";
car.year = 2023;


car.speed = 280;


delete car.model;


let user = {
    name: "Kamron",
    sayHello: function() {
      console.log("Salom, men " + this.name);
    }
  };
  
  user.sayHello(); 




let fruits = ["olma", "banan", "gilos"];


console.log(fruits[0]); 
console.log(fruits[1]); 


fruits[1] = "shaftoli"; 

fruits.push("anor");     
fruits.unshift("limon"); 


fruits.pop();     
fruits.shift();  



for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

 

 for (let fruit of fruits) {
    console.log(fruit);
  }



let numbers = [3, 7, 1, 9];

numbers.sort(); 
numbers.reverse(); 

console.log(numbers.includes(7)); 
console.log(numbers.indexOf(1)); 



function salomBer() {
    console.log("Assalomu alaykum!");
  }
  
  salomBer(); 

  

  function salomIsmBilan(ism) {
    console.log("Salom, " + ism + "!");
  }
  
  salomIsmBilan("Kamron"); 

  function yigindi(a, b) {
    console.log("Yig‘indi:", a + b);
  }
  
  yigindi(5, 3); 


  function kvadrat(x) {
    return x * x;
  }
  
  let natija = kvadrat(4);
  console.log(natija); 

  

  const salom = (ism) => {
    return "Salom, " + ism;
  };
  
  console.log(salom("Kamron"));

 

  const kvadrat = x => x * x;
  console.log(kvadrat(5)); 


 let yosh = 18;

if (yosh >= 18) {
  console.log("Siz katta yoshdasiz");
} else if (yosh >= 13) {
  console.log("Siz o‘smirsiz");
} else {
  console.log("Siz bola ekansiz");
}


console.log(5 == "5");   
console.log(5 === "5");



let yoshi = 20;
let natijasi = yosh >= 18 ? "Ruxsat berildi" : "Yosh yetarli emas";
console.log(natija);



for (let i = 1; i <= 5; i++) {
    console.log("Qadam:", i);
  }



let i = 1;
while (i <= 3) {
  console.log("Salom", i);
  i++;
}

let j = 1;
do {
  console.log("Bir marta bo‘lsa ham ishlaydi:", j);
  j++;
} while (j <= 2);



for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; 
    if (i === 5) break;    
    console.log(i);
  }