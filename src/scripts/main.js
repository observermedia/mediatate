// Assign version numbers to images

let images = Array.from(document.querySelectorAll('.image'));
let d = new Date();

images.forEach((image, index) => {
  image.src = `${image.src}?ver=${d.getTime()}${index}`;
});


// "Liking" images in the slideshow

let slides = document.getElementById('image-slideshow');
let likeButton = document.getElementById('unliked');
let redButton = document.getElementById('liked');
let isLiked = false;

let showLikeButton = () => {
  likeButton.classList.remove('hide');
};

let hideBothButtons = () => {
  likeButton.classList.add('hide');
  redButton.classList.add('hide');
};

let toggleRedButton = () => {
  likeButton.classList.add('hide');
  redButton.classList.remove('hide');
};

redButton.addEventListener('click', () => {
 likeButton.classList.add('hide');
});

slides.addEventListener('mouseenter', showLikeButton);
slides.addEventListener('mouseleave', hideBothButtons);
likeButton.addEventListener('click', toggleRedButton);



// on a hover, show the plain button
// when not hovering, hide the plain button
// if they click the button, the plain one needs to disappear and the red one needs to appear

