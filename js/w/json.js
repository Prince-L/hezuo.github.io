/**
 * Created by lenovo on 2017/8/30.
 */
var arr=[];
// var num=0;
var flag=true;
var Loading=document.querySelector('.w-loading');
var aSpan=document.querySelectorAll('.w-load');
var num=-1;
var num2=0;
var w=0;
$.ajax({
 	url:"w/jiazai.json",
 	type:'GET',
 	success:function(data){
        console.log(data)
        var v=data;
        $('.b').click(function (v) {
            console.log(v)
            data.forEach(function (item,index) {
                // alert();
                console.log(item)
            })
        });
        var a=data.splice(0,3);
        var b=data.splice(0,3);
        var c=data.splice(0,3);
        var d=data.splice(0,3);
        arr=[a,b,c,d];
        //console.log(arr);
        arr[0].forEach(function(item,index,array){
            $('.w-div').append('<a href='+item.url+'>' +
                '<div class="w_list_icon">' +
                '<div class="img"><img src='+item.img+' alt=""></div>' +
                '<div class="w_list_icon_right index">' +
                '<p><b class="w_b">'+item.title+'</b>   <span><b>'+item.age+'</b>'+item.span+'</span></p>' +
                '<p>'+item.p+'</p>' +
                '<p>'+item.h2+'</p>' +
                '<p>'+item.d+'</p>' +
                '<p><span class="red">'+item.red+'</span><span class="pink">'+item.pink+'</span> </p>' +
                '<p>'+item.age+'+'+item.span+'</p>' +
                '<p>'+item.d+'</p>' +
                '</div>' +
                '<div class="w-clear"></div>' +
                '</div></a>');
        })
        onscroll = function(e){
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(document.body.scrollHeight - (innerHeight + scrollTop) < 200){
                if(flag){
                    flag=false;
                    Loading.style.display='block';
                    w++;
                    if(w<4){
                        setTimeout(function () {
                            Loading.style.display='block';
                            arr[w].forEach(function(item,index,array){
                                $('.w-div').append('<a href='+item.url+'>' +
                                    '<div class="w_list_icon">' +
                                    '<div class="img"><img src='+item.img+' alt=""></div>' +
                                    '<div class="w_list_icon_right index">' +
                                    '<p><b class="w_b">'+item.title+'</b>   <span><b>'+item.age+'</b>'+item.span+'</span></p>' +
                                    '<p>'+item.p+'</p>' +
                                    '<p>'+item.h2+'</p>' +
                                    '<p>'+item.d+'</p>' +
                                    '<p><span class="red">'+item.red+'</span><span class="blue">'+item.blue+'</span><span class="pink">'+item.pink+'</span> </p>' +
                                    '<p>'+item.age+'+'+item.span+'</p>' +
                                    '<p>'+item.d+'</p>' +
                                    '</div>' +
                                    '<div class="w-clear"></div>' +
                                    '</div></a>');
                                Loading.style.display='none';
                                flag=true;
                            });
                        },2000)
                    }else{
                        var show=document.querySelectorAll('.show');
                        var w_cur=document.querySelector('.w-cur');

                            for(var i=0;i<aSpan.length;i++){
                                aSpan[i].outerHTML='';
                                w_cur.innerHTML='没有更多数据了';
                                setTimeout(function () {
                                    Loading.style.display='none';
                                },1000)
                            }

                        return
                    }
                }



            }
        };
        var timer=setInterval(function(){
            for(var i=0;i<aSpan.length;i++){
                aSpan[i].className='w-load';
            }
            num++;
            if(num==3){
                num=0;
            }
            aSpan[num].className='w-load w-color';
        },150);
 	},
 	error:function(){
 		alert('1')
 	}
 });
