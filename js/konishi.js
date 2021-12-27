

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	var doch = $(document).innerHeight(); //ページ全体の高さ
	var winh = $(window).innerHeight(); //ウィンドウの高さ
	var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
	if ((scroll >= 200) && 
	bottom - 50 > $(window).scrollTop()){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// .page-topをクリックした際の設定
$('.go-page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


//追従するHeader分の高さを引いて適切な場所へスクロール
$('.page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;//idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});


//ハンバーガーメニュー -3本線が×に-
$(".openbtn").click(function () {
    $(this).toggleClass('active');
	$("#g_navi").toggleClass('panelactive');//#g_naviにpanelactiveクラスを付与
	$("#logo_konishi").toggleClass('logoactive');//logo_konishi"にpanelactiveクラスを付与
	$("#icon_tel").toggleClass('logoactive');//logo_konishi"にpanelactiveクラスを付与
});

$("#g_navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g_navi").removeClass('panelactive');//#g_naviのpanelactiveクラスも除去
	$("#logo_konishi").removeClass('logoactive');//#logo_konishi"のpanelactiveクラスも除去
	$("#icon_tel").removeClass('logoactive');//#logo_konishi"のpanelactiveクラスも除去
});

//横幅が768px以下になった時の処理をまとめる
function fncOpenMenu() {
  //ヘッダーの高さを取得
	var width = $(window).width();
	if(width <= 700) {//横幅が768px以下の場合
		$('.openbtn').addClass('openMenu');//.openbtnにopenMenuというクラス名を付与して
		$('#g_navi').addClass('dnone');//#g_naviにdnoneというクラス名を付与
  	}else{//それ以外は
		$('.openbtn').removeClass('openMenu');//openMenuというクラス名を除き
		$('#g_navi').removeClass('dnone');//#g_naviのdnoneというクラス名を除く
		$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
		$("#g_navi").removeClass('panelactive');//#g_naviのpanelactiveクラスも除去
		$("#logo_konishi").removeClass('logoactive');//#logo_konishi"のpanelactiveクラスも除去
  	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
  fncOpenMenu();//横幅が768px以下、になった時ハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  fncOpenMenu();//横幅が768px以下、になった時ハンバーガーメニューに変化するための関数を呼ぶ
});


// -1文字ずつ出現-
function slideAnime(){
  //====上に動くアニメーションここから===
    $('.upAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 上から下へ表示するクラスを付与
            // テキスト要素を挟む親要素（上）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeUpDown");
            // 要素を上枠外に移動しCSS アニメーションで上から元の位置に移動
            $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 上から下へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeUpDown");
            $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
            }
            });
  }
  

/*
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    slideAnime();
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
*/



lightbox.option({
  'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
  'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})

/*
// ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    $('.gallery li').addClass('flipLeft');
  });// ここまでページが読み込まれたらすぐに動かしたい場合の記述
*/


