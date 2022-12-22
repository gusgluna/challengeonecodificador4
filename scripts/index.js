console.log("hola mundo");

let encryptButton = document.getElementById("encryptBtn");

let encryptText = document.getElementById("encryptText");

encryptButton.addEventListener("click", function (event) {
  event.preventDefault();
  let textValue = encryptText.value;
  console.log(textValue);
  encryptText.value = "";
});
