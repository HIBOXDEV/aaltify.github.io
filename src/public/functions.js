document.addEventListener("DOMContentLoaded", function () {
    const userAvatar = document.getElementById("user-avatar");
    const logoutLink = document.getElementById("logout-link");
  
    userAvatar.addEventListener("click", function () {
      // Muestra el enlace de cierre de sesión cuando se hace clic en la imagen
      logoutLink.style.display = "inline";
    });
  });
  
  
  
  
  
  
  