import BiggerPicture from "bigger-picture";
import Macy from "macy";

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

// masonry grid
Macy({
  container: ".images",
  trueOrder: true,
  margin: 4,
  columns: 3,
  breakAt: {
    520: {
      columns: 2
    }
  }
});
