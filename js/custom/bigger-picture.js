import BiggerPicture from "bigger-picture";

// initialize BiggerPicture
const bp = BiggerPicture({
  target: document.body
});

// grab image links

const imageLinks = document.querySelectorAll(".images > a");

// add click listener to open BiggerPicture
for (let link of imageLinks) {
  link.addEventListener("click", openGallery);
}

// open BiggerPicture
function openGallery(e) {
  e.preventDefault();
  bp.open({
    items: imageLinks,
    el: e.currentTarget
  });
}