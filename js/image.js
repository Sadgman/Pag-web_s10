document.querySelectorAll('img').forEach(img => {
    img.src = '/image/' + img.getAttribute('name')
})