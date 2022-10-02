

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

// Googleマップ
// $(".tab-list li").on("click", function () {
//     let target = $(this).attr("id");
//     $(".bo").removeClass("current");
//     //   全部の.boxからcurrentを一旦とる
//     $(target).addClass("current");
// });

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

// クラブスイートスライダー
let index = 0;
let slideMax = $('.slide').length
$('.right-arrow').on('click',function () {
  if (index !== slideMax-1) {
    index++;
    num = index * -1 * 100;
    $('.slide-container').css({'transform':`translateX(${num}%)`});
  }
})

$('.left-arrow').on('click',function () {
  if (index !== 0) {
    index--;//左スライドバージョンだからマイナス
    num = index * -1 * 100;
    $('.slide-container').css({'transform':`translateX(${num}%)`})
  }
})


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
