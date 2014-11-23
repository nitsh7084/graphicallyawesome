$(document).ready(function(){

var boxes_arr = new Array();
var clear_interval;

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

shuffle(boxes_arr);

clear_interval = setInterval(function(){
shuffle(boxes_arr);
console.log(boxes_arr);
},600);

function shuffle_array(arr){

if(arr.length != 0){
var rnum = Math.floor(Math.random()*arr.length);
$('#lightbox_box_'+rnum).addClass('show');
arr.splice(arr[rnum],1);
console.log(arr.length+'<br/>'+rnum);
}else{
clearInterval(clear_interval);
}

}

/*

clear_interval = setInterval(function(){
shuffle_array(boxes_arr);
},600);

*/


});