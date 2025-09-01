document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.src = 'https://alfican.github.io/Pag-web_s10/image/' + img.getAttribute('name')
    })
})