document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("opciones").addEventListener("change", function() {
    var seleccion = this.value;
    if (seleccion === "opcion1") {
      document.getElementById("pestanas").style.display = "block";
    } else {
      document.getElementById("pestanas").style.display = "none";
    }
  });
});
