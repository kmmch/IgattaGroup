(function($){

    // ハンバーガーボタンクリック時
    $("#hamburgerBtn").on('click',() => {
	    $("#hamburgerBtn").toggleClass('active');
        $("#hamburgerMenu").toggleClass('panelactive');
        $('body').toggleClass('noScroll');
    });

    // ハンバーガーメニューのリンククリック時
    $("#hamburgerMenu a").on('click',() => {
        $("#hamburgerBtn").removeClass('active');
        $("#hamburgerMenu").removeClass('panelactive');
        $('body').removeClass('noScroll');
    });



    // スクロールによるヘッダーの表示/非表示切り替え
    const fh = $('#fixedHeader');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            fh.addClass('is-show');
        } else {
            fh.removeClass('is-show');
        }
    });
}(jQuery));