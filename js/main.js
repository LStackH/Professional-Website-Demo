// FAQ Accordion and Category Filtering
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");
  const faqMenu = document.querySelector(".faq-menu");
  const faqGroups = document.querySelectorAll(".faq-group");
  const faqMenuItems = document.querySelectorAll(".faq-menu li");

  // Handle FAQ Accordion
  faqContainer.addEventListener("click", (e) => {
      const groupHeader = e.target.closest(".faq-group-header");

      if (!groupHeader) return;

      const group = groupHeader.parentElement;
      const groupBody = group.querySelector(".faq-group-body");
      const icon = groupHeader.querySelector("i");

      // Toggle plus/minus icon
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-minus");

      // Toggle visibility of body
      groupBody.classList.toggle("open");

      const otherGroups = faqContainer.querySelectorAll(".faq-group");

      otherGroups.forEach((otherGroup) => {
          if (otherGroup !== group) {
              const otherGroupBody = otherGroup.querySelector(".faq-group-body");
              const otherIcon = otherGroup.querySelector(".faq-group-header i");

              otherGroupBody.classList.remove("open");
              otherIcon.classList.remove("fa-minus");
              otherIcon.classList.add("fa-plus");
          }
      });
  });

  // Handle FAQ Menu Filtering
  faqMenu.addEventListener("click", (e) => {
      const clickedItem = e.target.closest("li");

      if (!clickedItem) return;

      faqMenuItems.forEach((item) => item.classList.remove("active"));

      clickedItem.classList.add("active");

      const selectedCategory = clickedItem.textContent.trim();

      faqGroups.forEach((group) => {
          const groupCategory = group.getAttribute("data-category");

          if (selectedCategory === "All" || groupCategory === selectedCategory) {
              group.style.display = "block";
          } else {
              group.style.display = "none";
          }
      });

      faqGroups.forEach((group) => {
          const groupBody = group.querySelector(".faq-group-body");
          const icon = group.querySelector(".faq-group-header i");

          groupBody.classList.remove("open");
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
      });
  });
});


// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
