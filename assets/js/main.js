(function($){

    // ハンバーガーボタンクリック時
    $("#hamburgerBtn").on('click',() => {
	    $(this).toggleClass('active');
        $("#hamburgerMenu").toggleClass('panelactive');
        $('body').toggleClass('noScroll');
    });

    // ハンバーガーメニューのリンククリック時
    $("#hamburgerMenu a").on('click',() => {
        $("#hamburgerBtn").removeClass('active');
        $("#hamburgerMenu").removeClass('panelactive');
        $('body').removeClass('noScroll');
    });

}(jQuery));