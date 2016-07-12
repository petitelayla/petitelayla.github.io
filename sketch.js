//2016 07 12 taller p5 numero 04
//elipse que sigue al mouse en un fondo verde



//variables
//declaracion de variables
var anchoElipse;

//asignacion de variables
anchoElipse = 100;
//pasan cosas
//nueva  asignación
anchoElipse = 50;

//manera abreviada de declarar y asignar en una línea
//equivale a dos lineas de codigo
//var alturaEllipse;
//var alturaElipse = 100;
//nueva asignación
alturaElipse = 50;

//scope o rango o alcance
//variables globales y locales

//las variables globales son declaradas
//fuera de los cuerpos de las funciones

//las variables locales
//son declaradas dentro del cuerpo de alguna funcion
//y solo pueden ser variado su valor con una asignacion
//dentro de esa misma funcion

//declaracion de la funcion setup
function setup() {

  //createCanvas(dimhor, dimver);
  //createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);

  //background(R, G, B);
  background(0, 255, 0);

  //relleno de la elipse
  //fill(R, G, B);
  fill(139, 0, 139);

  //stroke(R, G,B);
  //notstroke() hace que no tenga borde
  noStroke();

  //strokeweight(px);
  //define el borde en pixeles
  //strokeweight(12);

  //frameRate(framesPorSegundoMaxima);
  frameRate(20);

}

//declaracion de la funcion draw
function draw() {
  
  background(255);

  //ejecutar funcion fondoRojo()
  fondoRojo();

  //ellipse(posX_en_px, posY_en_px, width_en_px, height_en_px);
  ellipse(mouseX, mouseY, anchoElipse, alturaElipse);

  //escribe en la consola de javascript
  console.log("hola que tal");
  console.log(alturaElipse);
  
  muchasElipses();

  saveCanvas('myCanvas', 'jpg');
  
}

//declaracion de funcion nueva
function nombreFuncion(argumento1, argumento2, etc) {

}

//declaracion de la funcion fondoRojo()
function fondoRojo() {
  //declaracion y asignacion de variable local
  //llamada rojo
  var rojo = 255;
  //usamos variable local llamado rojo
  background(rojo, 0, 0);
  //imprimir variable local rojo en consola
  console.log("el valor de la variable rojo es" + rojo + "hola layla");
}

//declaracion de la funcion muchasElipses()
function muchasElipses() {
  
  var muchas = 1000;
  
  //for(variable de loop; condicion de seguir; refrescar) {}
  for (var i = 0; i < muchas; i++) {
    //color del relleno
  fill(random(255), random(255), random(255), 200 + random(20));
  //sin borde 
  noStroke();

  var ancho = 100;
  var alto = 100;
  //la funcion random(x) arroja un valor aleatorio entre 0 y x
  ellipse(random(width), random(height), random(ancho), random(alto));
  }
  
}