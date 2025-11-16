document.addEventListener("DOMContentLoaded", function () { // con el DOMContentLoader Espera a que el HTML esté listo o sino da NULL
  const buttons = document.querySelectorAll(".category-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () { 
      if (button.classList.contains("active")) {
        this.classList.remove("active"); //con this invocamos al elemento que triggereo el evento
        return;
      }
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
