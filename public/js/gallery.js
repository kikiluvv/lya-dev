//----------------------------------------------------------------------------------------------------//



// Here you can add new sheets to the array, 
// Put the images into the sheets folder and
// call the path of the image here.
var imageArray = [
    "/public/assets/gallery/bw/sheets/1.png",
    "/public/assets/gallery/bw/sheets/2.png",
    "/public/assets/gallery/bw/sheets/3.png",
    "/public/assets/gallery/bw/sheets/4.png",
    "/public/assets/gallery/bw/sheets/5.png",
    "/public/assets/gallery/bw/sheets/6.png",
    "/public/assets/gallery/bw/sheets/7.png",
    "/public/assets/gallery/bw/sheets/8.png",
    "/public/assets/gallery/bw/sheets/9.png",
    "/public/assets/gallery/bw/sheets/10.png",
    "/public/assets/gallery/bw/sheets/11.png",
    "/public/assets/gallery/bw/sheets/12.png",
    "/public/assets/gallery/bw/sheets/13.png",
    "/public/assets/gallery/bw/sheets/14.png",
    "/public/assets/gallery/bw/sheets/15.png",
    "/public/assets/gallery/bw/sheets/16.png",
    "/public/assets/gallery/bw/sheets/17.png",
    "/public/assets/gallery/bw/sheets/18.png",
    "/public/assets/gallery/bw/sheets/19.png",
    "/public/assets/gallery/bw/sheets/20.png",
    "/public/assets/gallery/bw/sheets/21.png",
    "/public/assets/gallery/bw/sheets/22.png",
    "/public/assets/gallery/bw/sheets/23.png",
    "/public/assets/gallery/bw/sheets/24.png",
    "/public/assets/gallery/bw/sheets/25.png",
    "/public/assets/gallery/bw/sheets/26.png",
    "/public/assets/gallery/bw/sheets/27.png",
    "/public/assets/gallery/bw/sheets/28.png",
    "/public/assets/gallery/bw/sheets/29.png",
    "/public/assets/gallery/bw/sheets/30.png",
    "/public/assets/gallery/bw/sheets/31.png",
    "/public/assets/gallery/bw/sheets/32.png",
    "/public/assets/gallery/bw/sheets/33.png",
    "/public/assets/gallery/bw/sheets/34.png",
    "/public/assets/gallery/bw/sheets/35.png",
    "/public/assets/gallery/bw/sheets/36.png",
    "/public/assets/gallery/bw/sheets/37.png",
    "/public/assets/gallery/bw/sheets/38.png",
    "/public/assets/gallery/bw/sheets/39.png",
    "/public/assets/gallery/bw/sheets/40.png",
    "/public/assets/gallery/bw/sheets/41.png",
    "/public/assets/gallery/bw/sheets/42.png"
];

var linkUrl = "https://form.jotform.com/232376224013042"; // Jotform URL




//----------------------------------------------------------------------------------------------------//



// Assuming you have fetched data from Netlify CMS and stored it in 'imageData'
// 'imageData' should be an array of objects, where each object represents an image with 'title' and 'imageUrl' properties.

var imageGallery = document.getElementById("imageGallery");
var imageGalleryColor = document.getElementById("imageGalleryColor");

// Fetch data from the 'b&w' collection
fetch('/admin/api/collections/b&w')
    .then((response) => response.json())
    .then((data) => {
        data.entries.forEach(function (imageInfo) {
            var imageContainer = document.createElement("div");
            imageContainer.className = "image-container";

            var anchor = document.createElement("a");
            anchor.href = imageInfo.linkUrl; // Assuming you have a 'linkUrl' property in your CMS data
            anchor.target = "_blank";

            var img = document.createElement("img");
            img.src = imageInfo.imageUrl; // 'imageUrl' property from your CMS data
            img.className = 'image';

            anchor.appendChild(img);
            imageContainer.appendChild(anchor);
            imageGallery.appendChild(imageContainer);
        });
    });

// Fetch data from the 'color' collection
fetch('/admin/api/collections/color')
    .then((response) => response.json())
    .then((data) => {
        data.entries.forEach(function (imageInfo) {
            var imageContainer = document.createElement("div");
            imageContainer.className = "image-container-color";

            var anchor = document.createElement("a");
            anchor.href = imageInfo.linkUrl; // Assuming you have a 'linkUrl' property in your CMS data
            anchor.target = "_blank";

            var img = document.createElement("img");
            img.src = imageInfo.imageUrl; // 'imageUrl' property from your CMS data
            img.className = 'image-color';

            anchor.appendChild(img);
            imageContainer.appendChild(anchor);
            imageGalleryColor.appendChild(imageContainer);
        });
    });


function toggleScrollButton() {
    var button = document.getElementById('up-container');
    if (window.scrollY > 200) {
        button.classList.add('arrow-show');
    } else {
        button.classList.remove('arrow-show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', toggleScrollButton);
document.getElementById('up-container').addEventListener('click', scrollToTop);


toggleScrollButton();

