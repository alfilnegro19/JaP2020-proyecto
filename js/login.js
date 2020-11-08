//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


   
     function guardado(){ 
var GuardarMail = document.getElementById("loginemail");
localStorage.setItem("eMail", GuardarMail.value);
localStorage.setItem("contLogin", 1)
}

document.addEventListener("DOMContentLoaded", function(e){

});
