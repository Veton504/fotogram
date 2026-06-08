const IMAGES = [
  "ariel_hernandez-butterfly-10303163_640.jpg",
  "elisabetta_miele-landscape-10277364_640.jpg",
  "wolfgang_hasselmann-jellyfish-10028803_640.jpg",
  "pen_ash-forest-10285907_640.jpg",
  "ruslansikunov-daisy-9920493_640.jpg",
  "veronika_andrews-annas-hummingbird-9741042_640.jpg",
  "wyxina-rose-9965724_640.jpg",
  "wal_172619-butterfly-10297379_640.jpg",
  "mrganso-landscape-10300082_640.jpg",
  "wolfgang_hasselmann-eruption-9983510_640.jpg",
  "studio_lichtfang-swan-10131341_640.jpg",
  "7010naoto-cherryblossoms-9715202_640.jpg",
];

const MAIN = document.getElementById("main");
const DIALOG = document.getElementById("dialog");
const DIALOG_IMG = document.getElementById("dialog-img");
const DIALOG_CAPTION = document.getElementById("dialog-caption");
const DIALOG_COUNTER = document.getElementById("dialog-counter");
let currentIndex = 0;

function init() {
  MAIN.innerHTML = renderGallery();
}

function renderGallery() {
  let galleryHTML = '<section class="gallery">';

  for (let i = 0; i < IMAGES.length; i++) {
    galleryHTML += renderThumbnail(i);
  }

  galleryHTML += "</section>";
  return galleryHTML;
}

function renderThumbnail(index) {
  return `
    <div class="gallery-item" onclick="openDetail(${index})">
      <img src="images/${IMAGES[index]}" 
           alt="Foto ${index + 1}" />
    </div>
  `;
}

function openDetail(index) {
  currentIndex = index;
  DIALOG_IMG.src = `images/${IMAGES[currentIndex]}`;
  DIALOG_IMG.alt = `Foto ${currentIndex + 1}`;
  DIALOG_CAPTION.textContent = IMAGES[currentIndex];
  DIALOG_COUNTER.textContent = `${currentIndex + 1}/${IMAGES.length}`;
  console.log("openDetail aufgerufen", index);
  DIALOG.classList.remove("d-none");
}

function closeDetail() {
  DIALOG.classList.add("d-none");
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + IMAGES.length) % IMAGES.length;
  openDetail(currentIndex);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeDetail();
  }
});
