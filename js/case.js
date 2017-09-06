




//     for(var i=0;i<item.length;i++){
//          str+='<div class="z-chunk z-left" onmouseover="a()" onmouseout="b()">'+
//             '<div class="z-maskFont">'+
//             '<p>'+item[i].title+'</p>'+
//             '<p>'+item[i].description+'</p>'+
//             '</div>'+
//             '<div class="z-delay">'+
//             '<p>'+item[i].hotel+'</p>'+
//             '<p>'+item[i].peoplenumber+'</p>'+
//             '</div>'+
//             '<img src=" '+ item[i].img +' ">'+
//             '<div class="z-mask"></div>'+
//             '</div>'
//         }
//     $('.z-padding').innerHTML=str


// var str='';
// $.ajax({
//     type:"get",
//     url:"../json/json.json",
//     success:function(data){
//         console.log(data)
//         data.item.map(function(x,i){
//             str='<div class="z-chunk z-left" onmouseover="a()" onmouseout="b()">'+
//             '<div class="z-maskFont">'+
//             '<p>'+x.title+'</p>'+
//             '<p>'+x.description+'</p>'+
//             '</div>'+
//             '<div class="z-delay">'+
//             '<p>'+x.hotel+'</p>'+
//             '<p>'+x.peoplenumber+'</p>'+
//             '</div>'+
//             '<img src=" '+ x.img +' ">'+
//             '<div class="z-mask"></div>'+
//             '</div>'+
//             $(str).appendTo('.z-padding')
//         })
//     },
//     error:function(){
//         alert("失败")
//     }
// })
//
// function red(a){
//     $.ajax({
//         type:"get",
//         url:"../json/json.json",
//         success:function(data){
//             var arr2=data.item;
//             console.log(arr2)
//             str='';
//             console.log(data)
//             for(var i=0;i<data.item.length;i++){
//                 if(data.item[i].id==a){
//                     str='<div class="z-chunk z-left" onmouseover="a()" onmouseout="b()">'+
//                          '<div class="z-maskFont">'+
//                          '<p>'+data.item.title+'</p>'+
//                          '<p>'+data.item.description+'</p>'+
//                          '</div>'+
//                          '<div class="z-delay">'+
//                          '<p>'+data.item.hotel+'</p>'+
//                          '<p>'+data.item.peoplenumber+'</p>'+
//                          '</div>'+
//                          '<img src=" '+ data.item.img +' ">'+
//                          '<div class="z-mask"></div>'+
//                          '</div>';
//                          arr2.push(data.item[i])
//                 }
//             }
//             $(str).appendTo('.z-padding')
//
//         },
//         error:function(){
//             alert("失败")
//         }
//     })
// }




//$(function(){
     function a(){
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
     }


     function b(){
        $(".z-chunk").mouseout(function(){
             $(this).children('.z-maskFont').css({
                     'transition': '.4s',
                     'transform': 'translateY(270PX)'
             })

             $(this).children('.z-delay').css({
                      'transition': '.5s',
                      'transform': 'translateY(300PX)'
             })
             $(this).children('img').css({
                      'transition': '.8s',
                      'transform': 'scale(1)'
              })
        })
     }








//})

//    var app = angular.module('app', []);
//    app.controller('ctrl',function($scope,$http){
//    $http({
//            url:'../json/json.json',
//            method:"get"
//        }).success(function(data){
//            //console.log(data)
//            $scope.data=data.item
//        })
//    $('.both').click(function(){
////        $(this).css({
////            "background":"#008489",
////             "borderRadius": "2px",
////             "color":"#fff"
////        })
//        $http({
//            url:'../json/json.json',
//            method:"get"
//        }).success(function(data){
//            //console.log(data)
//            $scope.data=data.item.both
//        })
//    })
//

