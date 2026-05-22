import './styles/main.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ===== Mobile menu toggle =====
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', function () {
  const isActive = navbarMenu.classList.toggle('active');
  navbarToggle.setAttribute('aria-expanded', isActive);
});

document.querySelectorAll('.navbar-links a, .navbar-cta').forEach(function (link) {
  link.addEventListener('click', function () {
    navbarMenu.classList.remove('active');
    navbarToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Contact form - send to WhatsApp =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.elements['name'].value.trim();
  const company = this.elements['company'].value.trim();
  const service = this.elements['service'].value.trim();
  const message = this.elements['message'].value.trim();

  let waMessage = 'Halo 360 Agency by JDN,\nSaya ingin konsultasi kebutuhan creative agency.\n\n';
  waMessage += 'Nama: ' + name + '\n';
  waMessage += 'Perusahaan/Instansi: ' + company + '\n';
  waMessage += 'Layanan yang dibutuhkan: ' + service + '\n';
  waMessage += 'Pesan: ' + message;

  const waUrl = 'https://wa.me/6281401661120?text=' + encodeURIComponent(waMessage);
  window.open(waUrl, '_blank');
});

// ===== Navbar scroll effect =====
const navbar = document.querySelector('.navbar');

ScrollTrigger.create({
  start: 'top -80',
  onUpdate: (self) => {
    if (self.direction === 1 && window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else if (window.scrollY <= 80) {
      navbar.classList.remove('scrolled');
    }
  },
});

// ===== Hero Parallax =====
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  gsap.to(heroBg, {
    yPercent: 25,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// ===== Hero Text Reveal Animation =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  // Wrap each word in a span for animation
  const words = heroTitle.textContent.split(' ');
  heroTitle.innerHTML = words
    .map(
      (word) =>
        `<span class="word"><span class="word-inner">${word}</span></span>`
    )
    .join(' ');

  const wordInners = heroTitle.querySelectorAll('.word-inner');

  gsap.set(wordInners, { yPercent: 110 });

  gsap.to(wordInners, {
    yPercent: 0,
    duration: 0.8,
    stagger: 0.06,
    ease: 'power3.out',
    delay: 0.3,
  });
}

// ===== Hero subtitle and buttons fade in =====
const heroSubtitle = document.querySelector('.hero-subtitle');
const heroButtons = document.querySelector('.hero-buttons');

if (heroSubtitle) {
  gsap.from(heroSubtitle, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.9,
  });
}

if (heroButtons) {
  gsap.from(heroButtons.children, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 1.2,
  });
}

// ===== Floating decorative elements on hero grain =====
const heroGrain = document.querySelector('.hero-grain');
if (heroGrain) {
  gsap.to(heroGrain, {
    backgroundPosition: '100px 50px',
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

// ===== Scroll-triggered fade-up for About section =====
gsap.from('.about-content', {
  scrollTrigger: {
    trigger: '.about',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 50,
  duration: 0.9,
  ease: 'power2.out',
});

// ===== Portfolio section header =====
gsap.from('.portfolio .section-header', {
  scrollTrigger: {
    trigger: '.portfolio .section-header',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: 'power2.out',
});

// ===== Portfolio cards stagger animation =====
const portfolioCards = gsap.utils.toArray('.portfolio-card');
if (portfolioCards.length) {
  gsap.from(portfolioCards, {
    scrollTrigger: {
      trigger: '.portfolio-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 60,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out',
  });
}

// ===== Social Media section header =====
gsap.from('.social-media .section-header', {
  scrollTrigger: {
    trigger: '.social-media .section-header',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: 'power2.out',
});

// ===== Social Media cards stagger animation =====
const socialCards = gsap.utils.toArray('.social-card');
if (socialCards.length) {
  gsap.from(socialCards, {
    scrollTrigger: {
      trigger: '.social-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 60,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out',
  });
}

// ===== Clients section header =====
gsap.from('.clients .section-header', {
  scrollTrigger: {
    trigger: '.clients .section-header',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: 'power2.out',
});

// ===== Client logos stagger fade-in =====
const clientLogos = gsap.utils.toArray('.client-logo');
if (clientLogos.length) {
  gsap.from(clientLogos, {
    scrollTrigger: {
      trigger: '.clients-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
  });
}

// ===== Contact section elements animate on scroll =====
gsap.from('.contact-info', {
  scrollTrigger: {
    trigger: '.contact-container',
    start: 'top 75%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  x: -40,
  duration: 0.8,
  ease: 'power2.out',
});

gsap.from('.contact-form', {
  scrollTrigger: {
    trigger: '.contact-container',
    start: 'top 75%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  x: 40,
  duration: 0.8,
  delay: 0.2,
  ease: 'power2.out',
});

// ===== Footer fade in =====
gsap.from('.footer .container', {
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 90%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
  ease: 'power2.out',
});
