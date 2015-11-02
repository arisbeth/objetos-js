//Cómo representarías los siguientes datos en un objeto:
//Toyota, Corolla, 2015, Azul, Luis Perez, true, 30000

var miObjeto = {
    fabricante:"Toyota", 
    modelo:"Corolla",
    año:"2015",
    color:"Azul", 
    propietario:"Luis Perez", 
    liquidado:"true", 
    precio:"30000"
};


function total(){
  if((miObjeto.liquidado == "true")&&(miObjeto.precio == "30000"))
  {
    alert("Felicidades " + (miObjeto.propietario) + " por su nuevo " + 
     ( miObjeto.modelo ) + ( miObjeto.fabricante ) + ( miObjeto.año ) +
     " color " + (miObjeto.color));
  }
  else{
    alert("aun falta por liquidar");
  }
}
total();



//Hamburguesa casera, 15 minutos, 4 porciones, pan, carne, tomate, lechuga, mayonesa, queso

var miObjeto = {
    platillo:"Hamburguesa casera", 
    preparacion:"15 minutos",
    cantidad:"4 porciones",
    ingrediente_1:"pan", 
    ingrediente_2:"carne", 
    ingrediente_3:"tomate", 
    ingrediente_4:"lechuga",
    ingrediente_5:"mayonesa",
    ingrediente_6:"queso",
};


function comida(){
  var ingredientes=( miObjeto.ingrediente_1 +" / "+ (miObjeto.ingrediente_2) + 
	" / "+ miObjeto.ingrediente_3 +" / "+ miObjeto.ingrediente_4 +
	" / "+ miObjeto.ingrediente_5)+" / "+ miObjeto.ingrediente_6;

  {console.log(miObjeto.platillo + " para " + miObjeto.cantidad);}
  {console.log("tiempo de preparación: " + miObjeto.preparacion);}
  {console.log(ingredientes);}

}

comida();

