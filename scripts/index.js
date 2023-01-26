let encryptButton = document.getElementById("encryptBtn");
let decryptButton = document.getElementById("decryptBtn");
let copyButton = document.getElementById("copyBtn");
let messageBox = document.getElementById("msgBox");
let encryptText = document.getElementById("encryptText");

function onlyLetters(text) {
  var letters = /^[a-zA-Z\s]+$/;
  if (text.match(letters)) {
    return true;
  } else {
    return false;
  }
}

function encryptTextFn(text) {
  let arrText = text.split("");
  let result = "";
  arrText.forEach((element) => {
    if (element == "e") {
      result += "enter";
    } else if (element == "i") {
      result += "imes";
    } else if (element == "a") {
      result += "ai";
    } else if (element == "o") {
      result += "ober";
    } else if (element == "u") {
      result += "ufat";
    } else {
      result += element;
    }
  });
  return result;
}

function decryptTextFunction(text) {
  let result = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return result;
}

encryptButton.addEventListener("click", function (event) {
  event.preventDefault();
  copyButton.textContent = "Copiar";
  if (!encryptText.value) {
    messageBox.innerText = "Ningun Mensaje Fue Encontrado";
    return;
  }
  if (!onlyLetters(encryptText.value)) {
    messageBox.innerText = "Solo puedes usar letras minusculas [a-z]";
    return;
  }
  let encryptedMesagge = encryptTextFn(encryptText.value.toLowerCase());
  messageBox.innerText = encryptedMesagge;
  encryptText.value = "";
});

decryptButton.addEventListener("click", function (event) {
  event.preventDefault();
  copyButton.textContent = "Copiar";
  if (!encryptText.value) {
    messageBox.innerText = "Ningun Mensaje Fue Encontrado";
    return;
  }
  if (!onlyLetters(encryptText.value)) {
    messageBox.innerText = "Solo puedes usar letras minusculas [a-z]";
    return;
  }
  let decryptedMesagge = decryptTextFunction(encryptText.value);
  messageBox.innerText = decryptedMesagge;
  encryptText.value = "";
});

copyButton.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(messageBox.innerText);
  // alert(`se copio al portapales el mensaje: ${messageBox.innerText}`);
  copyButton.textContent = "Copiado";
});
