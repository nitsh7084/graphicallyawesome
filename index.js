$(document).ready(function(){

var boxes_arr = new Array();
var clear_interval;

setTimeout(function(){
$('.overlay_result_container').addClass('show_overlay_result');
},1300);

$('.overlay_button').bind('click',function(){
$('.graph_lightbox').addClass('show');
console.log(boxes_arr);
show_boxes();
});

$('.lightbox_box').bind('click',function(){
$('.graph_lightbox, .lightbox_box').removeClass('show');
});


for(var i=1;i<=25;i++){
boxes_arr.push(i);
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function shuffle_array(arr){

if(arr.length != 0){
shuffle(boxes_arr);
var rnum = boxes_arr[0];
$('.graph_lightbox').addClass('show');
$('#lightbox_box_'+rnum).addClass('show');
boxes_arr.splice(0,1);
console.log(rnum);
console.log(boxes_arr);
}else{
clearInterval(clear_interval);
}

}


function show_boxes(){
clear_interval = setInterval(function(){
shuffle_array(boxes_arr);
},60);

}



});