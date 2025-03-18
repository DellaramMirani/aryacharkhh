function OpenMenu(){
    var mainMenuMobile=document.getElementById("mainMenuMobile");
    mainMenuMobile.classList.toggle("active");
    mainMenuMobile.classList.add("animate__animated");
    mainMenuMobile.classList.add("animate__fadeInRight");
    var xMark=document.getElementById("xMark");
    xMark.classList.toggle("active");
}
function closeMenu(){
    var mainMenuMobile=document.getElementById("mainMenuMobile");
    var xMark=document.getElementById("xMark");
    mainMenuMobile.classList.toggle("animate__fadeInLeft");
    mainMenuMobile.classList.toggle("active");
    xMark.classList.toggle("active");

}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiperFour", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });
  var swiper = new Swiper(".mySwiperFive", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    },
  });