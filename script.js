const phone = '5561991282541';
const message = 'Olá, Giselle! Vim pelo site da Quality Gestão & Consultoria e gostaria de saber mais sobre os serviços.';

document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];
window.addEventListener('scroll', () => {
  const y = window.scrollY + 140;
  let current = 'inicio';
  sections.forEach(section => { if (section.offsetTop <= y) current = section.id; });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});
