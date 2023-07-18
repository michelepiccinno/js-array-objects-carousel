'use strict'
const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


//CICLO L'ARRAY DI OGGETTI
for (let i = 0; i < images.length; i++) {
  let singleElement = images[i];
  console.log(`${singleElement.image}`);
  console.log(`${singleElement.title}`);
  console.log(`${singleElement.text}`);

  //RICHIAMO CONTAINERS-PADRE[i]
  let bigImgContainer = document.querySelectorAll(".carousel-item")[i];
  let bigTxtContainer = document.querySelectorAll(".box-text-main")[i];


  //INVOCO LE FUNZIONI DI CREAZIONE DEGLI ELEMENTI DEL DOM
  createBigImgElements(images[i].image, bigImgContainer);
  createTitleElements(images[i].title, bigTxtContainer);


/*-----DA TERMINARE CREAZIONIE FUNCTION-----------*/

  //RICHIAMO CONTAINER-PADRE[i]
  let bigDescrContainer = document.querySelectorAll(".box-text-main")[i];
  //CREO ELEMENTO HTML H3, ASSEGNO LA CLASSE, INSERISCO CONTENUTO E APPENDO AL CONTAINER
  let myNewDescr = document.createElement("h6");
  myNewDescr.classList.add("descr-img");
  myNewDescr.innerHTML = singleElement.text;
  bigDescrContainer.appendChild(myNewDescr);

  //RICHIAMO CONTAINER-PADRE[i] (del del menu img laterale)
  let littleImgContainer = document.querySelectorAll(".mini-box-card")[i];
  //CREO ELEMENTO HTML IMG, INSERISCO CONTENUTO E APPENDO AL CONTAINER
  let myNewLittleImg = document.createElement("img");
  myNewLittleImg.classList.add("little-img");
  myNewLittleImg.src = singleElement.image;
  myNewLittleImg.dataset.bsSlideTo = i;
  littleImgContainer.appendChild(myNewLittleImg);
}


/**Riceve un in input un un oggetto rispondente al ciclo [i]
 * di un array e crea l'elemento HTML con classe .img-big
 * 
 * @param {object} singleArrayElement  
 */

  //CREO ELEMENTO HTML IMG, ASSEGNO LA CLASSE, INSERISCO CONTENUTO E APPENDO AL CONTAINER
  function createBigImgElements(singleArrayElement, imgContainer) {
  let myNewImg = document.createElement("img");
  myNewImg.classList.add("big-img");
  myNewImg.src = singleArrayElement;
  imgContainer.appendChild(myNewImg);
}


/**Riceve un in input un un oggetto rispondente al ciclo [i]
 * di un array e crea l'elemento HTML con classe .title-big
 * 
 * @param {object} singleArrayElement  
 */
  //CREO ELEMENTO HTML H3, ASSEGNO LA CLASSE, INSERISCO CONTENUTO E APPENDO AL CONTAINER
  function createTitleElements(singleArrayElement, titleContainer) {
  let myNewTitle = document.createElement("h3");
  myNewTitle.classList.add("title-img");
  myNewTitle.innerHTML = singleArrayElement;
  titleContainer.appendChild(myNewTitle);
  }