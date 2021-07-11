// navbar
var menu = document.querySelector('.menu');
var navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menu.classList.toggle('change');
});
// end of navbar

// Video
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () => {
  if(video.paused) {
  video.play();
  btn.className = 'far fa-pause-circle';
  video.style.opacity = '.7';
  } else {
    video.pause();
    btn.className = 'far fa-play-circle';
    video.style.opacity = '.3';
  };
  
};

btn.addEventListener('click', () => {
  playPause();
});

video.addEventListener('timeupdate', () => {
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  if(video.ended) {
    btn.className ='far fa-play-circle';
    video.style.opacity ='.3';
  };
});
// End of Video

// section-3 pricing cards
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
// end of section 3 pricing cards