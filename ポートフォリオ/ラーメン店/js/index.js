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