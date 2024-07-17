function displayPoem(response) {
  console.log("poem generated");
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
    "You are an expert in writing limericks and love to write funny ones based around peoples names. Your mission is to generate a 5 line limerick in basic HTML. The limerick should follow a traditional rhyming format.Do not include a title to the limerick or any speechmarks.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating limerick");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);
  axios.get(apiUrl).then(displayPoem);
}
let formElement = document.querySelector("#form-generator");
formElement.addEventListener("submit", generatePoem);
