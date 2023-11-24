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



const HEADER_CLASS_NAME = '.header'
const HEADER_STICKY = 'header--sticky';
const positionDisplayHeader = 300;
window.addEventListener('scroll', function() {
    const header = document.querySelector(HEADER_CLASS_NAME);
    const headerHeight = header.offsetHeight; // ヘッダーの高さを取得
    const scrollY = window.scrollY;
    
    if (scrollY >= positionDisplayHeader) {
        header.classList.add(HEADER_STICKY);
        document.body.style.marginTop = headerHeight + 'px'; // コンテンツにヘッダーの高さ分の余白を設定
    } else {
        header.classList.remove(HEADER_STICKY);
        document.body.style.marginTop = '0'; // コンテンツの余白をリセット
    }
});