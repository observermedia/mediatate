 // image version number assignments

console.log('hi from main.js');

let images = Array.from(document.querySelectorAll('.image'));
let d = new Date();

images.forEach((image, index) => {
  image.src = `${image.src}?ver=${d.getTime()}${index}`;
});

// 
