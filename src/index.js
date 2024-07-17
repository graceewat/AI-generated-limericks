function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: ["Poem to be written here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let formElement = document.querySelector("#form-generator");
formElement.addEventListener("submit", generatePoem);
