//$(function(){
//    $('.z-chunk').hover(
//        function(){
//        $(this).children('')
//    },
//        function(){
//
//    })
//})

//var z=document.querySelector('.z-chunk');
//z.onclick=function(){
//    alert(112)
//}


$(function(){

//$(".z-chunk").hover(
//        function () {
//            $(this).children('z-maskFont').css({
//                'transition': '.35s',
//                 'transform': 'translateY(20PX)'
//
//            })
//        },
//        function () {
//            $(this).children('z-maskFont').css({
//                "transition": '.35s',
//                 'transform': 'translateY(270PX)'
//            })
//        }
//    )
//    $(".z-chunk").mouseover(function(){
//         $('.z-maskFont').css({
//            'transition': '.35s',
//            'transform': 'translateY(80PX)'
//         })
//    })
//    $(".z-chunk").mouseout(function(){
//           $('.z-maskFont').css({
//                'transition': '.35s',
//                'transform': 'translateY(270PX)'
//             })
//     })
//

    $(".z-chunk").mouseover(function(){

             $(this).children('.z-maskFont').css({
                'transition': '.4s',
                'transform': 'translateY(70PX)'
             })
             $(this).children('.z-delay').css({
                 'transition': '.5s',
                 'transform': 'translateY(160PX)'
             })

             $(this).children('img').css({
                        'transition': '.8s',
                        'transform': 'scale(1.2)'
             })

        })
     $(".z-chunk").mouseout(function(){
                $(this).children('.z-maskFont').css({
                    'transition': '.4s',
                    'transform': 'translateY(270PX)'
        })
        $(".z-chunk").mouseout(function(){
                        $(this).children('.z-delay').css({
                            'transition': '.5s',
                            'transform': 'translateY(300PX)'
                })
                $(this).children('img').css({
                                        'transition': '.8s',
                                        'transform': 'scale(1)'
                })

         })
    })




})