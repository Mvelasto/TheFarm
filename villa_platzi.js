/******************************************************/
/*que interesante! asi se hace un random en javascript*/
// var min = 10;
// var max = 20;
// var z = Math.floor(Math.random()*(max-min+1))+min;
// console.log(z);    //fin random basico*************
/*****************************************************/
var cv = document.getElementById('canvas');
var papel = cv.getContext('2d');
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
//fondo.addEventListener("load", dibujar);//<--se añade a fondo evento carga
function dibujar(){//al papel se le coloca fondo (obj preparado), ubicacion donde comienza
  if(fondo.cargaOkF){
    papel.drawImage(fondo.imagen, 0,0);//el dibujo esquina suerior izquierda (0,0)
    // 3 vacas aleatorias
    for(var v=0; v<3; v++){
      var x = aleatorio(0,420); // papel (500x500) ->vaca ubicada 500-80(80 tam vaca)
      var y = aleatorio(0,420);// xq si la dibuja en el punto 500 no se vera
      papel.drawImage(vaca.imagen, x,y);
    }
  }
}
//------------------------------------------------------------------------------
function aleatorio(maximo,minimo){
  var z = Math.floor(Math.random()*(maximo-minimo+1))+minimo;
  console.log(z);
  return z; //<--realmente sin el return no m devuelve valor
}
// aleatorio(min,max);
