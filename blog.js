let currentSlide = 0;

  function changeSlide(n) {
    showSlide(currentSlide += n);
  }

  function showSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (n >= totalSlides) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = n;
    }

    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  }