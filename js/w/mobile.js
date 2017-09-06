/**
 * Created by lenovo on 2017/8/24.
 */
//下拉
<<<<<<< HEAD

var w_select=document.querySelector('.w_select');
var w_pp=document.querySelector('.w_pp');
var w_span=w_pp.querySelector('span');
var w_div=w_select.querySelector('div');
var w_p=w_div.querySelectorAll('p');
var flag=true;
var aDiv=document.querySelectorAll('.w_list_icon');
// w_select.onclick=function() {
//     if(flag){
//         // flag=false;
//         w_div.style.display='block';
//         for(var i=0;i<w_p.length;i++){
//             w_p[i].index=i;
//             w_p[i].onclick=function () {
//                 for(var j=0;j<w_p.length;j++){
//                     w_p[j].style.color='';
//                 }
//                 this.style.color='#FB515A';
//             }
//         }
//     }
//
// }





w_select.onclick=function () {
    if(flag){
        w_div.style.display='block';
        w_span.className='w_span2';
            for(var j=0;j< w_p.length;j++) {
                //alert()
                w_p[j].index = j;
                if (j == 0) {
                    w_p[j].onclick = function () {
                        for (var i = 0; i <  w_p.length; i++) {
                            w_p[i].style.color= '';
                            aDiv[i].className = 'w_list_icon';
                        }
                        w_pp.innerHTML=w_p[this.index].innerHTML+'<span class="w_span"></span>';
                        w_p[this.index].style.color='#FB515A';
                        for (var k = 0; k < aDiv.length; k++) {
                            aDiv[0].className = 'w_list_icon show';
                            aDiv[1].className = 'w_list_icon show';
                            aDiv[2].className = 'w_list_icon show';
                            bol = true;
                        }
                    }
                }
                else {
                    w_p[j].onclick = function () {
                        for (var i = 0; i <  w_p.length; i++) {
                            w_p[i].style.color= '';
                            aDiv[i].className = 'w_list_icon';
                        }
                        // console.log(this)
                        w_pp.innerHTML=w_p[this.index].innerHTML+'<span class="w_span"></span>';
                        w_p[this.index].style.color='#FB515A';
                        for (var k = 0; k < aDiv.length; k++) {
                            var b = this.index;
                            if (aDiv[k].getAttribute('index') == b) {
                                aDiv[k].className = 'w_list_icon show';

                                bol = false;
                            } else {
                                aDiv[k].className = 'w_list_icon';
                            }
                        }
                    }
                }
            }
        flag=false;
    }else{
        w_div.style.display='none';
        //w_p[1].style.color='';
        w_span.className='w_span';
        flag=true;
    }
};



=======
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
>>>>>>> origin/master
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

<<<<<<< HEAD
// //吸顶条
// var w_jiuhao_find=document.querySelector('.w_jiuhao_find');
// var t = w_jiuhao_find.scrollTop;
// onscroll = function(){
//     var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//     if(scrollTop<400){
//         w_jiuhao_find.style.position = 'absolute';
//     }
//     if(scrollTop>400) {
//         w_jiuhao_find.style.position = 'fixed';
//         w_jiuhao_find.className='w_jiuhao_find';
//     }
//     if(scrollTop>3000){
//         w_jiuhao_find.style.position = 'absolute';
//         w_jiuhao_find.className='w_jiuhao_find2';
//         //w_jiuhao_find.style.bottom = '625px';
//     }
// }
=======

>>>>>>> origin/master
