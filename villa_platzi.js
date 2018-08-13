/******************************************************/
/*que interesante! asi se hace un random en javascript*/
 var min = 0;
 var max = 420;
// var z = Math.floor(Math.random()*(max-min+1))+min;
// console.log(z);    //fin random basico*************
/*****************************************************/
var cv = document.getElementById('canvas');
var papel = cv.getContext('2d');
document.addEventListener("keyup", mueveLobo);

function mueveLobo(){
  
}
//var mapa = "tile.png";
// var fondo = new Image();//<-objeto fondo de js.(fondp es una instancia (objeto) d la clase Image)
// fondo.src = mapa;//<-fondo es la instancia, se le añade el src, se le pasa la direccion d la imagende fondo
var fondo = {//<-- JSON para declarar usar fondo como si fuese una clase con atributos =S
  url:"tile.png",
  cargaOkF: false
};
fondo.imagen = new Image();//<--creamos una variable imagen de tipo fondo es UNA IMAGEN (new image)
fondo.imagen.src = fondo.url;//<--como posee atributos de IMAGE se le asigna un src
fondo.imagen.addEventListener("load",cargaFondo);
function cargaFondo(){//<---funcion cargarFondo
  fondo.cargaOkF = true;
  dibujar();
}
/************ ok ahora la vaca *******************************************************/
var vaca = {//<-- JSON para declarar usar vaca como si fuese una clase con atributos =S
  url:"vaca.png",
  cargaOkV: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargaVaca);
function cargaVaca(){
  vaca.cargaOkV = true;
  dibujar();
}
/**********************************************************************************/
var cerdo = {
  url: "cerdo.png",
  cargaOkC: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargaCerdo);
function cargaCerdo(){
  cargaOkC = true;
  dibujar();
}
/*********************************************************************************/
var pollo = {
  url: "pollo.png",
  cargaOkP: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargaPollo);
function cargaPollo(){
  cargaOkP = true;
  dibujar();
}
/********************************************************************************/
var lobo = {
  url: "lobo.png",
  cargaOkL: false
};
lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load",cargaLobo);
function cargaLobo(){
  cargaOkL = true;
  dibujar();
}
/********************************************************************************/
/********************************************************************************/

/*******************************************************************************/
/*********************************************************************************/
//fondo.addEventListener("load", dibujar);//<--se añade a fondo evento carga
function dibujar(){//al papel se le coloca fondo (obj preparado), ubicacion donde comienza
  var tecla = {
    UP: 38,
    DOWN: 40,     /*// <- este es mi objeto JSON*/
    LEFT: 37,
    RIGHT: 39
  };
  var xl = 190;
  var yl = 190;
  var cantVacas = aleatorio(-2,10);
  var cantCerdos = aleatorio(0,5);
  var cantPollos = aleatorio(1,10);
  if(fondo.cargaOkF){
    papel.drawImage(fondo.imagen, 0,0);//el dibujo esquina suerior izquierda (0,0)
    // vacas aleatorias
    for(var v=0; v<cantVacas; v++){
      var x = aleatorio(min,max); // papel (500x500) ->vaca ubicada 500-80(80 tam vaca)
      var y = aleatorio(min,max);// xq si la dibuja en el punto 500 no se vera
      papel.drawImage(vaca.imagen, x,y);
    }//for vacas
    for(var c=0; c<cantCerdos; c++){
      var j = aleatorio(min,max);
      var k = aleatorio(min,max);
      papel.drawImage(cerdo.imagen,j,k);
    }//for cerdo
    for(var p=0; p<cantPollos; p++){
      var m = aleatorio(min,max);
      var n = aleatorio(min,max);
      papel.drawImage(pollo.imagen,m,n);
    }//for pollo
    papel.drawImage(lobo.imagen, xl,yl);
  }
}

//------------------------------------------------------------------------------
function aleatorio(maximo,minimo){
  var z = Math.floor(Math.random()*(maximo-minimo+1))+minimo;
  console.log(z);
  return z; //<--realmente sin el return no m devuelve valor
}
// aleatorio(min,max);
