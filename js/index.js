//$(function(){
//    $('.h-nav-ul li.h-nav-ul-li').click(function(){
//        $(this).find('span').addClass('select').siblings().removeClass('select');
//        var i=$(this).index();
//        $('.h-nav-ul li.h-nav-ul-li span').eq(i).css({
//            width:'100%',
//            display:'block'
//        })
//    });
//});

$(function () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

        $('.h-nav-logo>.h-phone').click(function(){
            $('.big-box-phone-b').toggleClass('toggle');
            $('.big-box-phone-b').toggleClass('');
        })
        var oBox = document.querySelector('.h-phone-cont-lun'),
            oUl = document.querySelector('.h-phone-cont-list'),
            aLi = document.querySelectorAll('.h-phone-cont-list li'),
            w = screen.width,
            iNow = 0;

        //初始化宽度 = 屏幕的宽度
        for(var i=0;i<aLi.length;i++){
            aLi[i].style.width = w + 'px';
        }

        var ts = 0, te = 0;
        oBox.addEventListener('touchstart',function (e) {
            ts = e.touches[0].clientX;
            te = 0;
        })
        oBox.addEventListener('touchmove',function (e) {
            te = e.touches[0].clientX;
//        console.log(te);
        })
        oBox.addEventListener('touchend',function () {
            console.log(ts,te);
            if(ts>te && te!=0){
                iNow++;
                if(iNow == aLi.length) iNow = aLi.length - 1;
            }
            else if(ts<te && te!=0){
                iNow--;
                if(iNow == -1) iNow = 0;
            }
            console.log(iNow);
            oUl.style.transform = 'translateX(-'+ w * iNow + 'px)';
        })
    } else {
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

<<<<<<< HEAD
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
                    '-webkit-transform': 'scale(1.2)',
                    '-mos-transform': 'scale(1.2)',
                    '-ms-transform': 'scale(1.2)',
                    '-o-transform': 'scale(1.2)',
                    'transform': 'scale(1.2)',
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
        });
        $(function(){
            $('.h-main-cont-pink,.h-main-cont-red,.h-main-cont-Gift,.h-main-cont-LOLOTA,.h-main-cont-beauty').hover(function(){
                $('.h-main-cont-img1,.h-main-cont-red-img1,.h-main-cont-Gift-img1,.h-main-cont-LOLOTA-img1,.h-main-cont-beauty-img1').css({
                    '-webkit-transform': 'translateX(10px)',
                    '-mos-transform': 'translateX(10px)',
                    '-ms-transform': 'translateX(10px)',
                    '-o-transform': 'translateX(10px)',
                    'transform': 'translateX(10px)',
                    transition:'2s',
                    opacity: '1'
                });
                $('.h-main-cont-img2,.h-main-cont-red-img2,.h-main-cont-Gift-img2,.h-main-cont-LOLOTA-img2,.h-main-cont-beauty-img2').css({
                    '-webkit-transform': 'translateX(10px)',
                    '-mos-transform': 'translateX(10px)',
                    '-ms-transform': 'translateX(10px)',
                    '-o-transform': 'translateX(10px)',
                    'transform': 'translateX(10px)',
                    transition:'2s',
                    opacity: '1'
                });
                $('.h-main-cont-pink-video,.h-main-cont-red-video,.h-main-cont-Gift-video').css({
                    '-webkit-transform': 'translateX(180px)',
                    '-mos-transform': 'translateX(180px)',
                    '-ms-transform': 'translateX(180px)',
                    '-o-transform': 'translateX(180px)',
                    'transform': 'translateX(180px)',
                    transition:'2s',
                    opacity: '1'
                })
                $('.h-main-cont-Gift-video').css({
                    '-webkit-transform': 'translateX(650px)',
                    '-mos-transform': 'translateX(650px)',
                    '-ms-transform': 'translateX(650px)',
                    '-o-transform': 'translateX(650px)',
                    'transform': 'translateX(650px)',
                    transition:'2s',
                    opacity: '1'
                })
                $('.h-main-cont-LOLOTA-video,.h-main-cont-beauty-video').css({
                    '-webkit-transform': 'translateX(550px)',
                    '-mos-transform': 'translateX(550px)',
                    '-ms-transform': 'translateX(550px)',
                    '-o-transform': 'translateX(550px)',
                    'transform': 'translateX(550px)',
                    transition:'2s',
                    opacity: '1'
                })
            });
        });
        $(function(){
            $('.h-fixed-but').click(function(){
                if($('.h-fixed-inp11').val()==''){
                    //$(":-ms-input-placeholder").css({
                    //    color:'red'
                    //})
                    //$("::-webkit-input-placeholder").css({
                    //    color:'red'
                    //})
                    //$("::-moz-placeholder").css({
                    //    color:'red'
                    //})
                    //$(":-moz-placeholder").css({
                    //    color:'red'
                    //})
                }else if($('.h-fixed-inp22').val()==''){
                    $('.h-fixed-inp22').val().css({color:'red'})
                }else if($('.h-fixed-inp11').val()!=''&&$('.h-fixed-inp22').val()!=''){
                    $('.h-fixed-but').css({
                        backgroundColor:'green'
                    })
                }
            });
            $("#top").click(function(){
                $('body,html').animate({scrollTop:0},500);
            });
            $(window).scroll(function(){
                if($(document).scrollTop()>350){
                    $('#top').show()
                }else{
                    $('#top').hide()
                }
            });
        });
