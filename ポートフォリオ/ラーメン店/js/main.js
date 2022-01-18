console.log("test");

let mySwiper = new Swiper ('.swiper', {
  // 以下にオプションを設定
  loop: true,
  speed: 500,
  slidesPerView: 1,
  centeredSlides : true,
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
 
  //スクロールバー表示の設定
  // scrollbar: { 
  //   el: '.swiper-scrollbar', //要素の指定
  // },
});

//同じ記述なのでリファクタリングしたい
//ハンバーガーメニュー×押したらメニュー閉じる
$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').toggleClass('fixed');
    $('body').toggleClass('noscroll');
  });
});
//ハンバーガーメニューリンククリックしたらメニュー閉じる
$(function () {
  $('.nav-item').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').removeClass('fixed');
    $('body').removeClass('noscroll');
  });
});