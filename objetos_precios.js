//Crea un arreglo “precios” aumentándole el valor del IGV (18%)
//a los elementos del arreglo “valorDeVenta” 

var valorDeVenta = [20, 14, 24, 20, 15, 25, 40, 25, 13, 8, 5.4, 10, 11];
var precios = [precioFinal];


function precioFinal(){
  var IVG = (0.18);
  console.log(valorDeVenta[0]+(valorDeVenta[0] * IVG));
  console.log(valorDeVenta[1]+(valorDeVenta[1] * IVG));
  console.log(valorDeVenta[2]+(valorDeVenta[2] * IVG));
  console.log(valorDeVenta[3]+(valorDeVenta[3] * IVG));
  console.log(valorDeVenta[4]+(valorDeVenta[4] * IVG));
  console.log(valorDeVenta[5]+(valorDeVenta[5] * IVG));
  console.log(valorDeVenta[6]+(valorDeVenta[6] * IVG));
  console.log(valorDeVenta[7]+(valorDeVenta[7] * IVG));
  console.log(valorDeVenta[8]+(valorDeVenta[8] * IVG));
  console.log(valorDeVenta[9]+(valorDeVenta[9] * IVG));
  console.log(valorDeVenta[10]+(valorDeVenta[10] * IVG));
  console.log(valorDeVenta[11]+(valorDeVenta[11] * IVG));
  console.log(valorDeVenta[12]+(valorDeVenta[12] * IVG));
}

precioFinal();
