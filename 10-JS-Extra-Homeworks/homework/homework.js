// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada 
  //elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let i = 0;
  var m = [];
  for (const p in objeto) {

    m.push([p, objeto[p]]);
  }
  return m;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el
  // número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> 
  //{ a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let o = {};
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) in o) {     //devuelve true si existe la clave en el objeto
      o[string.charAt(i)] = o[string.charAt(i)] + 1;
    } else {
      o[string.charAt(i)] = 1;

    }
    //console.log(str.charAt(i)+':' +o[str.charAt(i)])    ;
  }
  return o;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las 
  //letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let u = '';
  let l = '';
  for (i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      u = u + s.charAt(i);
    } else {
      l = l + s.charAt(i);
    }
  }
  return (u + l);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal 
  //que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> 
  //"ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //let c="The Henry Challenge is close!";
  let s = '';
  let t = '';
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      s = s + t + ' ';
      t = '';
    } else {
      t = str.charAt(i) + t;
    }
  }
  return (s + t);
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna 
  //"No es capicua"
  //Escribe tu código aquí  
  let n = numero.toString();
  for (i = 0; i < Math.trunc((n.length / 2)); i++) {
    if (n.charAt(i) !== n.charAt(n.length - i - 1)) {
      return 'No es capicua';
    }
  }
  return 'Es capicua';
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener 
  //dichas letras.
  //Escribe tu código aquí
  let c = ''
  for (i = 0; i < cadena.length; i++) {
    c = c + (cadena.charAt(i) !== 'a' &&
      cadena.charAt(i) !== 'b'
      && cadena.charAt(i) !== 'c' ? cadena.charAt(i) : '');
  }
  return c;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden 
  //creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> 
  //[“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  while (eliminar(arr)) {
  }
  return arr;
  function eliminar() {
    let largo = arr[arr.length-1].length;
    let contenido = '';
    let encontro=false;
    for (i = arr.length-2; i>=0; i--) {
      if (arr[i].length > largo) {
        contenido = arr[i];
        arr.splice(i, 1);
        arr.push(contenido);
        encontro=true;
        return true;
      }
      largo = arr[i].length;
    }
    return encontro;
  }

}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una 
  //función que permita 
  //retornar un nuevo array con la intersección de ambos elementos.
  // (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let arr=[]
  for(i=0;i<arreglo1.length;i++){
    for(t=0;t<arreglo2.length;t++){
      if(arreglo1[i]===arreglo2[t]){
        arr.push(arreglo2[t]);
      }
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

