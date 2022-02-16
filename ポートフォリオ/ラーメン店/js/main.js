console.log("test");

let mySwiper = new Swiper ('.swiper', {
  // 以下にオプションを設定
  loop: true,
  speed: 500,
  slidesPerView: 1,
  centeredSlides : true,
  grabCursor: true,//スライダー画像ホバー時マウスカーソル変更
  //▼pc版▼
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
 
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },
  //自動スライド
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,//スライダーを操作しても自動スライド継続
  },
});

//ハンバーガーメニュー×押したらメニュー閉じる
$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').toggleClass('fixed noscroll');
  });
});
//ハンバーガーメニューリンククリックしたらメニュー閉じる
$(function () {
  $('.nav-item').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').removeClass('fixed noscroll');
  });
});

//タブ切り替え
document.addEventListener('DOMContentLoaded', function() {
	// タブに対してクリックイベントを適用
	const tabs = document.getElementsByClassName('tab');
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch, false);
	}

	// タブをクリックすると実行する関数
	function tabSwitch(){
		// タブのclassの値を変更
		document.getElementsByClassName('is-active')[0].classList.remove('is-active');
		this.classList.add('is-active');
		// コンテンツのclassの値を変更
		document.getElementsByClassName('is-show')[0].classList.remove('is-show');
		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
		document.getElementsByClassName('panel')[index].classList.add('is-show');
	};
}, false);

//右下の↑固定ボタンクリック時に一番上までスクロールする。
$(".upper__wrapper").click(function(){
  $('html,body').animate({'scrollTop':0},500);
});

//クーポン券フェードイン/フェードアウト
$(function() {
  // クーポンに対してクリックイベントを適用
	const couponList = document.getElementsByClassName('fujin__coupon__box01__list');
  const couponFade = document.getElementsByClassName('fujin__coupon__fadeIn');
  const couponClose = document.getElementsByClassName('fujin__coupon__fadeIn__button');

	for(let i = 0; i < couponList.length; i++) {
    //クーポンクリック時
		couponList[i].addEventListener('click', function() {
      couponFade[i].classList.add('show');
      document.body.classList.add('fixed','noscroll');
    });

    // クーポン×ボタンクリック時
    couponClose[i].addEventListener('click', function() {
      couponFade[i].classList.remove('show');
      document.body.classList.remove('fixed','noscroll')
    });
	}
});

//お知らせページのページネーション
$(document).ready(function($){
  $('.list-group').paginathing({
      perPage: 4,
      firstLast: false,
      prevText:'prev' ,
      nextText:'next' ,
      activeClass: 'active',
  })
});

//slick.js
//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 4, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});
  
//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var index = nextSlide; //次のスライド番号
	//サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
	$(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});

//フォームテキストファイルに出力
function dispText() {
  var text = "'" +
      document.formname.name01.value + "','" +
      document.formname.name02.value + "','" +
      document.formname.year.value + "','" +
      document.formname.month.value + "','" +
      document.formname.day.value + "','" +
      document.formname.gender.value + "','" +
      document.formname.email.value + "','" +
      document.formname.tell.value + "','" +
      document.formname.job.value + "','" +
      document.formname.address01.value + "','" +
      document.formname.address02.value + "'";
  var blob = new Blob([text], { "type": "text/plain" });

  //IEの場合
  if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(blob, "outFileFromWindows.txt");
  //IE以外の場合
  } else {
      document.getElementById("createFile").href = window.URL.createObjectURL(blob);
  }
}
