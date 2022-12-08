let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mody = document.querySelector(".mody");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");

window.onscroll = function () {
  let scrollValue = scrollY;
  stars.style.left = scrollValue + "px";
  moon.style.top = scrollValue * 4 + "px";
  mountains3.style.top = scrollValue * 2 + "px";
  mountains4.style.top = scrollValue * 1.2 + "px";
  river.style.top = scrollValue + "px";
  boat.style.top = scrollValue + "px";
  boat.style.left = scrollValue * 3 + "px";
  mody.style.fontSize = scrollValue + "px";
  if (scrollY >= 70) {
    mody.style.fontSize = 70 + "px";
    mody.style.position = "fixed";
    if (scrollY >= 500) {
      mody.style.display = "none";
    } else mody.style.display = "block";
    if (scrollY >= 130) {
      document.querySelector(".main").style.background =
        "linear-gradient( #251b5c, #3aa3d5)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(to top,#1a062c,transparent)";
    }
  }
};
