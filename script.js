// =========== Home split text ================
const { animate, splitText, stagger } = anime;

const { chars: chars1 } = splitText(".home__profession-1", { chars: true });
const { chars: chars2 } = splitText(".home__profession-2", { chars: true });

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 2000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 2000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

// =========== swiper projects ===============

const swiperProjects = new Swiper(".projects__swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// =========== work tabs =====================
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector);

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    // Active the tab and corresponding content
    tab.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});

// ============== services accordion  ===================
const servicesButtons = document.querySelectorAll(".services__button");

servicesButtons.forEach((button) => {
  // add your height to services info
  const heightInfo = document.querySelector(".services__info");
  heightInfo.style.height = heightInfo.scrollHeight + "px";

  button.addEventListener("click", () => {
    const servicesCards = document.querySelectorAll(".services__card"),
      currentCard = button.parentNode,
      currentInfo = currentCard.querySelector(".services__info"),
      isCardOpen = currentCard.classList.contains("services-open");

    // close all other services info
    servicesCards.forEach((card) => {
      card.classList.replace("services-open", "services-close");

      const info = card.querySelector(".services__info");
      info.style.height = "0";
    });

    // open only if not already open
    if (!isCardOpen) {
      currentCard.classList.replace("services-close", "services-open");
      currentInfo.style.height = currentInfo.scrollHeight + "px";
    }
  });
});

// =============== Testimonials of duplicate cards ============

// =============== copy email in contact ===============

// =============== current year of the footer =========

// =============== scroll sections active link ================
