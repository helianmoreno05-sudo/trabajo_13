const preguntas = document.querySelectorAll(".pregunta");

const items = document.querySelectorAll(".item");

preguntas.forEach(function (pregunta) {
  pregunta.addEventListener("click", function () {
    const item = pregunta.parentElement;

    const estabaAbierto = item.classList.contains("abierto");

    items.forEach(function (otro) {
      otro.classList.remove("abierto");
      otro.querySelector(".pregunta").setAttribute("aria-expanded", "false");
    });

    if (!estabaAbierto) {
      item.classList.add("abierto");
      pregunta.setAttribute("aria-expanded", "true");
    }
  });
});
