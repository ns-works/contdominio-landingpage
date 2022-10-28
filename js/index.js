// Initial scroll position
var scrollState = 0;

// Store navbar classes
var navClasses = document.getElementById('menu').classList;

// returns current scroll position
var scrollTop = function() {
  return window.scrollY;
};

// Primary scroll event function
var scrollDetect = function(home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

function homeAction() {
  console.log("home");
}

function downAction() {
  navClasses.remove('open');
  navClasses.add('collapse');
}

function upAction() {
  navClasses.remove('collapse');
  navClasses.add('open');
}

window.addEventListener("scroll", function() {
  scrollDetect(homeAction, downAction, upAction);
});

/* Anchor smooth scroll */
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });