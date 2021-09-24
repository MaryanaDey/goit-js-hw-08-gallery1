const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];


  
const imageEl = document.querySelector('.js-gallery');
const openmodal = document.querySelector('.js-lightbox');
const backdropClose = document.querySelector('.lightbox__overlay');
const imageRef = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');

const imagesMarkUp = createImagesList(galleryItems);
imageEl.insertAdjacentHTML('beforeend', imagesMarkUp);

imageEl.addEventListener('click', onImageClick);
closeBtn.addEventListener('click',onCloseBtn);
//backdropClose.addEventListener('click',onBackdropClick);
//imageRef.addEventListener('click', onImageClickSrc);


//Добавляю класс на is-open
const isOpen = document.querySelector(".lightbox");
console.log(isOpen);
//const isOpenSwatch = isOpen.classList.add('is-open');



//Добавила на gallery фото
function createImagesList(galleryItems){
    //galleryItems.preventDefault();
    return galleryItems 
    .map(({preview,description })=>{
    return `
    <li class="gallery__item">
     <a
     class="gallery__link"
     href="${preview}"
     >
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${description}"
      alt="Tulips"
      />
      </a>
     </li>`;
     })
     .join('');
     };



//подмена src 
function imageRefA(galleryItems){
  //  galleryItems.preventDefault();
  //  return galleryItems
   // .map(({src})=>{
   //     return 
    //    `"${description}"
      //
      //  `
    //})
   
}


//открытие модалки 
function onImageClick(e){
   //console.log(e.target);
   e.preventDefault();
   const isOpenSwatch = isOpen.classList.add('is-open');
 if(!isOpenSwatch){
   return ;
}

};

//function onBackdropClick(e){

//};

function onCloseBtn(e){
console.log(e.target);
const swatchEl = e.target;
const parentCard = swatchEl.closest('.lightbox')
 console.log(parentCard);

 const currentCardActive = document.querySelector('.lightbox.is-open')
 console.log(currentCardActive);


 if(parentCard) {
    parentCard.classList.remove('.is-open');
 }
};



//function onEscPress(e){

//}