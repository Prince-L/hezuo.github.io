/**
 * Created by lenovo on 2017/8/30.
 */
//input
var input=document.querySelectorAll('.w_jiuhao_input');
var jiuhaospan=document.querySelectorAll('.w_jiuhao_span');
for(var i=0;i<input.length;i++){
    input[i].index=i;
    input[i].onfocus=function () {
        jiuhaospan[this.index].style.background='black';
    };
    input[i].onblur=function () {
        jiuhaospan[this.index].style.background='lavender';
    };
}
//吸顶条
var w_jiuhao_find=document.querySelector('.w_jiuhao_find');
var t = w_jiuhao_find.scrollTop;
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop<400){
        w_jiuhao_find.style.position = 'absolute';
    }
    if(scrollTop>400) {
        w_jiuhao_find.style.position = 'fixed';
        w_jiuhao_find.className='w_jiuhao_find';
    }
    if(scrollTop>3000){
        w_jiuhao_find.style.position = 'absolute';
        w_jiuhao_find.className='w_jiuhao_find2';
        //w_jiuhao_find.style.bottom = '625px';
    }
}