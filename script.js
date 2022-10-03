

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
$(".tablist li").on("click", function () {
    let target = $(this).attr("id");
    $(".bo").removeClass("current");
    //   全部の.boxからcurrentを一旦とる
    $(target).addClass("current");
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

// テラススイートスライダー
let index1 = 0;
let slideMax1 = $('.slide1').length
$('.right-arrow1').on('click',function () {
  if (index1 !== slideMax1-1) {
    index1++;
    num = index1 * -1 * 100;
    $('.slide-container1').css({'transform':`translateX(${num}%)`});
  }
})

$('.left-arrow1').on('click',function () {
  if (index1 !== 0) {
    index1--;//左スライドバージョンだからマイナス
    num = index1 * -1 * 100;
    $('.slide-container1').css({'transform':`translateX(${num}%)`})
  }
})

// デラックスメゾネット オーシャンフロント
let index2 = 0;
let slideMax2 = $('.slide2').length
$('.right-arrow2').on('click',function () {
  if (index2 !== slideMax2-1) {
    index2++;
    num = index2 * -1 * 100;
    $('.slide-container2').css({'transform':`translateX(${num}%)`});
  }
})

$('.left-arrow2').on('click',function () {
  if (index2 !== 0) {
    index2--;//左スライドバージョンだからマイナス
    num = index2 * -1 * 100;
    $('.slide-container2').css({'transform':`translateX(${num}%)`})
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

