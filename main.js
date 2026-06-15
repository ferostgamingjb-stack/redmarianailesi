// SAYFA GEÇİŞLERİ VE DROPDOWN SİSTEMİ
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const targetPage = document.getElementById('page-' + pageName) || document.getElementById(pageName);
  if (targetPage) targetPage.style.display = 'block';

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeNav = document.getElementById('nav-' + pageName) || document.getElementById(pageName);
  if (activeNav) activeNav.classList.add('active');

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDropdown(id) {
  const dropdown = document.getElementById('dd-' + id) || document.getElementById(id);
  if (dropdown) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== dropdown) menu.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  }
}

function showTab(pageName, tabId) {
  showPage(pageName);
  document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
  const targetTab = document.getElementById(tabId);
  if (targetTab) targetTab.style.display = 'block';
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('desktopMenu');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

window.onclick = function(event) {
  if (!event.target.matches('.nav-link') && !event.target.closest('.nav-item')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('open'));
  }
}

// ARKA PLAN ANİMASYONU (CANVAS)
const canvas = document.getElementById('bgCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.fillStyle = 'rgba(74, 222, 128, 0.3)'; // Yeşil Matrix/Neon efekti
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < 50; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }

  init();
  animate();
}
