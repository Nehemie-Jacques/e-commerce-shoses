var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".featured-image-1").forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image.getAttribute("src");
    document.querySelector(".big-image-1").setAttribute("src", imageSrc);
  });
});

document.querySelectorAll(".featured-image-2").forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image.getAttribute("src");
    document.querySelector(".big-image-2").setAttribute("src", imageSrc);
  });
});

document.querySelectorAll(".featured-image-3").forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image.getAttribute("src");
    document.querySelector(".big-image-3").setAttribute("src", imageSrc);
  });
});
