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

const articlesContainerElement = document.querySelector("#articles");
const titleInputElement = document.querySelector("#user-article-title");
const descriptionInputElement = document.querySelector("#user-article-description");
const dateInputElement = document.getElementById("user-article-date");
const areaInputElement = document.querySelector("#user-form-area");
const today = getTodaysDate()
dateInputElement.value = today;

function getTodaysDate() {
  // Los meses los cuenta como arrays, y el padstart es para la cantidad de dígitos
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}


const submitButtonElement = document.querySelector('.btn-submit') /* NO USAR GET CON LA CLASS NAME VIDA TREINTAHIJUEPUTAMENTE MALPARIDA */
const userInputsElements = myFormElement.querySelectorAll('input, select, textarea')

submitButtonElement.addEventListener('click', function () {
  console.log("tin")
  userInputsElements.forEach(node => {
    node.classList.add('submitted')
  })
})

// SCRIPT PARA PODER CREAR NUEVOS ARTÍCULOS -------------------------------

myFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  SaveInLocalStorage("articles");
  location.reload();
});

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  renderArticles("articles");
});

async function SaveInLocalStorage(key) {
  var imageUrl = await ConvertImageToURL(imageInputElement.files[0]);

  const data = {
    title: titleInputElement.value,
    description: descriptionInputElement.value,
    date: dateInputElement.value,
    area: areaInputElement.value,
    imageurl: imageUrl,
  };

  if (LocalStorageHasItem(key)) {
    currentData = JSON.parse(localStorage.getItem(key));
    currentData.push(data);

    localStorage.setItem(key, JSON.stringify(currentData));
    console.log(`Actualizado correctamente ${currentData}`);
  } else {
    arr = [data];
    localStorage.setItem(key, JSON.stringify(arr));
    console.log(`Creado correctamente ${arr}`);
  }
}

function LocalStorageHasItem(item) {
  response = localStorage.getItem(item);
  if (response) {
    return true;
  } else {
    return false;
  }
}

function ConvertImageToURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result); // aquí se consigue la URL base64
    reader.onerror = () => reject(reader.error);

    reader.readAsDataURL(file);
  });
}

function renderArticles(key) {
  data = JSON.parse(localStorage.getItem(key));

  console.log(data);

  if (data) {
    const getElementTemplate = document.querySelector("#article-template");

    data.forEach((element) => {
      const cloneElementTemplate = getElementTemplate.content.cloneNode(true);

      cloneElementTemplate.querySelector(".article-card-image").src =
        element.imageurl;
      cloneElementTemplate.querySelector(".article-card-image").alt =
        element.title;
      cloneElementTemplate.querySelector(".article-card-title").textContent =
        element.title;
      cloneElementTemplate.querySelector(".article-card-info").textContent =
        element.description;
      cloneElementTemplate.querySelector(".article-date").textContent =
        formatDate(element.date);
      cloneElementTemplate.querySelector(".article-area").textContent =
        element.area;

      articlesContainerElement.appendChild(cloneElementTemplate);
    });
  }
}

function formatDate(parameter) {
  const dateToFormat = new Date(parameter);

  const formatted = dateToFormat.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatted;
}
