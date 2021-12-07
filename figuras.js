// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
  return lado * 4;
} 
perimetroCuadrado();

function areaCuadrado(lado) {
  return lado * lado;
} 
console.groupEnd();


// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();



// Codigo del circulo
console.group("Circulos");
  // Diametro
  function diametroCirculo(radio) {
     return radio * 2;
  };

  // Pi
  const PI = Math.PI;

  // Circunferencia
  function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }; 

  // Area
  function areaCirculo(radio) {
    return (radio * radio) * PI;
  };

console.groupEnd();


// Aqui se interactua con HTML

// CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value)
  alert(perimetro);
};

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value)
  alert(area);
}

// TRIANGULO

function alturaTrianguloIsoceles(trianguloGrandeLado1,trianguloGrandeLado2, trianguloGrandeLadoBase) {
  if (trianguloGrandeLado1 != trianguloGrandeLado2){
    console.error("Los lados 1 y 2 no son iguales")
  }
  else {

    const trianguloPequenoLado2 = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = tiranguloGrandeLado1;

    const trianguloPequenoLado2Cuadrado = trainguloPequenoLado2 * trainguloPequenoLado2;
    const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloPequenoLado1 = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLado2Cuadrado);

    const trianguloGrandeAltura = trianguloPequenoLado1;
    return trianguloGrandeAltura;
  };
};








// CIRCULO
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value)
  alert(perimetro);
};

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value)
  alert(area);
}