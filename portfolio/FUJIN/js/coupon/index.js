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