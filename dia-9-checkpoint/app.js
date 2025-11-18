const categoryButtonsElements = document.querySelectorAll(".category-button");
const allArticles = document.querySelectorAll(".article-cards-container .article-card");
const articlesContainerElement = document.querySelector("#articles");


function filterArticles(selectedCategory) {
  const filterText = selectedCategory.toLowerCase();
  const localStorageArticleArea = JSON.parse(localStorage.getItem("article"));

  allArticles.forEach(article => {
    const articleAreaElement = article.querySelector('[itemprop="articleSection"]');
    const articleArea = articleAreaElement ? articleAreaElement.textContent.trim().toLowerCase() : '';

    let shouldBeVisible;

    if (filterText === 'all' || filterText === '') {
      shouldBeVisible = true;
    } else {
      shouldBeVisible = articleArea === filterText;
    }

    if (shouldBeVisible) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  });


}
categoryButtonsElements.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.textContent.trim();
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      filterArticles("all");
      return;
    }

    categoryButtonsElements.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    filterArticles(category);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  filterArticles("all");
});

const categoryDropdownBtn = document.querySelector(".category-dropdown-btn");
const categoryDropdownMenu = document.querySelector(".category-dropdown-menu");

if (categoryDropdownBtn && categoryDropdownMenu) {
  categoryDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded =
      categoryDropdownBtn.getAttribute("aria-expanded") === "true";
    categoryDropdownBtn.setAttribute("aria-expanded", !isExpanded);
    categoryDropdownMenu.classList.toggle("active");
  });

  const categoryButtons = categoryDropdownMenu.querySelectorAll("button");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryDropdownBtn.setAttribute("aria-expanded", "false");
      categoryDropdownMenu.classList.remove("active");
      const selectedCategory = button.textContent;
      categoryDropdownBtn.querySelector("span").textContent = selectedCategory;
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !categoryDropdownBtn.contains(e.target) &&
      !categoryDropdownMenu.contains(e.target)
    ) {
      categoryDropdownBtn.setAttribute("aria-expanded", "false");
      categoryDropdownMenu.classList.remove("active");
    }
  });
}

const myFormElement = document.getElementById('article-form')

const imageInputElement = document.getElementById('user-form-image');
const previewContainerElement = document.getElementById('previewContainer');
const previewImageElement = document.getElementById('previewImage');
const fileNameElement = document.getElementById('fileName');
const urlErrorMessageElement = document.getElementById("urlErrorMessage");
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
  inputUrlElement.value = "";
  urlErrorMessageElement.style.display = "none";
});

const inputUrlElement = document.getElementById("user-image-url");
const titleInputElement = document.querySelector("#user-article-title");
const descriptionInputElement = document.querySelector("#user-article-description");
const dateInputElement = document.getElementById("user-article-date");
const areaInputElement = document.querySelector("#user-form-area");
const urlContainerElement = document.getElementById("image-url-container");
const today = getTodaysDate()
dateInputElement.value = today;

document.addEventListener("DOMContentLoaded", toggleContainers);

function toggleContainers() {
  const fileRadioElement = document.getElementById("file");
  const fileContainerElement = document.getElementById("image-file-container");
  const previewContainerElement = document.getElementById("previewContainer");

  if (fileRadioElement.checked) {
    urlContainerElement.style.display = "none";
    urlErrorMessageElement.style.display = "none";
    fileContainerElement.style.display = "block";
    inputUrlElement.value = "";

    if (!imageInputElement.files[0]) {
      previewContainerElement.classList.remove("active");
      previewImageElement.src = "";
    }
  } else {
    fileContainerElement.style.display = "none";
    urlContainerElement.style.display = "block";
    imageInputElement.value = "";

    if (inputUrlElement.value) {
      previewImageElement.src = inputUrlElement.value;
      previewContainerElement.classList.add("active");
    } else {
      previewContainerElement.classList.remove("active");
      previewImageElement.src = "";
    }
  }
}

inputUrlElement.addEventListener("input", function () {
  const url = inputUrlElement.value.trim();
  urlErrorMessageElement.textContent = "";
  urlErrorMessageElement.style.display = "none";

  previewImageElement.onload = function () {
    // El Onload solo funciona si el navegador se carga
    if (inputUrlElement.value.trim()) {
      previewContainerElement.classList.add("active");
      fileNameElement.textContent = "Image URL";
    }
  };

  previewImageElement.onerror = function ()  {
    previewContainerElement.classList.remove("active");
    urlErrorMessageElement.textContent = "❌ Error: Invalid URL or broken Link";
    urlErrorMessageElement.style.display = "block";
    previewImageElement.onload = null;
    previewImageElement.onerror = null;
  };

  if (url) {
    previewImageElement.src = url;
    previewContainerElement.classList.remove("active");
    fileNameElement.textContent = "Loading...";
  } else {
    previewImageElement.src = "";
    fileNameElement.textContent = "";
    previewContainerElement.classList.remove("active");
  }
});

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
  userInputsElements.forEach(node => {
    node.classList.add('submitted')
  })
})

// SCRIPT PARA PODER CREAR NUEVOS ARTÍCULOS -------------------------------

myFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    SaveInLocalStorage("articles");
    location.reload();
  } catch (error) {
    alert('❌ Error - Article Not Subbmited');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderArticles("articles");
});

async function SaveInLocalStorage(key) {
  let imageUrl = null;
  const urlContainerElementDisplayValue = urlContainerElement.style.display;

  if (imageInputElement.files && imageInputElement.files[0] && urlContainerElementDisplayValue === "none" ) {
    imageUrl = await ConvertImageToURL(imageInputElement.files[0]);
  } else imageUrl = inputUrlElement.value.trim();

  const data = {
    title: titleInputElement.value,
    description: descriptionInputElement.value,
    date: dateInputElement.value,
    area: areaInputElement.value,
    imageurl: imageUrl,
  };

  if (LocalStorageHasItem(key)) {
    currentData = JSON.parse(localStorage.getItem(key)); // para obtener articles
    currentData.push(data); // Para pushear el elemento
    localStorage.setItem(key, JSON.stringify(currentData)); // Para sobreescribir el local storage
  } else {
    arr = [data]; // Crear Articles
    localStorage.setItem(key, JSON.stringify(arr)); // pa crearlo si primera vez
  }
}

function LocalStorageHasItem(item) {
  return localStorage.getItem(item) !== null;
}

function ConvertImageToURL(file) {

  if (!file) {
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result); // Cuando se termina de ejecutar
    reader.onerror = () => reject(reader.error);

    reader.readAsDataURL(file); // aquí se consigue la URL base64
  });
}

function renderArticles(key) {
  data = JSON.parse(localStorage.getItem(key));

  if (data) {
    const getElementTemplate = document.querySelector("#article-template");

    data.forEach((element) => {
      const cloneElementTemplate = getElementTemplate.content.cloneNode(true);

      const imgElement = cloneElementTemplate.querySelector(
        ".article-card-image"
      );

      if (element.imageurl) {
        imgElement.src = element.imageurl;
        imgElement.alt = element.title;
        cloneElementTemplate.querySelector(".article-card-image").alt =
          element.title;
      } else {
        imgElement.src = "./media/camera-slash.svg";
        imgElement.alt = "No image";
      }

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
