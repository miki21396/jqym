// $('#q8-btn').on('click', function () {
//     $(this)
//       .siblings()
//       .slideToggle();
//   });

// slider
// $('.slider').slick({
//     arrows: false,//左右の矢印はなし
//     autoplay: true,//自動的に動き出すか。初期値はfalse。
//     autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
//     speed: 6900,//スライドのスピード。初期値は300。
//     infinite: true,//スライドをループさせるかどうか。初期値はtrue。
//     pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
//     pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
//     cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
//     slidesToShow: 4,//スライドを画面に4枚見せる
//     slidesToScroll: 1,//1回のスライドで動かす要素数
//     responsive: [
//         {
//         breakpoint: 769,//モニターの横幅が769px以下の見せ方
//         settings: {
//             slidesToShow: 2,//スライドを画面に2枚見せる
//         }
//     },
//     {
//         breakpoint: 426,//モニターの横幅が426px以下の見せ方
//         settings: {
//             slidesToShow: 1.5,//スライドを画面に1.5枚見せる
//         }
//     }
// ]
// });

// left-content

$('.tab-list li').on('click', function () {
    let target = $(this).attr('id');
    $('.box').removeClass('current');
    $(target).addClass('current');
})

// righ-content
$(function(){
    $('#datepicker').datepicker();
});

// box2　文字色
$(function () {
    $('#box2').css('color','#d4b16e');
});

// マーカー
$(window).scroll(function (){
    $(".js-markerScrollAnimation").each(function(){
      var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
      var scroll = $(window).scrollTop(); //スクロールの位置を取得
      var windowHeight = $(window).height(); //ウインドウの高さを取得
      if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
        $(this).addClass('is-active'); //クラス「active」を与える
      }
    });
});

// foam buttom
$(function(){
    $(".pochi").click(function(){
        alert("thanks for send it!");
    });
});



// Q&A

$('.question').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('on');
})
