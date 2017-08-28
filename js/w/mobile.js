/**
 * Created by lenovo on 2017/8/24.
 */
//下拉
var w_select=document.querySelector('.w_select');
var w_p=w_select.querySelectorAll('p');
var w_span=w_select.querySelector('span');
var flag=true;
 w_select.onclick=function () {
    if(flag){
        w_select.style.height='250px';
        w_p[1].style.color='#FB515A';
        w_span.className='w_span2';
        flag=false;
    }else{
        w_select.style.height='50px';
        w_p[1].style.color='';
        w_span.className='w_span';
        flag=true;
    }  
};
// $('.w_select').toggle(function(){
//         w_select.style.height='250px';
//         w_p[1].style.color='#FB515A';
//         w_span.className='w_span2';
//     },function(){
//         w_select.style.height='50px';
//         w_p[1].style.color='';
//         w_span.className='w_span';
//     })

// var onOff=0;
// w_select.onclick=function(){
//     toggle([function(){
//         alert(1)
//     },function(){
//         alert(2)
//     },function(){
//         alert(3)
//     }])
// }
// function toggle(fns){
//     fns[onOff]();
//     onOff++;
//     onOff%=fns.length;
// }


