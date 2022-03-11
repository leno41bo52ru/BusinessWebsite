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

//右下の↑固定ボタンクリック時に一番上までスクロールする。
$(".upper__wrapper").click(function(){
  $('html,body').animate({'scrollTop':0},500);
});