function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(
    function (valorAcumaldo = 0, nuevoElemento) {
      return valorAcumaldo + nuevoElemento;  
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const lista1 = [
  100,
  200,
  500,
  900,
  400000000,
];


const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 ===0 ) {
    // numerito es par?
    return true;
  } else {
    return false;
  }

};

let mediana;

if (esPar(lista1.length)){
    // lista1 es par?
  // necesitamos dos elementos
  // -> el promedio
  // -> mediana

  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];
  const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1, 
    elemento2,
  ]);
  mediana = promedioElemento1y2;

} else {
  // posicion mitadLista1 dentro lista1
  // -> mediana
  mediana = lista1[mitadLista1];
};