//视频
        $('.h-main-cont-pink-video').click(function(){
            $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
                'display':'none'
            });
            $('.h-main-video-one').css({
                'display':'block',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-two').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-three').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-four').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-five').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
        });
        $('.h-main-cont-red-video').click(function(){
            $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
                'display':'none'
            });
            $('.h-main-video-two').css({
                'display':'block',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-one').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-three').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-four').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-five').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
        });
        $('.h-main-cont-Gift-video').click(function(){
            $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
                'display':'none'
            });
            $('.h-main-video-three').css({
                'display':'block',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-one').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-two').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-four').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-five').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
        });
        $('.h-main-cont-LOLOTA-video1').click(function(){
            $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
                'display':'none'
            });
            $('.h-main-video-four').css({
                'display':'block',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-one').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-two').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-three').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-five').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
        });
        $('.h-main-cont-beauty-video1').click(function(){
            $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
                'display':'none'
            });
            $('.h-main-video-five').css({
                'display':'block',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-one').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-two').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-three').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
            $('.h-main-video-four').css({
                'display':'none',
                position: 'relative',
                'z-index':'99999999'
            })
        });
        $('.h-main-cont-video-span').click(function(){
            var i=$(this).index();
            $('.h-main-cont,.h-nav,.h-header,.h-footer,.h-main-cont-pink').css({
                'display':'block'
            });
            $('.h-main-cont-video').eq(i).css({
                'display':'none'
            })
        });

    }
    $('.zaixian').click(function(){
        $('.h-right-one').toggleClass('pc-toggle1');
        $('.h-right-one').toggleClass('');
=======
})
$(function(){
    $('.h-cont-three1-left').mouseover(function(){
        $('.h-cont-three1-left>a>img').css({
            '-webkit-transform': 'scale(1.2)',
            '-mos-transform': 'scale(1.2)',
            '-ms-transform': 'scale(1.2)',
            '-o-transform': 'scale(1.2)',
            'transform': 'scale(1.2)',
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
});
$(function(){
    $('.h-main-cont-pink,.h-main-cont-red,.h-main-cont-Gift,.h-main-cont-LOLOTA,.h-main-cont-beauty').hover(function(){
        $('.h-main-cont-img1,.h-main-cont-red-img1,.h-main-cont-Gift-img1,.h-main-cont-LOLOTA-img1,.h-main-cont-beauty-img1').css({
            '-webkit-transform': 'translateX(10px)',
            '-mos-transform': 'translateX(10px)',
            '-ms-transform': 'translateX(10px)',
            '-o-transform': 'translateX(10px)',
            'transform': 'translateX(10px)',
            transition:'2s',
            opacity: '1'
        });
        $('.h-main-cont-img2,.h-main-cont-red-img2,.h-main-cont-Gift-img2,.h-main-cont-LOLOTA-img2,.h-main-cont-beauty-img2').css({
            '-webkit-transform': 'translateX(10px)',
            '-mos-transform': 'translateX(10px)',
            '-ms-transform': 'translateX(10px)',
            '-o-transform': 'translateX(10px)',
            'transform': 'translateX(10px)',
            transition:'2s',
            opacity: '1'
        });
        $('.h-main-cont-pink-video,.h-main-cont-red-video,.h-main-cont-Gift-video').css({
            '-webkit-transform': 'translateX(180px)',
            '-mos-transform': 'translateX(180px)',
            '-ms-transform': 'translateX(180px)',
            '-o-transform': 'translateX(180px)',
            'transform': 'translateX(180px)',
            transition:'2s',
            opacity: '1'
        })
        $('.h-main-cont-Gift-video').css({
            '-webkit-transform': 'translateX(650px)',
            '-mos-transform': 'translateX(650px)',
            '-ms-transform': 'translateX(650px)',
            '-o-transform': 'translateX(650px)',
            'transform': 'translateX(650px)',
            transition:'2s',
            opacity: '1'
        })
        $('.h-main-cont-LOLOTA-video,.h-main-cont-beauty-video').css({
            '-webkit-transform': 'translateX(550px)',
            '-mos-transform': 'translateX(550px)',
            '-ms-transform': 'translateX(550px)',
            '-o-transform': 'translateX(550px)',
            'transform': 'translateX(550px)',
            transition:'2s',
            opacity: '1'
        })
    });
});
$(function(){
    $('.h-fixed-but').click(function(){
        if($('.h-fixed-inp11').val()==''){
            //$(":-ms-input-placeholder").css({
            //    color:'red'
            //})
            //$("::-webkit-input-placeholder").css({
            //    color:'red'
            //})
            //$("::-moz-placeholder").css({
            //    color:'red'
            //})
            //$(":-moz-placeholder").css({
            //    color:'red'
            //})
        }else if($('.h-fixed-inp22').val()==''){
            $('.h-fixed-inp22').val().css({color:'red'})
        }else if($('.h-fixed-inp11').val()!=''&&$('.h-fixed-inp22').val()!=''){
            $('.h-fixed-but').css({
                backgroundColor:'green'
            })
        }
    });
    $("#top").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });
    $(window).scroll(function(){
        if($(document).scrollTop()>350){
            $('#top').show()
        }else{
            $('#top').hide()
        }
    });
});
//视频
$('.h-main-cont-pink-video').click(function(){
    $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
        'display':'none'
    });
    $('.h-main-video-one').css({
        'display':'block',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-two').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-three').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-four').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-five').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
});
$('.h-main-cont-red-video').click(function(){
    $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
        'display':'none'
    });
    $('.h-main-video-two').css({
        'display':'block',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-one').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-three').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-four').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-five').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
});
$('.h-main-cont-Gift-video').click(function(){
    $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
        'display':'none'
    });
    $('.h-main-video-three').css({
        'display':'block',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-one').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-two').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-four').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-five').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
});
$('.h-main-cont-LOLOTA-video1').click(function(){
    $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
        'display':'none'
    });
    $('.h-main-video-four').css({
        'display':'block',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-one').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-two').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-three').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-five').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
});
$('.h-main-cont-beauty-video1').click(function(){
    $('.h-main-cont,.h-nav,.h-header,.h-footer').css({
        'display':'none'
    });
    $('.h-main-video-five').css({
        'display':'block',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-one').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-two').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-three').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
    $('.h-main-video-four').css({
        'display':'none',
        position: 'relative',
        'z-index':'99999999'
    })
});
$('.h-main-cont-video-span').click(function(){
    var i=$(this).index();
    $('.h-main-cont,.h-nav,.h-header,.h-footer,.h-main-cont-pink').css({
        'display':'block'
    });
    $('.h-main-cont-video').eq(i).css({
        'display':'none'
>>>>>>> origin/master
    })
});