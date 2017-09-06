/**
 * Created by lenovo on 2017/8/21.
 */


if ((window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //场地加载
    var box=document.querySelector('.w-box');
    box.style.height='0';
    var aDiv=document.querySelectorAll('.w_list_icon2');
    var list=document.querySelector('.w_list2');
    var aSpan=document.querySelectorAll('.w-load2');
    var Loading=document.querySelector('.w-loading2');
    var num=-1;
    var num2=0;
    var a=-1,bol=true;
    var arr=[];
    aDiv[0].className='w_list_icon w_list_icon2 show2';
    aDiv[1].className='w_list_icon w_list_icon2 show2';
    aDiv[2].className='w_list_icon w_list_icon2 show2';
    var type=document.querySelector('.w_con_list_type2');
    var type_span=type.querySelectorAll('span');
    var page=document.querySelector('.w_con_list_page2');
    var page_span=page.querySelectorAll('span');
    for(var j=0;j<type_span.length;j++){
        type_span[j].index=j;
        if(j==0){
            type_span[j].onclick=function(){
                for(var i=0;i<type_span.length;i++){
                    type_span[i].className='';
                    aDiv[i].className='w_list_icon w_list_icon2';
                }
                this.className='w-active';
                for(var k=0;k<aDiv.length;k++){
                    aDiv[0].className='w_list_icon w_list_icon2 show2';
                    aDiv[1].className='w_list_icon w_list_icon2 show2';
                    aDiv[2].className='w_list_icon w_list_icon2 show2';
                    bol=true;
                }
            }
        }else{
            type_span[j].onclick=function(){
                for(var i=0;i<type_span.length;i++){
                    type_span[i].className='';
                    aDiv[i].className='w_list_icon w_list_icon2';
                }
                this.className='w-active';
                for(var k=0;k<aDiv.length;k++){
                    var b=this.index;
                    if(aDiv[k].getAttribute('index')==b){
                        aDiv[k].className='w_list_icon w_list_icon2 show2';
                        bol=false;
                    }else{
                        aDiv[k].className='w_list_icon w_list_icon2';
                    }
                }
            }
        }

    }
    for(var j=0;j<page_span.length;j++){
        page_span[j].index=j;
        if(j==0){
            page_span[j].onclick=function(){
                for(var i=0;i<page_span.length;i++){
                    page_span[i].className='';
                    //aDiv[i].className='w_list_icon';
                }
                this.className='w-active';
                // for(var k=0;k<aDiv.length;k++){
                //     aDiv[0].className='w_list_icon show';
                //     aDiv[1].className='w_list_icon show';
                //     aDiv[2].className='w_list_icon show';
                bol=true;
                // }
            }
        }else{
            page_span[j].onclick=function(){
                for(var i=0;i<page_span.length;i++){
                    page_span[i].className='';
                    //aDiv[i].className='w_list_icon';
                }
                this.className='w-active';
                // for(var k=0;k<aDiv.length;k++){
                //     var b=this.index;
                //     if(aDiv[k].getAttribute('index')==3){
                //         arr.push(aDiv[k]);
                //         aDiv[k].remove();
                //     }
                //     //list.insertBefore(arr[0],Loading);
                //     //console.log(arr[0])
                // }
                bol=true;
            }
        }

    }
    onscroll = function(e){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(document.body.scrollHeight - (innerHeight + scrollTop) < 200){
            if(bol){
                bol=false;
                a++;
                var b=a;
                Loading.style.display='block';
                setTimeout(function () {
                    for(var i=0;i<aDiv.length;i++){
                        var arr=[i>2&&i<6,i>5&&i<9,i>8];
                        if(a==2){
                            a=2;
                        }
                        if(arr[a]){
                            aDiv[i].className='w_list_icon w_list_icon2 show2';
                            bol=true;
                            Loading.style.display='none';
                        }
                    }
                },2000);
                var show=document.querySelectorAll('.show2');
                var w_cur=document.querySelector('.w-cur2');
                if(show.length==aDiv.length){
                    for(var i=0;i<aSpan.length;i++){
                        aSpan[i].outerHTML='';
                        w_cur.innerHTML='没有更多数据了';
                        setTimeout(function () {
                            Loading.style.display='none';
                        },1000)
                    }
                }
            }
        }
    };
    var timer=setInterval(function(){
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].className='w-load w-load2';
        }
        num++;
        num2++;
        if(num==3){
            num=0;
        }
        aSpan[num].className='w-load w-load2 w-color';
    },150);
}else{
    //场地加载
    var aDiv=document.querySelectorAll('.w_list_icon');
    var list=document.querySelector('.w_list');
    var aSpan=document.querySelectorAll('.w-load');
    var Loading=document.querySelector('.w-loading');
    var num=-1;
    var num2=0;
    var a=-1,bol=true;
    var arr=[];
    var type=document.querySelector('.w_con_list_type');
    var type_span=type.querySelectorAll('span');
    var page=document.querySelector('.w_con_list_page');
    var page_span=page.querySelectorAll('span');
    aDiv[0].className='w_list_icon show';
    aDiv[1].className='w_list_icon show';
    aDiv[2].className='w_list_icon show';
    for(var j=0;j<type_span.length;j++){
        type_span[j].index=j;
        if(j==0){
            type_span[j].onclick=function(){
                for(var i=0;i<type_span.length;i++){
                    type_span[i].className='';
                    aDiv[i].className='w_list_icon';
                }
                this.className='w-active';
                for(var k=0;k<aDiv.length;k++){
                    aDiv[0].className='w_list_icon show';
                    aDiv[1].className='w_list_icon show';
                    aDiv[2].className='w_list_icon show';
                    bol=true;
                }
            }
        }else{
            type_span[j].onclick=function(){
                for(var i=0;i<type_span.length;i++){
                    type_span[i].className='';
                    aDiv[i].className='w_list_icon';
                }
                this.className='w-active';
                for(var k=0;k<aDiv.length;k++){
                    var b=this.index;
                    if(aDiv[k].getAttribute('index')==b){
                        aDiv[k].className='w_list_icon show';
                        bol=false;
                    }else{
                        aDiv[k].className='w_list_icon';
                    }
                }
            }
        }

    }
    for(var j=0;j<page_span.length;j++){
        page_span[j].index=j;
        if(j==0){
            page_span[j].onclick=function(){
                for(var i=0;i<page_span.length;i++){
                    page_span[i].className='';
                    //aDiv[i].className='w_list_icon';
                }
                this.className='w-active';
                // for(var k=0;k<aDiv.length;k++){
                //     aDiv[0].className='w_list_icon show';
                //     aDiv[1].className='w_list_icon show';
                //     aDiv[2].className='w_list_icon show';
                bol=true;
                // }
            }
        }else{
            page_span[j].onclick=function(){
                for(var i=0;i<page_span.length;i++){
                    page_span[i].className='';
                    //aDiv[i].className='w_list_icon';
                }
                this.className='w-active';
                // for(var k=0;k<aDiv.length;k++){
                //     var b=this.index;
                //     if(aDiv[k].getAttribute('index')==3){
                //         arr.push(aDiv[k]);
                //         aDiv[k].remove();
                //     }
                //     //list.insertBefore(arr[0],Loading);
                //     //console.log(arr[0])
                // }
                bol=true;
            }
        }

    }
    onscroll = function(e){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(document.body.scrollHeight - (innerHeight + scrollTop) < 200){
            if(bol){
                bol=false;
                a++;
                var b=a;
                Loading.style.display='block';
                setTimeout(function () {
                    for(var i=0;i<aDiv.length;i++){
                        var arr=[i>2&&i<6,i>5&&i<9,i>8];
                        if(a==2){
                            a=2;
                        }
                        if(arr[a]){
                            aDiv[i].className='w_list_icon show';
                            bol=true;
                            Loading.style.display='none';
                        }
                    }
                },2000);
                var show=document.querySelectorAll('.show');
                var w_cur=document.querySelector('.w-cur');
                if(show.length==aDiv.length){
                    for(var i=0;i<aSpan.length;i++){
                        aSpan[i].outerHTML='';
                        w_cur.innerHTML='没有更多数据了';
                        setTimeout(function () {
                            Loading.style.display='none';
                        },1000)
                    }
                }
            }
        }
    };
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
    },150);
}

// 北湖九号
// var input=document.querySelectorAll('.w_jiuhao_input');
// var jiuhaospan=document.querySelectorAll('.w_jiuhao_span');
// for(var i=0;i<input.length;i++){
//     input[i].index=i;
//     input[i].onfocus=function () {
//         jiuhaospan[this.index].style.background='black';
//     };
//     input[i].onblur=function () {
//         jiuhaospan[this.index].style.background='lavender';
//     };
// }





