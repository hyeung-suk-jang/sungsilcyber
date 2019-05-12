//mobileBtn
$(document).ready(function(){
    var cnt = 0; //0과 1을 담는 스위치변수
    //delay메서드는 animate메서드, 시각효과 메서드에만 사용
    //addClass메서드 toggleClass메서드에는 사용되지 않음
    
    //초기실행
    $('.mNavMobile .subNav').slideUp(0);
    $('.mNavMobile').css({
       opacity: 0,
       top: '-100%'
    });
    $('.tnav').css('top','-100%');
    
    
    $('.mobileBtn').click(function(){
        if(cnt==0){ //X로 변경
            //두번째 라인 사라지게 처리
			setTimeout(function(){
				$('.mobileBtn .line02').addClass('on');
			},0);
			
			//첫번째 선과 세번째 선이 십자가로 크로스
			setTimeout(function(){
				$('.mobileBtn .line01').addClass('on');
				$('.mobileBtn .line03').addClass('on');
			},300);
			
			//크로스가 45도를 기울게 처리 => X로 변경
			setTimeout(function(){
				$('.mobileBtn a').addClass('on');
			},600);

            $('.mNavMobile').animate({
                opacity: 1,
                top: 0
            },'slow');
            
            $('.tnav').animate({
                top: 70
            },'slow');
            
            cnt = 1;
        }else{ //햄버거로 변경
            //한번에 변경
            $('.mobileBtn a').removeClass('on');
			$('.mobileBtn .line01').removeClass('on');
			$('.mobileBtn .line03').removeClass('on');
			$('.mobileBtn .line02').removeClass('on');
            
            
            $('.mNavMobile').animate({
                opacity: 0,
                top: '-100%'
            },'slow',function(){
                $(this).find('.subNav').slideUp(0);
                $('.mNavMobile > ul > li').removeClass('on');
            });
            
            $('.tnav').animate({
                top: '-100%'
            },'slow');
            
            cnt = 0;
        }
    });
    
    //메인네비 클릭시 하위네비 보이게 처리
    $('.mNavMobile .topNav').click(function(){
        //열려 있지 않다면 열기
        var is = $(this).next().is(':hidden');
        
        
        $('.mNavMobile > ul > li').removeClass('on');
        $(this).parent().addClass('on');
        
        if(is){
            $('.mNavMobile .subNav').slideUp(0);
			$(this).next().slideDown('fast');
        }else{
            $('.mNavMobile .subNav').slideUp(0);
            $('.mNavMobile > ul > li').removeClass('on');
        }
    });
});




//pc용메인네비
$(document).ready(function(){
    //하위메뉴 배경을 동적생성
    var bg = $('<div class="subNavBg"></div>');
    
    //hWrap의 자손으로 맨뒤에 삽입
    $('.hWrap').append(bg);
    
    //초기실행 - 하위메뉴와 배경 안보이게 처리
    $('.mNav .subNav, .subNavBg').slideUp(0);
    
    //hover이벤트
    $('.mNav').hover(function(){ //mouseenter이벤트
        $('.mNav .subNav, .subNavBg').stop().slideDown('fast');
        $('.mNav > ul > li').removeClass('on');
        $(this).parent().addClass('on');
    },function(){ //mouseleave이벤트
        $('.mNav .subNav, .subNavBg').stop().slideUp('fast');
    });
    
    //웹접근성 - tab과 shift+tab처리
    //tab 초점처리
    $('.mNav .topNav').focus(function(){
        $('.mNav .subNav, .subNavBg').stop().slideDown('fast');
        
        
        $('.mNav > ul > li').removeClass('on');
        $(this).parent().addClass('on');
    });
    
    //마지막 하위메뉴에서 tab 혹은 shift+tab처리에 대한 명령
    $('.mNav .subNav li:last a').keydown(function(e){
        if(e.keyCode==9){ //tab키를 눌렀을 때
            if(!e.shiftKey){ //shift를 누르지는 않았을 때
                $('.mNav .subNav, .subNavBg').stop().slideUp('fast');
                $('.mNav > ul > li').removeClass('on');
            }
        }
    });
    
    //다른 하위메뉴에 초점갔을 때 메인네비 색상 오류 수정
    $('.mNav .subNav li:last-child a').focus(function(){
        $('.mNav > ul > li').removeClass('on');
        $(this).parents('.subNav').parent().addClass('on');
    });
    
    //첫번째 메인네비에서 shift+tab시 사라지게 처리
    $('.mNav .topNav').first().keydown(function(e){
        if(e.keyCode==9){ //tab키를 눌렀을 때
            if(e.shiftKey){ //shift키를 눌렀을 때 (최종적으로 shift+tab)
                $('.mNav .subNav, .subNavBg').stop().slideUp('fast');
                $('.mNav > ul > li').removeClass('on');
            }
        }
    });
    
    //hasClass('클래스명') : 해당 클래스명을 갖고 있다면 true값을 그렇지 않다면 false값을 주는 메서드
    
    //topNav에 클릭한 후 mNav영역을 벗어나면 li.on을 제거
    $('.mNav .topNav').click(function(e){
        if(!$(e.target).hasClass('.mNav')){
            //클릭한후 mNav의 영역을 벗어났을 때
            //!연산자 사용하지 않으면, 클릭한 후 mNav영역에 있을 때
            $('.mNav > ul > li').removeClass('on');
        }
    });
});



//header scroll
$(document).ready(function(){
    $(window).scroll(function(){
        //조건 - 스크롤탑의 위치가 0보다 크고 창크기가 960이상일때 header.on
        var w = $(window).width();
        var top = $(window).scrollTop();
        
        if(w>=960 && top>0){
			$('header').addClass('on');
		}else{
			$('header').removeClass('on');
		}
    });
});



//mobile addr
$(document).ready(function(){
    //초기실행 닫혀있기
    $('.addrMobile .addrWrap').slideUp(0);
    
    $('.addrMobile button').click(function(){
        $('.addrMobile .addrWrap').slideToggle('fast');
        $(this).find('.arrow').toggleClass('on');
    });
});












