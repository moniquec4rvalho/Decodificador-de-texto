function cript() {
  let texto = document.querySelector("#valueToCript");
  let textocriptografado = texto.value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  let criptDone = document.querySelector("#textCripted");

  criptDone.innerHTML = textocriptografado;
}

function unCript() {
  let texto = document.querySelector("#valueToCript");
  let textoDescriptografado = texto.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  let criptDone = document.querySelector("#textCripted");

  criptDone.innerHTML = textoDescriptografado;
}

function myFunction() {
  var x = document.getElementById("#textCripted");
  if (x.style.display === "#copy") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
