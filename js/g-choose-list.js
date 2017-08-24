/*
/!**
 * Created by gaoxiru on 2017/8/23.
 *!/
var jso = [
    {id:1,id1:1,name:'hahh',mimi:'ggg'},
    {id:1,id1:1,name:'hahh1',mimi:'ggg'},
    {id:2,id1:1,name:'hahh2',mimi:'ggg'},
    {id:1,id1:2,name:'hahh35',mimi:'ggg'},
    {id:3,id1:2,name:'hahh456',mimi:'ggg'},
    {id:1,id1:2,name:'ha456hh',mimi:'ggg'},
    {id:1,id1:2,name:'ha456hh',mimi:'ggg'},
    {id:4,id1:2,name:'ha456hh',mimi:'ggg'},
    {id:1,id1:3,name:'ha456hh',mimi:'ggg'},
    {id:1,id1:3,name:'ha456hh',mimi:'ggg'},
    {id:5,id1:3,name:'ha4564hh',mimi:'ggg'},
    {id:1,id1:3,name:'hah456h',mimi:'ggg'},
    {id:6,id1:2,name:'hah456h',mimi:'ggg'},
    {id:1,id1:3,name:'ha456hh',mimi:'ggg'},
    {id:1,id1:1,name:'ha454566hh',mimi:'ggg'},
    {id:6,id1:1,name:'ha545646hh',mimi:'ggg'},
    {id:1,id1:1,name:'ha456hh',mimi:'ggg'},
    {id:2,id1:1,name:'ha445656hh',mimi:'ggg'},
    {id:1,id1:1,name:'ha445656hh',mimi:'ggg'},
    {id:4,id1:1,name:'ha456hh',mimi:'ggg'},
    {id:5,id1:1,name:'ha456hh',mimi:'ggg'},
    {id:6,id1:1,name:'ha48hh',mimi:'ggg'},
    {id:2,id1:1,name:'ha489hh',mimi:'ggg'}

];
//显示全部的
var str = '';//启示的字符串

for(var i=0;i<jso.length;i++){
    str+='<div>'+'<p>'+jso[i].name+'</p>'+'<p>'+jso[i].mimi+'</p>'+'</div>'//拼接

}
box.innerHTML = str;//写入页面
//一级分类
// var arr2 = jso;//供二级分类使用的数组
// function han(a){
//     str = '';//重置字符串
//     arr2 = [];//重置二类数组
//     for(var i=0;i<jso.length;i++){
//         console.log(jso);
//         if(jso[i].id == a){
//             str +='<p>'+jso[i].name+'<p>'; //符合条件的拼接
//             arr2.push(jso[i])//加入二类函数
//         }
//     }
//     box.innerHTML = str//写入页面
// }
// var str1 = ''//二类字符串初始
//二级分类
// function han1(a){
//     str1 = ''//重置
//     for(var i=0;i<arr2.length;i++){
//         if(arr2[i].id1 == a){
//             str1 +='<p>'+arr2[i].name+'<p>'//符合条件的
//         }
//     }
//     box.innerHTML = str1//写入页面
// }
*/
