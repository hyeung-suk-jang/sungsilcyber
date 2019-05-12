//flexslider
$(document).ready(function(){
    function pp(){
        //.flex-pauseplay a가 컨트롤버튼 옆에 위치
        var mWidth = 1170; //홈페이지 디자인사이즈
        var aWidth = $(window).width();
        var cWidth = 170; //원버튼과의 간격 조정
        var aMargin = (aWidth-mWidth)/2+cWidth;
        
        if(aWidth>=1170){ //모바일과 태블릿에서 움직이지 않게 처리
            $('.flex-pauseplay a').css({
                left: aMargin,
                display: 'block'
            });
        }else if(aWidth<1170 && aWidth>767){ //태블릿
            $('.flex-pauseplay a').css({
                left: 180,
                display: 'block'
            });
        }else{ //모바일
            $('.flex-pauseplay a').css({
                left: 105,
                display: 'block'
            });
        }
    }
    
    
    $('.flexslider').flexslider({
        pausePlay: true,
        start: function(){ //1번 슬라이드가 실행될때 실행
            pp();
        }
    });
    
    $(window).resize(function(){
        pp();
    });
});




