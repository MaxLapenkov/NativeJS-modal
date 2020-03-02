let more = document.querySelectorAll('.more'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');
for (let i = 0; i < more.length; i++) {
more[i].addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
close.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
});
}