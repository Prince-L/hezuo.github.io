/**
 * Created by gaoxiru on 2017/8/23.
 */
$(".g-choose-list").on('click','li a',function() {
    $(this).parents('ul').find('.active').removeClass('active');
    $(this).parent().addClass('active');
    // $(".loader").html(loader);
    // sortMes()
});


// var jso = [
//     {id:1,url:'../../img/g-img/hun1.jpg',
//         title:'奥运冠军CP秦凯&amp;何姿大婚，我们准备好了',
//         sign:'婚礼摄影',desc:'6.25@西安，完美浪漫等待开启~'
//     },
//     {id:1,url:'../../img/g-img/hun2.jpg',
//         title:'最适合拍婚纱照的北京胡同',
//         sign:'婚礼摄影',
//         desc:'拍一组老北京味道的婚纱照吧'
//     },
//     {id:1,url:'../../img/g-img/hun3.jpg',
//         title:'婚博会群面影楼，我为什么最后一家都没选？',
//         sign:'婚礼摄影',
//         desc:'明白自己想要的是什么，这才是最重要的！'
//     },
//     {id:1,url:'../../img/g-img/hun4.jpg',
//         title:'影楼和摄影工作室的6大区别',
//         sign:'婚礼摄影',
//         desc:'根据需求选择最重要'
//     },
//     {id:1,url:'../../img/g-img/hun5.jpg',
//         title:'7个小准备助你拍出明星级婚礼照片！',
//         sign:'婚礼摄影',
//         desc:'简单的小准备，有效提升婚礼照片品质~'
//     },
//     {id:1,url:'../../img/g-img/hun6.jpg',
//         title:'一生难忘的主角时刻！婚礼摄像怎么选？',
//         sign:'婚礼摄影',
//         desc:'好的婚礼摄像，可以完美的重现婚礼当天的气氛，留下最难忘的回忆！'
//     },
//     {id:1,url:'../../img/g-img/hun7.jpg',
//         title:'婚礼照片告别遗憾，50个婚礼瞬间拍摄清单',
//         sign:'婚礼摄影',
//         desc:'掌握这几点秘诀，让你的婚礼照片难忘终生'
//     },
//     {id:1,url:'../../img/g-img/hun8.jpg',
//         title:'如何找到靠谱的婚礼摄影师？',
//         sign:'婚礼摄影',
//         desc:'美姐为此给大家总结了：与婚礼摄影师见面，需要了解的五大关键问题。'
//     },
//     {id:2,url:'../../img/g-img/mai1.jpg',
//         title:'你合适什么婚纱？',
//         sign:'买买买',
//         desc:'婚纱还是得选一款适合自己的，扬长避短很重要！'
//     },
//     {id:2,url:'../../img/g-img/mai2.jpg',
//         title:'新郎领带领结怎么弄',
//         sign:'买买买',
//         desc:'领带怎么系？领结方巾怎么配？这些技能你都get到了吗？'
//     },
//     {id:2,url:'../../img/g-img/mai3.jpg',
//         title:'5步理清婚鞋选购考虑因素',
//         sign:'买买买',
//         desc:'今天美姐给大家梳理一些婚鞋购买干货，更好地帮大家划分婚鞋选购的优先考虑因素，避免来回纠结。'
//     },
//     {id:2,url:'../../img/g-img/mai4.jpg',
//         title:'挑头纱先看脸型，教你四步选头纱！',
//         sign:'买买买',
//         desc:'挑选婚纱时，新娘要根据自己的身材来定款式。挑头纱时也是如此，姑娘们一定要先看自己的脸型哦~'
//     },
//     {id:2,url:'../../img/g-img/mai5.jpg',
//         title:'婚纱里面穿什么？',
//         sign:'买买买',
//         desc:'我们为你准备了一份实现最佳婚纱穿着效果的购物清单！'
//     },
//     {id:3,url:'../../img/g-img/xin1.jpg',
//         title:'夏日户外婚礼造型必备小笔记',
//         sign:'完美新人',
//         desc:'专家支招，助你美美的夏日户外婚礼~'
//     },
//     {id:3,url:'../../img/g-img/xin2.jpg',
//         title:'如何防晒才能做美美哒新娘',
//         sign:'完美新人',
//         desc:'五大防晒误区，千万别掉坑里！'
//     },
//     {id:3,url:'../../img/g-img/xin3.jpg',
//         title:'怀孕妈妈如何安心做新娘？',
//         sign:'完美新人',
//         desc:'孕妈也能穿出别样新娘范儿~'
//     },
//     {id:3,url:'../../img/g-img/xin4.jpg',
//         title:'选好化妆师很重要！',
//         sign:'完美新人',
//         desc:'选好化妆师时，你需要做好十个准备'
//     },
//     {id:3,url:'../../img/g-img/xin5.jpg',
//         title:'刘诗诗那件裙褂只值20万？你逗谁呢！',
//         sign:'完美新人',
//         desc:'对于大部分新人来说，中式裙褂只能感受到浓浓的喜庆，但真正懂得选购和正确穿着的却少之又少。'
//     },
//     {id:3,url:'../../img/g-img/xin6.jpg',
//         title:'男神除了高颜值以外，着装品味更重要！',
//         sign:'完美新人',
//         desc:'对于新娘们来说，该如何挑选西服，让老公在婚礼上彰显自己的高颜值呢？'
//     },
//     {id:3,url:'../../img/g-img/xin7.jpg',
//         title:'教你显瘦的套路！',
//         sign:'完美新人',
//         desc:'微胖MM如何在婚礼当天做个美新娘？你只需要玩些小"心机"'
//     },
//     {id:4,url:'../../img/g-img/chuang1.jpg',
//         title:'夏日水果甜品台，水润润+透心凉+很健康！',
//         sign:'创意灵感',
//         desc:'这些水果甜品台，看起来都好好吃！'
//     },
//     {id:4,url:'../../img/g-img/chuang2.jpg',
//         title:'绿＋金，尊贵圣洁的圣帕特里克风格',
//         sign:'创意灵感',
//         desc:'绿金色可谓当今的婚礼潮流用色呢！'
//     },
//     {id:4,url:'../../img/g-img/chuang3.jpg',
//         title:'婚礼选择竹节椅，这钱花得值不值？',
//         sign:'创意灵感',
//         desc:'选一把适合户外草坪的椅子并加以装饰，其实很重要'
//     },
//     {id:4,url:'../../img/g-img/chuang4.jpg',
//         title:'这场游乐园婚礼的入场券，竟然藏在旋转木马',
//         sign:'创意灵感',
//         desc:'想过在游乐场中举行一场婚礼吗？'
//     },
//     {id:4,url:'../../img/g-img/chuang5.jpg',
//         title:'复刻戏剧桥段的话剧婚礼',
//         sign:'创意灵感',
//         desc:'两位话剧演员把自己的婚礼变成一场有趣的话剧三幕剧'
//     },
//     {id:4,url:'../../img/g-img/chuang6.jpg',
//         title:'一场全体湿身的海中婚礼',
//         sign:'创意灵感',
//         desc:'婚礼其实能在海中举行，不是海边，而是海里！'
//     },
//     {id:4,url:'../../img/g-img/chuang7.jpg',
//         title:'用马卡龙堆成的甜品台，是童话婚礼终极武器',
//         sign:'创意灵感',
//         desc:'相较于婚宴正餐，甜品台的体量较小却尤其能体现婚礼调性，一个和婚礼主题相符的甜品台往往能起到点睛的效果。'
//     },
//     {id:4,url:'../../img/g-img/chuang8.jpg',
//         title:'你的梦想婚礼原来可以发生在Airbnb',
//         sign:'创意灵感',
//         desc:'国外一对新人Harmony和David,在一个林中Airbnb举办了一场温馨幸福的小婚礼'
//     },
//     {id:4,url:'../../img/g-img/chuang9.jpg',
//         title:'跳上校车结婚去！把婚礼变成一场校园回忆杀',
//         sign:'创意灵感',
//         desc:'回到缘起的校园，办一场超有趣的校园婚礼，原来可以那么美好~'
//     },
//     {id:4,url:'../../img/g-img/chuang10.jpg',
//         title:'终极版森系婚礼就该在1亿年造就的这里举行',
//         sign:'创意灵感',
//         desc:'把森系婚礼推到极致，他们不仅跑到了国家的森林里举办婚礼，而且还办成了一场温情满满的家族派对'
//     },
//     {id:5,url:'../../img/g-img/yi1.jpg',
//         title:'接亲游戏15式',
//         sign:'仪式流程',
//         desc:'伴郎团，颤抖起来吧！'
//     },
//     {id:5,url:'../../img/g-img/yi2.jpg',
//         title:'35首私藏已久的英文婚礼歌曲',
//         sign:'仪式流程',
//         desc:'最适合婚礼的35首感人婚礼英文歌曲'
//     },
//     {id:5,url:'../../img/g-img/yi3.jpg',
//         title:'大婚前一天 | 婚礼梦之队的分工协作',
//         sign:'仪式流程',
//         desc:'一场婚礼的完美进行，少不了新人亲友团的配合'
//     },
//     {id:5,url:'../../img/g-img/yi4.jpg',
//         title:'婚礼前夜必备随身物品list，少一件都不',
//         sign:'仪式流程',
//         desc:'大婚前一天去酒店，包里都该装什么？'
//     },
//     {id:5,url:'../../img/g-img/yi5.jpg',
//         title:'完美一天|婚礼当天时间流程详解',
//         sign:'仪式流程',
//         desc:'婚礼当天从早到晚到底都在干些什么？按照时间安排来梳理，告别蒙圈和意外，享受完美有序的婚礼！'
//     },
//     {id:5,url:'../../img/g-img/yi6.jpg',
//         title:'新人必读|接亲还这么多讲究！',
//         sign:'仪式流程',
//         desc:'接亲的这五个讲究，你知道吗？'
//     },
//     {id:5,url:'../../img/g-img/yi7.jpg',
//         title:'婚礼音乐你选对了么？',
//         sign:'仪式流程',
//         desc:'一场成功的婚礼，少不了背景音乐的烘托，好的音乐会让在场来宾产生共鸣，也会让新人更好融入自己的婚礼'
//     },
//     {id:6,url:'../../img/g-img/ce1.jpg',
//         title:'秦凯何姿放爱情电力，表情包变闪光弹！',
//         sign:'婚礼筹划',
//         desc:' 附绝密婚纱照大曝光！'
//     },
//     {id:6,url:'../../img/g-img/ce2.jpg',
//         title:'2K到10W的甜品台怎么选？',
//         sign:'婚礼筹划',
//         desc:'不同价位的甜品台，差距到底在哪里？！'
//     },
//     {id:6,url:'../../img/g-img/ce3.jpg',
//         title:'夏日户外婚礼伴手礼清单',
//         sign:'婚礼筹划',
//         desc:'送上最贴心的夏日户外婚礼伴手礼'
//     },
//     {id:6,url:'../../img/g-img/ce4.jpg',
//         title:'你是否需要请一位婚礼策划师？',
//         sign:'婚礼筹划',
//         desc:'请婚礼策划师前，问自己这5个问题'
//     },
//     {id:6,url:'../../img/g-img/ce5.jpg',
//         title:'给你"婚礼可以晚上办"的5个理由',
//         sign:'婚礼筹划',
//         desc:'抛开旧观念，扪心自问你是否更愿意晚上办婚礼呢？'
//     },
//     {id:6,url:'../../img/g-img/ce6.jpg',
//         title:'户外婚礼避雨支招',
//         sign:'婚礼筹划',
//         desc:'当婚礼有可能遇到雨天，好准备就一场美丽的雨中婚礼~'
//     },
//     {id:6,url:'../../img/g-img/ce7.jpg',
//         title:'3步选择完美婚期',
//         sign:'婚礼筹划',
//         desc:'跟着本文选择您的完美婚期，还有2017年吉日壁纸送出！'
//     },
//     {id:6,url:'../../img/g-img/ce8.jpg',
//         title:'全球最浪漫8大婚礼海岛',
//         sign:'婚礼筹划',
//         desc:'除了巴厘岛、三亚，还有很多绝美婚礼小岛等你去发现~'
//     },
//     {id:6,url:'../../img/g-img/ce9.jpg',
//         title:'简单3步安排来宾',
//         sign:'婚礼筹划',
//         desc:'一场完美的婚礼，从安排好来宾开始。'
//     },
//     {id:6,url:'../../img/g-img/ce10.jpg',
//         title:'选策划师要聊什么？',
//         sign:'婚礼筹划',
//         desc:'初次见面，聊太多爱情故事婚礼想法真的没有用！'
//     },
//     {id:6,url:'../../img/g-img/ce11.jpg',
//         title:'别再感叹婚礼有遗憾，明明彩排就可以避免',
//         sign:'婚礼筹划',
//         desc:'提前彩排可以预演熟悉婚礼环节，查漏补缺，避免婚礼当天的紧张，是必不可少的环节。'
//     }
// ];















