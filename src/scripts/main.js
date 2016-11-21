window.onload = () => {
  experiment();
  imageVersions();
  slideshowLikes();
};

const imageVersions = () => {
  let images = Array.from(document.querySelectorAll('.image'));
  let d = new Date();
  images.forEach((image, index) => {
    image.src = `${image.src}?ver=${d.getTime()}${index}`;
  })
};

const slideshowLikes = () => {
  let slides = document.getElementById('image-slideshow');
  let likeButton = document.getElementById('unliked');
  let redButton = document.getElementById('liked');

  const showLikeButton = () => likeButton.classList.remove('hide');

  const hideBothButtons = () => {
    likeButton.classList.add('hide');
    redButton.classList.add('hide');
  };

  const toggleRedButton = () => {
    likeButton.classList.add('hide');
    redButton.classList.remove('hide');
  };

  redButton.addEventListener('click', () => likeButton.classList.add('hide'));
  likeButton.addEventListener('click', toggleRedButton);
  slides.addEventListener('mouseenter', showLikeButton);
  slides.addEventListener('mouseleave', hideBothButtons);
};


const experiment = () => {
  let groups = ['control', 'variation'];
  let userGroup = groups[Math.floor(Math.random() * groups.length)];
  let button = document.getElementById('submit-btn');

  // Let's say we typically make our buttons green, and we want to do some A/B testing to see if a different color encourages more clicks (and more email signups). The control group will get green as usual, and the variation group will get a red button.
  if (userGroup === 'variation') {
    button.style.background = '#BF0012';
  } else {
    button.style.background = '#50A13E';
  };
};



// Form validation (without actually posting anywhere, allows the page to be static and operate without a db of users.) I strayed away from jQuery for the rest of the assignment, but found it was much easier to use here, alongside the Bootstrap validation plugin.

let $message = $('.form-message');
let emailList = [];

const submitForm = () => {
  let newEmail = $('#email').val();
  if ($.inArray(newEmail, emailList) !== -1) {
    $message.html('<p class="error">That email is already in our system!</p>');
  } else {
    emailList.push(newEmail);
    $message.html('<p class="thank-you">Thanks for signing up!</p>');
  };

  $('#email-form').each(function() {
    this.reset();
  });
};






