/* exported Function */
/*switch pages*/
function show__homepage() {
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("homepage__layer").style.display = "block";
}
function show__recipes() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "block";
}
function show__techniques() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "block";
}
function show__materials() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "block";
}
function show__start() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "block";
}
