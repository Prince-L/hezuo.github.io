/**
 * Created by lenovo on 2017/8/21.
 */
var aDiv=document.querySelectorAll('.w_list_icon');
var list=document.querySelector('.w_list');
var aSpan=document.querySelectorAll('.w-load');
var Loading=document.querySelector('.w-loading');
var num=-1;
var num2=0;
var timer=setInterval(function(){
    for(var i=0;i<aSpan.length;i++){
        aSpan[i].className='w-load';
    }
    num++;
    num2++;
    if(num==3){
        num=0;
    }
    aSpan[num].className='w-load w-color';
    if(num2==9){
        // clearInterval(timer);
        Loading.style.display='none';
        // for(var i=0;i<aDiv.length;i++){
        //     aDiv[i].setAttribute("index",i);
        //     if(i>2&&i<6){
        //         aDiv[i].style.display='block';
        //        aDiv[i].className='w_list_icon show';
        //         console.log(aDiv[i])
        //     }
        // }
    }
},150);
onscroll = function(){
    if(document.body.scrollTop==1200){
        // clearInterval(timer);
        // list.innerHTML+="<div class='w-loading'><p><span class='w-load' style='margin-left:10px;'></span>" +
        //     "<span class='w-load'></span>" +
        // " <span class='w-load'></span> </p> <div class='w-clear'></div>" +
        //     " <p class='w-cur'>加载更多</p> </div>";
        // var aSpan=document.querySelectorAll('.w-load');
        // var Loading=document.querySelector('.w-loading');
        // var num=-1;
        // var num2=0;
        // var timer=setInterval(function(){
        //     for(var i=0;i<aSpan.length;i++){
        //         aSpan[i].className='w-load';
        //     }
        //     num++;
        //     num2++;
        //     if(num==3){
        //         num=0;
        //     }
        //     aSpan[num].className='w-load w-color';
        //     if(num2==9){
        //         clearInterval(timer);
        //         Loading.style.display='none';
        //             // for(var i=0;i<aDiv.length;i++){
        //             //     aDiv[i].setAttribute("index",i);
        //             //     if(i>2&&i<6){
        //             //         aDiv[i].style.display='block';
        //             //        aDiv[i].className='w_list_icon show';
        //             //         console.log(aDiv[i])
        //             //     }
        //             // }
        //     }
        // },150);
        Loading.style.display='block';
        setTimeout(function () {
            for(var i=0;i<aDiv.length;i++){
                if(i>2&&i<6){
                    aDiv[i].className='w_list_icon show';
                    Loading.style.display='none';
                }
            }
        },1350)
    }
    if(document.body.scrollTop>1800){
        Loading.style.display='block';
        setTimeout(function () {
            for(var i=0;i<aDiv.length;i++){
                for(var i=0;i<aDiv.length;i++){
                    if(i>7&&i<10){
                        aDiv[i].className='w_list_icon show';
                       // Loading.interHTML='';
                    }
                }
            }
        },1350)
    }
    if(document.body.scrollTop>2377){
        Loading.style.display='block';
        setTimeout(function () {
            for(var i=0;i<aDiv.length;i++){
                for(var i=0;i<aDiv.length;i++){
                    if(i>9){
                        aDiv[i].className='w_list_icon show';
                        // Loading.interHTML='';
                    }
                }
            }
        },1350)
    }
}

