document.addEventListener("DOMContentLoaded", function () {

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

});
