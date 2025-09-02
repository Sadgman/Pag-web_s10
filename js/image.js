document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.src = 'https://alfican.github.io/Pag-web_s10/image/' + img.getAttribute('name')
    })
})
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navLateral = document.querySelector('.nav-lateral');


  if (menuBtn && navLateral) {
    menuBtn.addEventListener('click', (e) => {
      navLateral.classList.toggle('open');
      e.stopPropagation();
    });
  }
  document.addEventListener('click', e => {
    if(!menuBtn.contains(e.target) && !navLateral.contains(e.target)){
        navLateral.classList.remove('open');
        this.body.classList.remove('open');
    }
  })
});
