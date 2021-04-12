// stampo i numeri fino a 100 multipli di "3" "5" e "15"
for (var i = 0; i < 100; i++) {  
     //stampa il multiplo di 3 e 5 =15
    if (i % 15 === 0)
        console.log(i+" "+"io sono FizzBuzz" + " " + "%15");
        //  //stampa il multiplo di 3 
    else if (i % 3 === 0)
        console.log(i+" "+"io sono Fizz" + " " + "%3");
         //stampa il multiplo 5 
    else if (i % 5 === 0)
        console.log(i+" "+"io sono Buzz" + " " + "%5");
         //stampa il ciclo non multiplicato
    else
        console.log("non sono multiple per adesso "+i);
}