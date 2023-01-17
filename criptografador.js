function cript() {
  let texto = document.querySelector("#valueToCript");
  let textocriptografado = texto.value.toLowerCase()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  let criptDone = document.querySelector("#textCripted");
  
  hideCardContent();
  showResult();
  criptDone.innerHTML = textocriptografado;
}

function unCript() {
  let texto = document.querySelector("#valueToCript");
  let textoDescriptografado = texto.value.toLowerCase()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  let criptDone = document.querySelector("#textCripted");

  hideCardContent();
  showResult();
  criptDone.innerHTML = textoDescriptografado;
}

function hideCardContent() {
  let cardContent = document.querySelector("#cardCont");
  cardContent.style.display = "none";
}

function showResult() {
  let result = document.querySelector("#text-result");
  result.style.display = "flex";
  showCopy();
}

function showCopy(){
  let copyButton = document.querySelector("#buttonBox");
  copyButton.style.display = "flex";
}



function copyText(){
  let texResult = document.querySelector("#textCripted");
  navigator.clipboard.writeText(texResult.innerHTML);
  alert("Texto copiado!");
}

