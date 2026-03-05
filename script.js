document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;
  const intervalTime = 5000; // 🔥 60 seconds
  let slideInterval;

  // =========================
  // CREATE DOTS
  // =========================
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetInterval();
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
  // NEXT SLIDE
  // =========================
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // =========================
  // PREVIOUS SLIDE
  // =========================
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // =========================
  // GO TO SPECIFIC SLIDE
  // =========================
  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  // =========================
  // AUTO PLAY
  // =========================
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // =========================
  // EVENT LISTENERS
  // =========================
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  // =========================
  // INIT
  // =========================
  showSlide(currentIndex);
  startAutoSlide();

});
