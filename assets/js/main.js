var hamburgerBtn = document.getElementById('hamburgerBtn');
var hamburgerMenu = document.getElementById('hamburgerMenu');
var hamburgerLinkArr = document.querySelectorAll('.hamburgerLink');


const clickHamburgerBtn = () => {
    hamburgerBtn.classList.toggle('active');
    hamburgerMenu.classList.toggle('panelactive');
}
hamburgerBtn.addEventListener('click', clickHamburgerBtn);


const clickHamburgerLink = () => {
    hamburgerBtn.classList.remove('active');
    hamburgerMenu.classList.remove('panelactive');
}
hamburgerLinkArr.forEach((link) => {
    link.addEventListener('click', clickHamburgerLink);
});
