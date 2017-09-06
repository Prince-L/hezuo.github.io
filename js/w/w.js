/**
 * Created by lenovo on 2017/8/21.
 */
<<<<<<< HEAD


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

=======
//场地加载
var aDiv=document.querySelectorAll('.w_list_icon');
var list=document.querySelector('.w_list');
var aSpan=document.querySelectorAll('.w-load');
var Loading=document.querySelector('.w-loading');
var num=-1;
var num2=0;
var a=-1,bol=true;

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
// 北湖九号
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
>>>>>>> origin/master
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

<<<<<<< HEAD
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




=======
//地理定位

//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
}

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(113.005081,38.115586);//定义一个中心点坐标
    map.centerAndZoom(point,8);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}


initMap();//创建和初始化地图
>>>>>>> origin/master

