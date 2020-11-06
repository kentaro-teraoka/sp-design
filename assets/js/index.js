$(function(){


    // メニューボタンにopenクラスを付与
    $(".header-contents__menu-btn").click(function(){
        let $nav = $(this).siblings(".header-contents__sp-nav");
        $nav.toggleClass("open");
        if($nav.hasClass("open")){
            $(this).children("img").attr("src", "assets/img/menu_icon_close.svg"); //openクラスついてたらバツボタン
        }else{
            $(this).children("img").attr("src", "assets/img/menu_icon.svg");　//openクラスついてなかったらメニューボタン
        }
    });

    // topを超えた時にheaderを追従させる
    let topHeight = $(".top").height();
    $(window).scroll(function(){
        let scrollHeight = $(this).scrollTop();
        if(scrollHeight > topHeight){
            $(".header").css({
                position: "fixed",
                background: "rgba(0,107,61, 0.8)"
            });
        } else{
            $(".header").css({
                position: "absolute",
                background: "transparent"
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
        let windowWidth = window.innerWidth;
        if(windowWidth < 1000){
            $(this).next().slideToggle(); //answer-textの開閉
            $(this).children("img").toggleClass("rotate");
            if($(this).children("img").hasClass("rotate")){
                $(this).children("img").css("transform", "rotate(-90deg)");
            }else{
                $(this).children("img").css("transform", "rotate(0deg)");
            }
        }
        
    });


});