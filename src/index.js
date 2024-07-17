function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let limerickInput = document.querySelector("#user-name");
  let apiKey = "f03c7t04000f0dbod331aeefa47ad1f6";
  let prompt = `Please generate a funny limerick using ${limerickInput.value} as the name of the subject`;
  let context =
    "You are an expert in writing limericks and love to write funny ones based around peoples names. Your mission is to generate a 5 line limerick in basic HTML with a <br /> after each line. The limerick should follow a traditional rhyming pattern. There should not be any speech marks or titles.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector(".poem");

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a limerick for ${limerickInput.value}...`;
  axios.get(apiUrl).then(displayPoem);
}
let formElement = document.querySelector("#form-generator");
formElement.addEventListener("submit", generatePoem);
