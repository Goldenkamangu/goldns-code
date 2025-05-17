document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });
});


  let idx = 0;
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  function showSlide(i) {
    slides.forEach((slide, j) => {
      slide.classList.toggle('active', j === i);
    });
  }

  function nextSlide() {
    idx = (idx + 1) % slides.length;
    showSlide(idx);
  }

  function prevSlide() {
    idx = (idx - 1 + slides.length) % slides.length;
    showSlide(idx);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  setInterval(nextSlide, 5000);
;


document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-in");

  function checkSlide() {
    slideElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // When element is 90% within the viewport, add "visible" class
      if (rect.top < window.innerHeight * 0.9) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
  checkSlide(); // Check on page load in case some elements are already in view
});









