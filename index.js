$(document).ready(function(){

var boxes_arr = new Array();

setTimeout(function(){
$('.overlay_result_container').addClass('show_overlay_result');
},1300);

$('.overlay_button').bind('click',function(){
$('.graph_lightbox').addClass('show');
$('.lightbox_box').addClass('show');
});

$('.lightbox_box').bind('click',function(){
$('.graph_lightbox, .lightbox_box').removeClass('show');
});

for(var i=1;i<=20;i++){
boxes_arr.push(i);
}


function shuffle_array(arr){

var rnum = Math.floor((Math.random()*arr.length)+1);
console.log(rnum);

}


setTimeout(function(){
shuffle_array(boxes_arr);
},600);


});