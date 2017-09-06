$(function(){
    var index=0;
    var time=null;
    var kai=true
    function add(){
        $('.h-plot-cont-box>.h-plot-cont-img').eq(index).fadeIn(function(){
            kai=true;
        }).siblings().hide();
    }
    function right(){
        index++;
        if(index>=$('.h-plot-cont-box>.h-plot-cont-img').length){
            index=0;
        }
        add();
    }
    function auto(){
        time=setInterval(function(){
            right();
        },3500)
    }
    auto();
    $('.h-plot-cont-right').click(function(){
        if(kai){
            kai=false;
            clearInterval(time);
            right();
            auto();
        }

    })
    $('.h-plot-cont-left').click(function(){
        if(kai){
            kai=false;
            clearInterval(time);
            index--;
            if(index<0){
                index=$('.h-plot-cont-box>.h-plot-cont-img').length-1;
            }
            add();
            auto();
        }

    })
});
$(function () {
    $('.h-plot-li').hover(function () {
        var i=$(this).index();
        $('.h-plot-li-cont').eq(i).css({'zoom':'0'})
        $('.h-plot-cont-list').eq(i).css({'zoom':'1'})
         $('.h-plot-li-cont').eq(i).slideUp('false');
        $('.h-plot-cont-list').eq(i).slideDown('slow');

    },function () {
        var i=$(this).index();
        $('.h-plot-li-cont').eq(i).css({'zoom':'1'})
        $('.h-plot-cont-list').eq(i).css({'zoom':'0'})
        $('.h-plot-li-cont').eq(i).slideDown('fast');
        $('.h-plot-cont-list').eq(i).slideUp('fast');

    })
});
$(function(){
    $('.h-plot-NoFive-li').hover(function () {
        var i=$(this).index();
        $('.h-plot-NoFive-li').eq(i).css({
            transform:'scale(1.5)',
            transition:'0.5s'
        });
        $('.h-plot-NoFive-li-cont').eq(i).css({
            background:'transparent'
        })
        $('.h-plot-NoFive-li-cont>p').eq(i).css({
            display:'none'
        })
        $('.h-plot-NoFive-li-cont>span').eq(i).css({
            display:'none'
        })
    },function () {
        var i=$(this).index();
        $('.h-plot-NoFive-li').eq(i).css({
            transform:'scale(1)',
            transition:'0.5s'
        });
        $('.h-plot-NoFive-li-cont').eq(i).css({
            background:'rgba(0,0,0,0.3)'
        })
        $('.h-plot-NoFive-li-cont>p').eq(i).css({
            display:'block'
        })
        $('.h-plot-NoFive-li-cont>span').eq(i).css({
            display:'inline-block'
        })
    })
})