//
//    $('.red').click(function(){
////                 alert('qq444')
//                $http({
//                    url:'../json/json.json',
//                    method:"get"
//                }).success(function(data){
//
//                       $scope.data=data.item.red
//
//                })
//
//         })
//        $('.pink').click(function(){
//                $http({
//                    url:'../json/json.json',
//                    method:"get"
//                }).success(function(data){
//
//                       $scope.data=data.item.pink
//
//                })
//
//         })
//          $('.white').click(function(){
//                $http({
//                      url:'../json/json.json',
//                      method:"get"
//                }).success(function(data){
//                 $scope.data=data.item.white
//                })
//
//         })
//         $('.green').click(function(){
//               $http({
//                   url:'../json/json.json',
//                   method:"get"
//               }).success(function(data){
//                  $scope.data=data.item.green
//            })
//
//         })
//
//          $('.gold').click(function(){
//              $http({
//                  url:'../json/json.json',
//                  method:"get"
//              }).success(function(data){
//                  $scope.data=data.item.gold
//            })
//
//       })
//
//
//        $('.blue').click(function(){
//            $http({
//               url:'../json/json.json',
//               method:"get"
//            }).success(function(data){
//                         $scope.data=data.item.blue
//            })
//
//       })
//})


var str='';
 <!--$.ajax({-->
     <!--type:"get",-->
     <!--url:"../json/json.json",-->
     <!--success:function(data){-->
         <!--&lt;!&ndash;console.log(data)&ndash;&gt;-->
         <!--data.item.map(function(x,i){-->
             <!--str='<div class="z-chunk z-left" onmouseover="a()" onmouseout="b()">'+-->
             <!--'<div class="z-maskFont">'+-->
             <!--'<p>'+x.title+'</p>'+-->
             <!--'<p>'+x.description+'</p>'+-->
             <!--'</div>'+-->
             <!--'<div class="z-delay">'+-->
             <!--'<p>'+x.hotel+'</p>'+-->
             <!--'<p>'+x.peoplenumber+'</p>'+-->
             <!--'</div>'+-->
             <!--'<img src=" '+ x.img +' ">'+-->
             <!--'<div class="z-mask"></div>'+-->
             <!--'</div>'+-->
             <!--$(str).appendTo('.z-padding')-->
         <!--})-->
     <!--},-->
     <!--error:function(){-->
         <!--alert("失败")-->
     <!--}-->
 <!--})-->

// function red(a){
//     $.ajax({
//         type:"get",
//         url:"../json/json.json",
//         success:function(data){
//         <!--console.log(data);-->
//             var arr2=data.item;
//                console.log(arr2)
//
//             str='';
//             arr2=[];
//
//             for(var i=0;i<data.item.length;i++){
//
//                 if(data.item[i].id==a){
//                 <!--console.log(data.item)-->
//                     str='<div class="z-chunk z-left" onmouseover="a()" onmouseout="b()">'+
//                          '<div class="z-maskFont">'+
//                          '<p>'+data.item[i].title+'</p>'+
//                          '<p>'+data.item[i].description+'</p>'+
//                          '</div>'+
//                          '<div class="z-delay">'+
//                          '<p>'+data.item[i].hotel+'</p>'+
//                          '<p>'+data.item[i].peoplenumber+'</p>'+
//                          '</div>'+
//                          '<img src=" '+ data.item[i].img +' ">'+
//                          '<div class="z-mask"></div>'+
//                          '</div>';
//                          arr2.push(data.item[i])
//                 }
//             }
//             $(str).appendTo('.z-padding')
//         },
//         error:function(){
//             alert("失败")
//         }
//     })
// }
//
// var str1='';
// function pink(a){str1='';
//     $.ajax({
//         type:"get",
//         url:"../json/json.json",
//         success:function(data){
//         <!--console.log(data);-->
//
//             var arr2=data.item;
//             for(var i=0;i<arr2[i].length;i++){
//
//                 if(data.item[i].id1==a){
//                 console.log(data.item)
//                     str='<div class="z-chunk z-left" onmouseover="a()" onmouseout="b()">'+
//                          '<div class="z-maskFont">'+
//                          '<p>'+arr2[i].title+'</p>'+
//                          '<p>'+data.item[i].description+'</p>'+
//                          '</div>'+
//                          '<div class="z-delay">'+
//                          '<p>'+arr2[i].hotel+'</p>'+
//                          '<p>'+arr2[i].peoplenumber+'</p>'+
//                          '</div>'+
//                          '<img src=" '+ arr2[i].img +' ">'+
//                          '<div class="z-mask"></div>'+
//                          '</div>';
//
//                 }
//             }
//             $(str).appendTo('.z-padding')
//         },
//         error:function(){
//             alert("失败")
//         }
//     })
// }






