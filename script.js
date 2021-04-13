// stampo i numeri fino a 100 multipli di "3" "5" e "15"
var FizzBuzz = document.getElementById("FizzBuzz")
// stampo i numeri fino a 100 multipli di "3" 
var Fizz = document.getElementById("Fizz")
// stampo i numeri fino a 100 multipli di "5" 
var Buzz = document.getElementById("Buzz")

for (var i = 0; i < 100; i++) {
    //stampa il multiplo di 3 e 5 =15
    if (i % 5 !== 0 && i % 3 !== 0) {
        console.log(i + " " + "io sono FizzBuzz");
        FizzBuzz.innerHTML += "<li>" + i + " " + "io sono FizzBuzz" + "</li>"
    }
    //  //stampa il multiplo di 3 
    else if (i % 3 === 0) {
        console.log(i + " " + "io sono Fizz" + " " + "% 3");
        Fizz.innerHTML += "<li>" + i + " " + "io sono Fizz" + "</li>"
    }
    //stampa il multiplo 5 
    else if (i % 5 === 0) {
        console.log(i + " " + "io sono Buzz" + " " + "% 5");
        Buzz.innerHTML += "<li>" + i + " " + "io sono Buzz" + "</li>"
    }
    else ("")
    //eventuale stampo in /console o doc html


}