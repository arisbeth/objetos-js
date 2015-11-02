//Encuentra el mail de una coder:


var coders = [
    {
        nombre: "Julia",
        ciudad:"Lima",
        email:"julia@lima.la",
        edad:24
    },
    {
        nombre:"Constanza",
        ciudad:"Santiago",
        email:"constanza@santiago.la",
        edad:19
    },
    {
        nombre:"Claudia",
        ciudad:"Mexico",
        email:"caudia@mexico.la",
        edad:17
    },
    {
        nombre:"Juana",
        ciudad:"Arequipa",
        email:"juana@arequipa.la",
        edad:21
    }
];

function email(){
  var nombre = prompt("Escribir nombre de la coder para encontrar su email");
  if((nombre) == (coders[0].nombre)){
  console.log(coders[0].email);}
  else if((nombre) == (coders[1].nombre)){
  console.log(coders[1].email);}
  else if((nombre) == (coders[2].nombre)){
  console.log(coders[2].email);}
  else {
  console.log(coders[3].email);}
}

email();

