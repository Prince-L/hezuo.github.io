$(function(){
    $('.h-nav-ul li.h-nav-ul-li').click(function(){
        //$(this).find('span').addClass('select').siblings().removeClass('select');
        //var i=$(this).index();
        //$('.h-nav-ul li.h-nav-ul-li span').eq(i).css({
        //    width:'100%',
        //    display:'block'
        //})
    });
});
$(function(){
    $('.h-nav-ul li.h-nav-ul-li').mousemove(function(){
        var i=$(this).index();
        $('.h-nav-ul li.h-nav-ul-li span').eq(i).css({
            width:'100%',
            '-webkit-transition':'1s' ,
            '-mos-transition':'1s',
            '-ms-transition':'1s',
            '-o-transition':'1s',
            'transition':'1s',
            display:'block'
        })
    });
    $('.h-nav-ul li.h-nav-ul-li').mouseout(  function(){
        var i=$(this).index();
        $('.h-nav-ul li.h-nav-ul-li span').eq(i).css({
            width:'0',
            '-webkit-transition':'1s' ,
            '-mos-transition':'1s',
            '-ms-transition':'1s',
            '-o-transition':'1s',
            'transition':'1s',
            display:'block'
        })
    });
});
$(function(){
    $('.h-foot-about1-a img').hover(function(){
        $('.erweima').css({"display":"block"})
    },function(){
        $('.erweima').css({"display":"none"})
    });
});
$(function(){
    var index=0;
    var time=null;
    var state=true;
    function addStyle(){
        $(".h-inner>img").eq(index).fadeIn(3000,function(){
            state=true;
        }).siblings().hide();
        $(".h-outer>ul>li").eq(index).addClass("h-select").siblings().removeClass("h-select");
    }
    function rightMove(){
        index++;
        if(index>=$(".h-inner>img").length){
            index=0;
        }
        addStyle();
    }
    automove();
    function automove(){
        time=setInterval(function(){
            rightMove()
        },3000)
    }
    $(".h-outer>ul>li").click(function(){
        clearInterval(time);
        var i=$(".h-outer>ul>li").index(this);
        index=i;
        addStyle();
        automove();
    })
});
//$(function(){
//    $('.h-cont-one1').mousemove(function(){
//        var i=$(this).index();
//        $('.h-cont-one1').eq(i).css({
//            transform:'translateY(-5px)' ,
//            transition: '0.5s',
//            'box-shadow':' 5px 10px 10px 5px #EBEBEB'
//        })
//    });
//    $('.h-cont-one1').mouseout(  function(){
//        var i=$(this).index();
//        $('.h-cont-one1').eq(i).css({
//            transform:'translateY(0px)' ,
//            transition: '0.5s',
//            'box-shadow':' 0px 0px 0px 0px'
//        })
//    })
//});


$(function(){
    $(".z-chunk").mouseover(function(){

        $(this).children('.z-maskFont').css({

            '-webkit-transition':'.4s' ,
            '-mos-transition':'.4s',
            '-ms-transition':'.4s',
            '-o-transition':'.4s',
            'transition':'1s',
            'transform': 'translateY(70PX)'
        })
        $(this).children('.z-delay').css({

            '-webkit-transition':'5s' ,
            '-mos-transition':'5s',
            '-ms-transition':'5s',
            '-o-transition':'5s',
            'transition':'5s',
            'transform': 'translateY(160PX)'
        })

        $(this).children('img').css({

            '-webkit-transition':'.8s' ,
            '-mos-transition':'.8s',
            '-ms-transition':'.8s',
            '-o-transition':'.8s',
            'transition':'.8s',
            'transform': 'scale(1.2)'
        })

    })
    $(".z-chunk").mouseout(function(){
        $(this).children('.z-maskFont').css({

            '-webkit-transition':'.4s' ,
            '-mos-transition':'.4s',
            '-ms-transition':'.4s',
            '-o-transition':'.4s',
            'transition':'1s',
            'transform': 'translateY(270PX)'
        })
        $(".z-chunk").mouseout(function(){
            $(this).children('.z-delay').css({

                '-webkit-transition':'5s' ,
                '-mos-transition':'5s',
                '-ms-transition':'5s',
                '-o-transition':'5s',
                'transition':'5s',
                'transform': 'translateY(300PX)'
            })
            $(this).children('img').css({
                '-webkit-transition':'.8s' ,
                '-mos-transition':'.8s',
                '-ms-transition':'.8s',
                '-o-transition':'.8s',
                'transition':'.8s',
                'transform': 'scale(1)'
            })

        })
    })

})
$(function(){
    $('.h-cont-three1-left').mouseover(function(){
        $('.h-cont-three1-left>a>img').css({
            transform: 'scale(1.2)',
            '-webkit-transition':'1s' ,
            '-mos-transition':'1s',
            '-ms-transition':'1s',
            '-o-transition':'1s',
            'transition':'1s'
        })
    })
    $('.h-cont-three1-left').mouseout(function(){
        $('.h-cont-three1-left>a>img').css({
            transform: 'scale(1)',
            '-webkit-transition':'1s' ,
            '-mos-transition':'1s',
            '-ms-transition':'1s',
            '-o-transition':'1s',
            'transition':'1s'
        })
    })



    $('.h-cont-three1-right>div').mouseover(function(){
        var i=$(this).index();
        $('.h-cont-three1-right>div>a>img').eq(i).css({
            transform: 'scale(1.2)',
            '-webkit-transition':'1s' ,
            '-mos-transition':'1s',
            '-ms-transition':'1s',
            '-o-transition':'1s',
            'transition':'1s'
        })
    })
    $('.h-cont-three1-right>div').mouseout(function(){
        var i=$(this).index();
        $('.h-cont-three1-right>div>a>img').eq(i).css({
            transform: 'scale(1)',
            '-webkit-transition':'1s' ,
            '-mos-transition':'1s',
            '-ms-transition':'1s',
            '-o-transition':'1s',
            'transition':'1s'
        })
    })
})