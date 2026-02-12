document.addEventListener("DOMContentLoaded", function () {

  /* ================= FAQ ACCORDION ================= */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".icon");

    // First open by default
    if (index === 0) {
      answer.style.display = "block";
      icon.textContent = "−";
    }

    question.addEventListener("click", () => {
      faqItems.forEach(i => {
        i.querySelector(".faq-answer").style.display = "none";
        i.querySelector(".icon").textContent = "+";
      });

      answer.style.display = "block";
      icon.textContent = "−";
    });
  });
  document.addEventListener("DOMContentLoaded", function () {

  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parent = this.closest(".dropdown");

      document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== parent) d.classList.remove("open");
      });

      parent.classList.toggle("open");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach(d =>
      d.classList.remove("open")
    );
  });

});



  /* ================= NAV DROPDOWN ================= */
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parent = this.closest(".dropdown");

      // close other dropdowns
      document.querySelectorAll(".dropdown").forEach(item => {
        if (item !== parent) item.classList.remove("open");
      });

      parent.classList.toggle("open");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

  // close dropdown on outside click
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown").forEach(item =>
      item.classList.remove("open")
    );
  });

});
