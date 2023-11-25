/*
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
*/

(function($){

    // ハンバーガーボタンクリック時
    $("#hamburgerBtn").on('click',function(){
	    $(this).toggleClass('active');
        $("#hamburgerMenu").toggleClass('panelactive');
        $('body').toggleClass('noScroll');
    });

    // ハンバーガーメニューのリンククリック時
    $("#hamburgerMenu a").on('click',function(){
        $("#hamburgerBtn").removeClass('active');
        $("#hamburgerMenu").removeClass('panelactive');
        $('body').removeClass('noScroll');
    });

}(jQuery));