// var str="";
// $.ajax({
//     type:"get",
//     url:"json/json.json",
//     success:function(data){
//         console.log(data)
//         // data.item.map(function(x,i){
//         //     str='<div class="z-chunk z-left" onmouseover="a()" onmouseout="b()">'+
//         //         '<div class="z-maskFont">'+
//         //         '<p>'+x.title+'</p>'+
//         //         '<p>'+x.description+'</p>'+
//         //         '</div>'+
//         //         '<div class="z-delay">'+
//         //         '<p>'+x.hotel+'</p>'+
//         //         '<p>'+x.peoplenumber+'</p>'+
//         //         '</div>'+
//         //         '<img src=" '+ x.img +' ">'+
//         //         '<div class="z-mask"></div>'+
//         //         '</div>'+
//         //         $(str).appendTo('.z-padding')
//         // })
//     },
//     error:function(){
//         alert("失败")
//     }
// });
//
// // var gArticleLists=document.getElementById('g-article-lists');
// // ga(1);
// // function ga(a){
// //     str = '';//重置字符串
// //     for(var i=0;i<listTab.length;i++){
// //         console.log(listTab);
// //         if(listTab[i].id == a){
// //             str +='<li class="g-article-cell">'+
// //                 '<a href="javascript:" target="_blank">'+
// //                 '<img src='+listTab[i].url+' alt="" class="g-article-img">'+
// //                 '<div class="g-article-text">'+
// //                 '<p class="g-article-title">'+listTab[i].title+'</p>'+
// //                 '<div class="g-article-sign clear">'+
// //                 ' <span>'+listTab[i].sign+'</span>'+
// //                 '</div>'+
// //                 '<p class="g-article-desc">'+listTab[i].desc+'</p>'+
// //                 '</div>'+
// //                 '</a>'+
// //                 '</li>'; //符合条件的拼接
// //         }
// //     }
// //     gArticleLists.innerHTML = str//写入页面
// }




