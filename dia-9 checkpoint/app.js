const buttons = document.querySelectorAll(".category-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("active")) {
      this.classList.remove("active"); //con this invocamos al elemento que triggereo el evento
      return;
    }
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

const myFormElement = document.getElementById('article-form')
const imageInputElement = document.getElementById('user-form-image');
const previewContainerElement = document.getElementById('previewContainer');
const previewImageElement = document.getElementById('previewImage');
const fileNameElement = document.getElementById('fileName');
const removeBtnElement = document.getElementById('removeBtn');

imageInputElement.addEventListener('change', function (e) {
  const file = e.target.files[0];

  if (file) {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImageElement.src = e.target.result;
        fileNameElement.textContent = file.name;
        previewContainerElement.classList.add("active");
      };

      reader.readAsDataURL(file);
    } else {
      alert("Por favor, selecciona un archivo de imagen válido.");
      imageInputElement.value = "";
    }
  }
});

removeBtnElement.addEventListener("click", function () {
  imageInputElement.value = "";
  previewImageElement.src = "";
  fileNameElement.textContent = "";
  previewContainerElement.classList.remove("active");
});

const dateInputElement = document.getElementById("user-article-date");
const today = new Date().toISOString().split("T")[0];
dateInputElement.value = today;


const submitButtonElement = document.querySelector('.btn-submit') /* NO USAR GET CON LA CLASS NAME VIDA TREINTAHIJUEPUTAMENTE MALPARIDA */
const userInputsElements = myFormElement.querySelectorAll('input, select, textarea')

submitButtonElement.addEventListener('click', function () {
  console.log("tin")
  userInputsElements.forEach(node => {
    node.classList.add('submitted')
  })
})