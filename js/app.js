/**
 * 
 * Esta aplicación es un ejemplo de como consumir datos
 * proveidos por una API REST en formato JSON.
 *
 * La API se encuentra en https://3a8i3.github.io/
 * y devuelve un array de objetos con datos de 7 musicas
 * 
 * La aplicación debe recuperar los datos proveidos por la API
 * y mostrarlos en la página.
 *
 * # PASOS A SEGUIR #
 * 1. Recuperar la plantilla html en la que se mostrarán los datos y guardarla una variable
 * 2. Recuperar los datos de la API utilizando AJAX a través de la función jquery.get()
 * 3. Pasar los datos recuperados a una función que se encargará de cargar los datos
 *    en la plantilla y mostrar en la página.
 *    # PASOS DE LA FUNCION #
 *    3.1. Crear un ciclo para recorrer el array de datos recuperado
 *    3.2. Crear una variable que guarde el objeto jquqqery de la plantilla para cada ciclo
 *    3.3. Recuperar y modificar los elementos de la plantilla correspondientes para cada
 *         dato
 *    3.4. Cargar la plantilla ya modificada en la página
 *    
 */
 //paso 1
 //recuperar la plantilla en formato string y guarda en la variable
let plantilla = $('.row').html();

//elimina el contenido con la clase .row
$('.row').html('');

$.get("https://3a8i3.github.io/libros/", function(datos){
	mostrarDatos(datos);
});

function mostrarDatos( d ){
console.log(d);


 
 for (let i = 0; i < d.length; i++) {
 let plantJQ = $(plantilla);
 
 plantJQ.find('.titulo').text(d[i].titulo);
 plantJQ.find('.anho').text(d[i].anho);
 plantJQ.find('.editorial').text(d[i].editorial);
 plantJQ.find('.resumen').text(d[i].resumen);
 plantJQ.find('.temas').text(d[i].temas);
 plantJQ.find('.portada').attr('src', d[i].portada);
 plantJQ.find('.foto').attr('src', d[i].autor.foto);
 plantJQ.find('.nombre-autor').text(d[i].autor.nombre);
 plantJQ.find('.fecha-autor').text(d[i].autor.nacimiento.fecha);
 plantJQ.find('.ciudad-autor').text(d[i].autor.nacimiento.ciudad);
 plantJQ.find('.pais-autor').text(d[i].autor.nacimiento.pais); 
 plantJQ.find('.biografia-autor').text(d[i].autor.biografia);





$('.row').append(plantJQ);


 }

}
//let mostrar = () => {    }


