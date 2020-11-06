$(function(){


    function toggleNav(){
        $(".header-contents__sp-nav").slideToggle();
        $(".header-contents__menu-btn").toggleClass("open");
        if($(".header-contents__menu-btn").hasClass("open")){
            $(".header-contents__menu-btn").children("img").attr("src", "assets/img/menu_icon_close.svg"); //openクラスついてたらバツボタン
        }else{
            $(".header-contents__menu-btn").children("img").attr("src", "assets/img/menu_icon.svg");　//openクラスついてなかったらメニューボタン
        }
    }

    let windowWidth = window.innerWidth;

    // メニューボタン開閉
    $(".header-contents__menu-btn").click(function(){
        toggleNav();
    });

    // アンカーリンクのスクロール
    $(".section-link").click(function(){
        let anchorLink = $(this).attr("href");
        let sectionPos = $(anchorLink).offset().top;
        $("body, html").animate({scrollTop: sectionPos}, 500);
        if(windowWidth < 1000){
            toggleNav();
        }
    });

    // topへのアンカーリンクのスクロール
    $(".top-link").click(function(){
        $("body, html").animate({scrollTop: 0}, 500);
    });


    // topを超えた時にheaderを追従させる
    $(window).scroll(function(){
        let $header = $(".header");
        let scrollHeight = $(this).scrollTop();
        let headerHeight = $header.height();
        let topHeight = $(".top").height();
        if(scrollHeight > headerHeight && scrollHeight < topHeight){
            $header.css({
                top: 0 - headerHeight
            });
        }else if(scrollHeight >= topHeight){
            $header.css({
                position: "fixed",
                background: "rgba(0,107,61, 0.8)",
                top: 0
            });
        } else{
            $header.css({
                position: "absolute",
                background: "transparent",
                top: 0
            });
        }
    });

    // priceのリストアイテムをタブ切り替え
    $(".switch-tab__item").click(function(){
        $(this).siblings().removeClass("active"); //兄弟要素のactiveクラスを全部削除
        $(this).addClass("active"); //クリックした要素にactiveクラスを付与
        let index = $(".switch-tab__item").index($(this)); //クリックしたタブが何番目か調べる
        $(".price__list__item").siblings().removeClass("show"); //全てのリストアイテムからshowクラス削除
        $(".price__list__item").eq(index).addClass("show"); //タブの番号と同じ順番のリストアイテムにshowクラスを付与
    });


    // sp時、questionのリストアイテムをアコーディオン切り替えに
    $(".question-text").click(function(){
        if(windowWidth < 1000){
            $(this).next().slideToggle(); //answer-textの開閉
            $(this).children("img").toggleClass("rotate");
        }
        
    });


});