// Personal Profile Website JavaScript

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  const icon = mobileMenuBtn.querySelector("i");
  if (mobileMenu.classList.contains("hidden")) {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
});

// Close mobile menu when clicking a link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Project Modal Functions
function openProjectModal(category, projects) {
  document.getElementById("project-modal-title").textContent = category;

  const listContainer = document.getElementById("project-modal-list");
  listContainer.innerHTML = "";

  projects.forEach((project) => {
    const item = document.createElement("div");
    item.className =
      "flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors";
    item.innerHTML = `
      <div class="flex-1 text-left">
        <h4 class="font-semibold text-dark text-sm">${project.name}</h4>
        <p class="text-xs text-slate-500 mt-1">${project.desc}</p>
      </div>
      <a href="${project.link}" target="_blank" class="ml-4 inline-flex items-center px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-medium hover:bg-blue-800 transition-colors shrink-0">
        <i class="fa-brands fa-github mr-1.5"></i> GitHub
      </a>
    `;
    listContainer.appendChild(item);
  });

  const modal = document.getElementById("project-modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close project modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// Certificate Modal Functions
function openModal(title, description, year) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-desc").textContent = description;
  document.getElementById("modal-year").textContent = year;

  const modal = document.getElementById("cert-modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("cert-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Scroll Reveal Animation using Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  observer.observe(el);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// Navbar background on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("shadow-lg");
    navbar.classList.remove("shadow-md");
  } else {
    navbar.classList.add("shadow-md");
    navbar.classList.remove("shadow-lg");
  }
});

// Initialize active link on page load
setActiveLink();
