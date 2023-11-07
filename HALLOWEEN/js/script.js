/*****************************************************************************/
/*                     JavaScript de index.html                              */
/*                     Autor: Sergio Gamez Ortega                            */
/*                     Version: 1.0                                          */
/*                     Fecha: Noviembre de 2023                              */
/*                     Comentario: Trabajo de Lenguaje de Marcas             */
/*****************************************************************************/

function show(element) {
    document.getElementById(element).style.visibility="visible";
}

function hide(element) {
    document.getElementById(element).style.visibility="hidden";
}

function sound(element) {
    document.getElementById(element).play();
}

function silence(element) {
    document.getElementById(element).pause();
}