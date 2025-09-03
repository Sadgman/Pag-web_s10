document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.src = 'https://alfican.github.io/Pag-web_s10/image/' + img.getAttribute('name')
    })
})
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navLateral = document.querySelector('.nav-lateral');
  const body = document.body;
  const dropdownLinks = document.querySelectorAll('.dropdown-link');

  if (menuBtn && navLateral) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLateral.classList.toggle('open');
      body.classList.toggle('open');
    });

    navLateral.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !navLateral.contains(e.target)) {
        navLateral.classList.remove('open');
        body.classList.remove('open');
      }
    });
  }

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.matchMedia('(max-width: 768px)').matches) {
        e.preventDefault();
        const parentLi = this.parentElement;
        
        document.querySelectorAll('.dropdown.open').forEach(openMenu => {
          if (openMenu !== parentLi) {
            openMenu.classList.remove('open');
          }
        });
        
        parentLi.classList.toggle('open');
      }
    });
  });
});
