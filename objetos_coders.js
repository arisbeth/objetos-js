//Encuentra el mail de una coder:

//Agrega dos coders nuevas al arreglo “coders”. 
//Una al principio del arreglo y otra al final del arreglo.

var coders = [
    {
        nombre:"Aris",
        ciudad:"Mexico",
        email:"aris@mexico.la",
        edad:23
    },
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
    },
    {
        nombre:"Ado",
        ciudad:"Mexico",
        email:"ado@mexico.la",
        edad:21
    }
];


//Escribe una función en la que el usuario ingrese el nombre de una coder 
//y le devuelva el email de esa coder.

function email(){
  var nombre = prompt("Escribir nombre de la coder para encontrar su email");
  if((nombre) == (coders[0].nombre)){
  console.log(coders[0].email);}
  else if((nombre) == (coders[1].nombre)){
  console.log(coders[1].email);}
  else if((nombre) == (coders[2].nombre)){
  console.log(coders[2].email);}
  else if((nombre) == (coders[3].nombre)){
  console.log(coders[3].email);}
  else if((nombre) == (coders[4].nombre)){
  console.log(coders[4].email);}
  else {
  console.log(coders[5].email);}
}

email();


//Ayer fue el cumpleaños de Constanza, actualiza su edad.

console.log("Constanza cumplio " + (coders[4].edad +1) + (" años"));


//Por favor, corrige el mail de Claudia.

var corregir = coders[3].email.replace("caudia@mexico.la", "claudia@mexico.la");{
  console.log("el email de Claudia es " + corregir);
}