var gArticleLists=document.getElementById('g-article-lists');
var str="";
$.ajax({
    type:"get",
    url:"../../json/json.json",
    success:function(data){
//            console.log(data);
        data.listTab.map(function(x,i){
            str +='<li class="g-article-cell">'+
                '<a href="javascript:" target="_blank">'+
                '<img src='+x.url+' alt="" class="g-article-img">'+
                '<div class="g-article-text">'+
                '<p class="g-article-title">'+x.title+'</p>'+
                '<div class="g-article-sign clear">'+
                ' <span>'+x.sign+'</span>'+
                '</div>'+
                '<p class="g-article-desc">'+x.desc+'</p>'+
                '</div>'+
                '</a>'+
                '</li>'; //符合条件的拼接
            gArticleLists.innerHTML = str//写入页面
        })
    },
    error:function(){
        alert("失败")
    }
});


function ga(a) {
    str = '';//重置字符串
    $.ajax({
        type: "get",
        url: "../../json/json.json",
        success: function (data) {
//                console.log(data);
            data.listTab.map(function (x, i) {
//                    console.log(x.id==1)
                if(x.id==a){
                    str += '<li class="g-article-cell">' +
                        '<a href="javascript:" target="_blank">' +
                        '<img src=' + x.url + ' alt="" class="g-article-img">' +
                        '<div class="g-article-text">' +
                        '<p class="g-article-title">' + x.title + '</p>' +
                        '<div class="g-article-sign clear">' +
                        ' <span>' + x.sign + '</span>' +
                        '</div>' +
                        '<p class="g-article-desc">' + x.desc + '</p>' +
                        '</div>' +
                        '</a>' +
                        '</li>'; //符合条件的拼接
                    gArticleLists.innerHTML = str//写入页面
                }


            })
        },
        error: function () {
            alert("失败")
        }
    });
}