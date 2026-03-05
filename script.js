document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;
  const intervalTime = 5000; // 60 seconds
  let slideInterval = null;

  // =========================
  // CREATE DOTS
  // =========================
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      goToSlide(index);
      restartAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dots span");

  // =========================
  // SHOW SLIDE
  // =========================
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
  }

  // =========================
  // NEXT
  // =========================
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // =========================
  // PREVIOUS
  // =========================
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  // =========================
  // AUTO SLIDE CONTROL
  // =========================
  function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval); // prevent duplicates
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function restartAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // =========================
  // EVENTS
  // =========================
  nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    restartAutoSlide();
  });

  // =========================
  // INIT
  // =========================
  showSlide(currentIndex);
  startAutoSlide();

});
