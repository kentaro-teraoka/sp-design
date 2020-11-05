$(function(){


    // メニューボタンにopenクラスを付与
    $(".header-contents__menu-btn").click(function(){
        $(this).siblings(".header-contents__sp-nav").toggleClass("open");
    });

    // topを超えた時にheaderを追従させる
    let topHeight = $(".top").height();
    $(window).scroll(function(){
        let scrollHeight = $(this).scrollTop();
        if(scrollHeight > topHeight){
            $(".header").css("position", "fixed");
        } else{
            $(".header").css("position", "absolute");
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


});