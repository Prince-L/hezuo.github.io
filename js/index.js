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
            transition:'1s' ,
            display:'block'
        })
    });
    $('.h-nav-ul li.h-nav-ul-li').mouseout(  function(){
        var i=$(this).index();
        $('.h-nav-ul li.h-nav-ul-li span').eq(i).css({
            width:'0',
            transition:'1s' ,
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
$(function(){
    $('.h-cont-one1 a').mousemove(function(){
        var i=$(this).index();
        $('.h-cont-one1 a').eq(i).css({
            transform:'translateY(-5px)' ,
            transition: '0.5s',
            'box-shadow':' 5px 10px 10px 5px #EBEBEB'
        })
    });
    $('.h-cont-one1 a').mouseout(  function(){
        var i=$(this).index();
        $('.h-cont-one1 a').eq(i).css({
            transform:'translateY(0px)' ,
            transition: '0.5s',
            'box-shadow':' 0px 0px 0px 0px'
        })
    })
});