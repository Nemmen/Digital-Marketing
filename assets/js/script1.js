document.addEventListener('DOMContentLoaded', function() {

    const navItem = document.getElementsByTagName('nav')[0];
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navItem.classList.add('shadow-md', 'shadow-gray-300');
        } else {
            navItem.classList.remove('shadow-md', 'shadow-gray-300');
        }  
    });
});

const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close');
const mobNav = document.querySelector('.mob-nav');

toggle.addEventListener('click', function(){
    toggle.classList.add('hidden');
    close.classList.remove('hidden');
    mobNav.classList.remove('hidden');
});

close.addEventListener('click', function(){
    close.classList.add('hidden');
    toggle.classList.remove('hidden');
    mobNav.classList.add('hidden');
});
window.addEventListener('scroll', function() {
    var toTopButton = document.getElementById('toTopButton');
    if (window.pageYOffset > 300) {
        toTopButton.style.opacity = "1";
    } else {
        toTopButton.style.opacity = "0";
    }
});