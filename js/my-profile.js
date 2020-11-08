function guardarCambios() {
    var perfil = {};
    
   
    perfil.nombre = document.getElementById("nombre").value;
    perfil.segnombre = document.getElementById("segnombre").value;
    perfil.apellido = document.getElementById("apellido").value;
    perfil.segapellido = document.getElementById("segapellido").value;
    perfil.email = document.getElementById("email").value;
    perfil.telefono = document.getElementById("telefono").value;
    
    
    localStorage.setItem('profileData', JSON.stringify(perfil));
  }
  
  document.addEventListener("DOMContentLoaded", function (e) {
    
    var profileData = JSON.parse(localStorage.getItem('profileData'));
  
    
    if (profileData !== null) {
      document.getElementById("nombre").value = profileData.nombre;
      document.getElementById("segnombre").value = profileData.segnombre;
      document.getElementById("apellido").value = profileData.apellido;
      document.getElementById("segapellido").value = profileData.segapellido;
      document.getElementById("email").value = profileData.email;
      document.getElementById("telefono").value = profileData.telefono;
    }
  });