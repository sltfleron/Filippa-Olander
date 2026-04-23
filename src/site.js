const setupMenu = () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-items");
  const body = document.body;

  if (!toggle || !menu) {
    return;
  }

  let backdrop = document.querySelector(".menu-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "menu-backdrop";
    backdrop.setAttribute("aria-hidden", "true");
    body.appendChild(backdrop);
  }

  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "site-menu");
  menu.id = "site-menu";

  const closeMenu = () => {
    menu.classList.remove("active");
    backdrop.classList.remove("active");
    body.classList.remove("menu-open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      closeMenu();
      return;
    }

    const isOpen = menu.classList.toggle("active");
    backdrop.classList.toggle("active", isOpen);
    body.classList.toggle("menu-open", isOpen);
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  backdrop.addEventListener("click", closeMenu);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      closeMenu();
    }
  });
};

const setupOverlay = () => {
  const btn = document.querySelector(".læsmere");
  const overlay = document.querySelector(".overlay");

  if (!btn || !overlay) {
    return;
  }

  btn.addEventListener("click", () => {
    const isOpen = overlay.classList.toggle("active");
    overlay.style.display = isOpen ? "block" : "none";
    btn.textContent = isOpen ? "Læs mindre" : "Læs mere";
    btn.setAttribute("aria-expanded", String(isOpen));
  });
};

const setupGallery = () => {
  const galleryRoot = document.querySelector(".gallery");
  const img = document.getElementById("gallery-img");
  const left = document.querySelector(".arrow.left");
  const right = document.querySelector(".arrow.right");

  if (!galleryRoot || !img || !left || !right) {
    return;
  }

  const imageSet = galleryRoot.dataset.images;
  if (!imageSet) {
    return;
  }

  const images = imageSet
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!images.length) {
    return;
  }

  let current = 0;

  right.addEventListener("click", () => {
    current = (current + 1) % images.length;
    img.src = images[current];
  });

  left.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    img.src = images[current];
  });
};

const setupTicketButton = () => {
  const ticketButton = document.querySelector(".købbillet[data-url]");

  if (!ticketButton) {
    return;
  }

  ticketButton.addEventListener("click", () => {
    window.location.href = ticketButton.dataset.url;
  });
};

setupMenu();
setupOverlay();
setupGallery();
setupTicketButton();
