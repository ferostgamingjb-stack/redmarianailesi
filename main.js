function showPage(pageName) {
  // Tüm sayfaları gizle
  document.querySelectorAll('.page').forEach(p => {
    p.style.display = 'none';
  });
  
  // Sadece tıklanan sayfayı göster
  const targetPage = document.getElementById('page-' + pageName) || document.getElementById(pageName);
  if (targetPage) {
    targetPage.style.display = 'block';
  }

  // Aktif menü butonunu güncelle
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeNav = document.getElementById('nav-' + pageName) || document.getElementById(pageName);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDropdown(id) {
  const dropdown = document.getElementById('dd-' + id) || document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle('open');
  }
}

function showTab(pageName, tabId) {
  showPage(pageName);
  document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.style.display = 'block';
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('desktopMenu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}
