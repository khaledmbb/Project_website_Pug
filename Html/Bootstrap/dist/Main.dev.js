"use strict";

var _this = void 0;

var bar = document.querySelector(".bar");
var barPage = document.querySelector(".menu");
var barExit = document.querySelector(".barExit");

bar.onclick = function () {
  barPage.classList.toggle("show");
};

barExit.onclick = function () {
  barPage.classList.remove("show");
};

window.addEventListener("scroll", function () {
  if (_this.scrollY >= 400) {
    barPage.classList.remove("show");
  }
});
var goUl = document.querySelectorAll(".goUl li");
goUl.forEach(function (element) {
  element.onclick = function () {
    location.href = element.dataset.page;
  };
});
var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (_this.scrollY >= 100) {
    header.style.boxShadow = "0px 6px 18px 0px #0000001f";
    header.style.backdropFilter = "blur(6px)";
  } else {
    header.style.boxShadow = "none";
    header.style.backdropFilter = "blur(0px)";
  }
});
var endTime = new Date("dec 10, 2022 00:00:00").getTime();
var startCounter = setInterval(function () {
  var nowTime = new Date().getTime();
  var timeIs = endTime - nowTime;
  var days = Math.floor(timeIs / (1000 * 60 * 60 * 24));
  var hours = Math.floor(timeIs % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(timeIs % (1000 * 60 * 60) / (1000 * 60));
  var secondes = Math.floor(timeIs % (1000 * 60) / 1000);
  document.querySelector(".days").innerHTML = days + " Days";
  document.querySelector(".hours").innerHTML = hours + " Hours";
  document.querySelector(".minutes").innerHTML = minutes + " Minutes";
  document.querySelector(".secondes").innerHTML = secondes + " Secondes";
}, 1000);
var preloaded = document.querySelector(".preloaded");
window.addEventListener("load", function () {
  preloaded.classList.add("fade");
  setTimeout(function () {
    preloaded.remove();
  }, 1000);
});
var li1 = document.querySelectorAll(".schedule .shuffle ul li");
var shuffleLi = Array.from(li1);
var li2 = document.querySelectorAll(".topics > div");
var topicLi = Array.from(li2);
shuffleLi.forEach(function (element) {
  element.onclick = function () {
    shuffleLi.forEach(function (elem) {
      elem.classList.remove("active");
    });
    element.classList.add("active");
    topicLi.forEach(function (element) {
      element.classList.remove("topic-show");
    });
    document.querySelector(element.dataset.display).classList.add("topic-show");
  };
});
var ulPage = document.querySelectorAll(".ul-page li");
ulPage.forEach(function (element) {
  var pageLink = element.dataset.page;

  element.onclick = function () {
    location.href = pageLink;
  };
});
var goUp = document.querySelector(".go-up");
var events = document.querySelector(".event");

goUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

window.addEventListener("scroll", function () {
  var offsetTop = events.offsetTop;
  var offsetHeight = events.offsetHeight;
  var pageHeight = _this.innerHeight;
  var pageY = _this.pageYOffset;

  if (pageY > offsetTop + offsetHeight - pageHeight) {
    goUp.classList.add("move");
  } else {
    goUp.classList.remove("move");
  }
});