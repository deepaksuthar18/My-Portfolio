// Typed.js initialization
var typed = new Typed(".text", {
  strings: ["AI/ML Engineer.", "Frontend - Developer."],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 100,
  loop: true,
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const body = document.body;

  // Toggle menu
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  // Close menu when clicking on links
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navbar.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });

  // Animate skill bars
  function animateSkillBars() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
      if(isElementInViewport(bar)) {
        let percent = bar.getAttribute("data-percent") || bar.getAttribute("data-percent");
        let span = bar.querySelector(".progress-line span");
        span.style.width = percent + "%";
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  window.addEventListener('scroll', animateSkillBars);
  animateSkillBars(); // Run once on page load
});

// Certificate modal functionality
const allCertificates = [
  "image/15.png",
  "image/158.png",
  "image/Deepak_Feb_2024_participation_49378.jpg",
  "image/Deepak_Feb_2024_project_completion_49378.jpg",
  "image/AI tools certificate_page-0001.jpg",
  "image/certificateS-22_page-0001.jpg",
  "images/cert7.jpg"
];

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
  document.body.classList.remove('modal-open');
}

function showAllCertificates() {
  const container = document.getElementById("certificatesContainer");
  container.innerHTML = "";

  allCertificates.forEach((src) => {
    const card = document.createElement("div");
    card.classList.add("certificate-card");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Certificate";

    img.onclick = () => openModal(src);

    card.appendChild(img);
    container.appendChild(card);
  });

  document.querySelector(".view-all-btn").style.display = "none";
}






// Smooth scrolling with delay for all navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    if (menuToggle && navbar) {
      menuToggle.classList.remove('active');
      navbar.classList.remove('active');
      document.body.classList.remove('menu-open');
    }

    // Get target section
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#' && targetId !== '') {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Calculate target position with header offset
        const headerHeight = document.querySelector('.headrer').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20; // 20px extra spacing
        
        // Add delay before scrolling
        setTimeout(() => {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }, 300); // 300ms delay (adjust as needed)
      }
    }
  });
});


