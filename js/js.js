/* exported Function */
/*switch pages*/
function show__homepage() {
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("homepage__layer").style.display = "block";
}
function show__recipes() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("recipes__layer").style.display = "block";
}
function show__techniques() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("techniques__layer").style.display = "block";
}
function show__materials() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "block";
}
function show__start() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("techniques_item1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("start__recipe1").style.display = "block";
}


function show_techiques_item1() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__recipe1").style.display = "none";
  document.getElementById("materials__recipe1").style.display = "none";
  document.getElementById("techniques_item1").style.display = "block";
}


function pic_layer(){
    document.getElementById('pic_window').style.display = "block";
    document.getElementById('gif_window').style.display = "none";
    document.getElementById('vid_window').style.display = "none";
  }
function gif_layer(){
    document.getElementById('gif_window').style.display = "block";
    document.getElementById('pic_window').style.display = "none";
    document.getElementById('vid_window').style.display = "none";
        }
function vid_layer(){
    document.getElementById('vid_window').style.display = "block";
    document.getElementById('gif_window').style.display = "none";
    document.getElementById('pic_window').style.display = "none";
  }
