const WHATSAPP_NUMBER = "5561991282541";
const WHATSAPP_MESSAGE = "Olá, Giselle! Vim pelo site da Quality Gestão & Consultoria e gostaria de saber mais sobre os serviços.";

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-menu');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('current-year').textContent = new Date().getFullYear();
