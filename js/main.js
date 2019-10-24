// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// dichiaro le variabili
var lista;



// creo un ciclo for per stampare numeri da 1 a 100;
for (var i = 1; i <= 100; i++) {
  // console.log(i);
  lista = document.getElementById('listanum').innerHTML;
  
  // dichiaro le condizioni per i multipli
  if (i % 3 === 0 && i % 5 === 0) {
    document.getElementById('listanum').innerHTML = lista + "<li>" + "FizzBuzz" + "</li>";
    // console.log(i,"FizzBuzz");
  } else if (i % 3 === 0) {
    document.getElementById('listanum').innerHTML = lista + "<li>" + "Fizz" + "</li>";
    // console.log(i,"Fizz");
  } else if (i % 5 === 0) {
    document.getElementById('listanum').innerHTML = lista + "<li>" + "Buzz" + "</li>";
    // console.log(i,"Buzz");
  } else {
    document.getElementById('listanum').innerHTML = lista + "<li>" + i + "</li>";
    // console.log(i);
  }
}
