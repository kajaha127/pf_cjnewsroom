$(function(){
    const $header = $('header');
    const $nav = $('nav');
    const $mnu = $('header>.container>nav>.gnb>li>a');
    const $aside = $('aside');
    const $btnBars = $('header > .container > div > .bars');

    const arrTopVal = [];
  $('section').each(function(idx){
    arrTopVal[idx] = $(this).offset().top;
  });
  console.log(arrTopVal);

  $mnu.on('click',function(evt){
    evt.preventDefault();
    let nowIdx = $mnu.index(this);
    $('html, body').animate({scrollTop:arrTopVal[nowIdx]})
  });

  $('header logo').on('click',function(evt){
    evt.preventDefault();
    $('html, body').animate({scrollTop:0},400);
  });



$(window).on('scroll',function(){
  const scrollTop = Math.ceil($(window).scrollTop());
      
      if(scrollTop>900){
        $header.addClass('fixed');
        $header.next().css({marginTop:80});
      }else{
        $header.removeClass('fixed');
        $header.next().css({marginTop:0})
      }


      for(let i=0;i<$mnu.length;i++){
      if(scrollTop>=arrTopVal[i]-50){
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
      }else if(scrollTop<arrTopVal[0]-50){
        $mnu.parent().removeClass('on');
      };
      };


    const view = (scrollTop + $(window).height()) - $('footer').offset().top;

    if(view>0){//푸터노출
      $aside.css('margin-bottom', view);
    }else{
      $aside.css('margin-bottom', 0);
    }

      if(scrollTop>120){
        $aside.fadeIn();
      }else{
        $aside.fadeOut();
      }

  }
);

$btnBars.on('click', function(){
    $nav.on();
  });

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3, //한 화면에 보이는 슬라이드의 개수
    spaceBetween: 20, //슬라이드간의 간격
    slidesPerGroup: 1, //한번에 슬라이드 되는 개수
  
    loop: true, //무한반복
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, //인디케이터 클릭가능 여부
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

  $btnBars.on('click', function(){
    $nav.toggle();
  });

})






