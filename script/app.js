//Card modal

const cardBtn = document.getElementsByClassName("card-button");
const cardModal = document.getElementById("card-modal-wrapper");

const contactPerson = [
  {
    name: "Penguin",
    role: "Zookeeper",
    number: "0701234567",
    email: "pingu.penguin@vpa.com",
  },
  {
    name: "Dog",
    role: "Logistics manager",
    number: "0701234567",
    email: "douglas.dog@vpa.com",
  },
  {
    name: "Frog",
    role: "Educator",
    number: "0701234567",
    email: "freddy.frog@vpa.com",
  },
];

const cards = document.getElementsByClassName("card");
const cardContent = document.getElementById("card-modal-content");

const closeCardModal = () => {
  document.getElementById("close-card").addEventListener("click", () => {
    cardModal.style.display = "none";
  });
};

const openCardModal = () => {
  for (let i = 0; i < cardBtn.length; i++) {
    cardBtn[i].addEventListener("click", () => {
      cardModal.style.display = "flex";
      for (let j = 0; j < contactPerson.length; j++) {
        if (i === j) {
          cardContent.innerHTML = `<h2>Contact info</h2><p><strong>My name:</strong> ${contactPerson[i].name}<br><strong>My role:</strong> ${contactPerson[i].role}<br><strong>My number:</strong> ${contactPerson[i].number}
          <br><strong>My email:</strong> ${contactPerson[i].email}</p><h3>About me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
        }
      }
    });
  }
};

//Gallery modal
const startImage = document.getElementById("start-image");

const galleryModal = document.getElementById("gallery-modal-wrapper");

const galleryImage = document.getElementsByClassName("image");

const galleryContent = document.getElementById("gallery-modal-content");

const closeGalleryModal = () => {
  document.getElementById("close-gallery").addEventListener("click", () => {
    galleryModal.style.display = "none";
  });
};

const imageSrc = [
  {
    name: "./media/img/gallery-elephant.jpg",
  },
  {
    name: "./media/img/gallery-monkeys.jpg",
  },
  {
    name: "./media/img/gallery-panda.jpg",
  },
  {
    name: "./media/img/gallery-seal.jpg",
  },
  {
    name: "./media/img/gallery-bird.jpg",
  },
  {
    name: "./media/img/gallery-alpacka.jpg",
  },
  {
    name: "./media/img/gallery-lizard.jpg",
  },
];

const openGalleryModal = () => {
  for (let i = 0; i < galleryImage.length; i++) {
    galleryImage[i].addEventListener("click", () => {
      galleryModal.style.display = "flex";
      for (let j = 0; j < imageSrc.length; j++) {
        if (i === j) {
          startImage.setAttribute("src", imageSrc[i].name);
        }
      }
    });
  }
};

const thumbnails = document.getElementById("thumbnails-wrapper");

window.addEventListener("load", () => {
 /* thumbnails.innerHTML = imageSrc.map((img) => {
    `<img src="${img.name}">`;
  }); */

  openCardModal();
  closeCardModal();
  openGalleryModal();
  closeGalleryModal();
});
