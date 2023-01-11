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
