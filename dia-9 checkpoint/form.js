
const zapataFormElement = document.querySelector("#article-form")
const zapataImageInputElement = document.querySelector("#user-form-image")
const zapataTitleInputElement = document.querySelector("#user-article-title")
const zapataDescriptionInputElement = document.querySelector("#user-article-description")
const zapataDateInputElement = document.querySelector("#user-article-date")
const zapataAreaInputElement = document.querySelector("#user-form-area")

const zapataArticlesContainerElement = document.querySelector("#articles")

zapataFormElement.addEventListener("submit", (event) => {
  event.preventDefault()
  SaveInLocalStorage("article")
  location.reload()
})

document.addEventListener("DOMContentLoaded", (event) => { 
  event.preventDefault()
  renderArticles("article")
})

async function SaveInLocalStorage(key) {
  var imageUrl = await ConvertImageToURL(zapataImageInputElement.files[0])
  
  const data = 
    {
      "title": zapataTitleInputElement.value,
      "description": zapataDescriptionInputElement.value,
      "date": zapataDateInputElement.value,
      "area": zapataAreaInputElement.value,
      "imageurl": imageUrl
    }
  

  if (LocalStorageHasItem(key)) {
    currentData = JSON.parse(localStorage.getItem(key))
    currentData.push(data)

    localStorage.setItem(key, JSON.stringify(currentData))
    console.log(`Actualizado correctamente ${currentData}`)

  } else { 
    arr = [data]
    localStorage.setItem(key, JSON.stringify(arr))
    console.log(`Creado correctamente ${arr}`)

  }
}

function LocalStorageHasItem(item) { 
  response = localStorage.getItem(item)
  if (response) {
    return true
  } else {
    return false
   }
}

function ConvertImageToURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);   // aquí obtienes la URL base64
    reader.onerror = () => reject(reader.error);

    reader.readAsDataURL(file);
  });
}

function renderArticles(key) { 
  data = JSON.parse(localStorage.getItem(key))

  console.log(data)

  if (data) {
    const getElementTemplate = document.querySelector('#article-template');

    data.forEach((element) => { 
      const cloneElementTemplate = getElementTemplate.content.cloneNode(true);

      cloneElementTemplate.querySelector('.article-card-image').src = element.imageurl;
      cloneElementTemplate.querySelector('.article-card-image').alt = element.title;
      cloneElementTemplate.querySelector('.article-card-title').textContent = element.title;
      cloneElementTemplate.querySelector('.article-card-info').textContent = element.description;

      date = new Date(element.date).toISOString().split("T")[0]
      cloneElementTemplate.querySelector('.article-date').textContent = date;
      cloneElementTemplate.querySelector('.article-area').textContent = element.area;

      zapataArticlesContainerElement.appendChild(cloneElementTemplate)
    })


  }

  
}

function formatDate(date) { 
  
}
      
// <template id="article-template">
//     <article>
//       <img class="article-image" alt="">
//       <h3 class="article-title"></h3>
//       <p class="article-description"></p>
//       <footer>
//         <p class="article-date"></p>
//         <p class="article-area"></p>
//       </footer>
//     </article>
//   </template>


// script.js 

// const createForm = document.getElementById("add_form");
// createForm.addEventListener('click', function () {
//     const imageUrl = document.getElementById("image_url").value.trim();
//     const getInputValueTitle = document.getElementById('title').value.trim();
//     const getInputValueDescription = document.getElementById('description').value.trim();
//     const getInputValueDate = document.getElementById('date').value;
//     const getInputValueArea = document.getElementById('area').value.trim();

//     if (imageUrl && getInputValueTitle && getInputValueDescription && getInputValueDate && getInputValueArea) {

//         const getElementTemplate = document.getElementById('article-template');
//         const cloneElementTemplate = getElementTemplate.content.cloneNode(true);

//         cloneElementTemplate.querySelector('.article-image').src = imageUrl;
//         cloneElementTemplate.querySelector('.article-image').alt = getInputValueTitle;
//         cloneElementTemplate.querySelector('.article-title').textContent = getInputValueTitle;
//         cloneElementTemplate.querySelector('.article-description').textContent = getInputValueDescription;
//         cloneElementTemplate.querySelector('.article-date').textContent = getInputValueDate;
//         cloneElementTemplate.querySelector('.article-area').textContent = getInputValueArea;

//         document.getElementById('articles-container').appendChild(cloneElementTemplate);
//     }
//     else {
//         alert("Pleas fill all inputs");
//     }

// })


/*

HTML
<template id="article-template">
    <article>
      <img class="article-image" alt="">
      <h3 class="article-title"></h3>
      <p class="article-description"></p>
      <footer>
        <p class="article-date"></p>
        <p class="article-area"></p>
      </footer>
    </article>
  </template>


script.js 

const createForm = document.getElementById("add_form");
createForm.addEventListener('click', function () {
    const imageUrl = document.getElementById("image_url").value.trim();
    const getInputValueTitle = document.getElementById('title').value.trim();
    const getInputValueDescription = document.getElementById('description').value.trim();
    const getInputValueDate = document.getElementById('date').value;
    const getInputValueArea = document.getElementById('area').value.trim();

    if (imageUrl && getInputValueTitle && getInputValueDescription && getInputValueDate && getInputValueArea) {

        const getElementTemplate = document.getElementById('article-template');
        const cloneElementTemplate = getElementTemplate.content.cloneNode(true);

        cloneElementTemplate.querySelector('.article-image').src = imageUrl;
        cloneElementTemplate.querySelector('.article-image').alt = getInputValueTitle;
        cloneElementTemplate.querySelector('.article-title').textContent = getInputValueTitle;
        cloneElementTemplate.querySelector('.article-description').textContent = getInputValueDescription;
        cloneElementTemplate.querySelector('.article-date').textContent = getInputValueDate;
        cloneElementTemplate.querySelector('.article-area').textContent = getInputValueArea;

        document.getElementById('articles-container').appendChild(cloneElementTemplate);
    }
    else {
        alert("Pleas fill all inputs");
    }

})
*/