const bar = document.querySelector(".bar");
const barPage = document.querySelector(".menu");
const barExit = document.querySelector(".barExit");

bar.onclick = () => {
  barPage.classList.toggle("show");
};
barExit.onclick = () => {
  barPage.classList.remove("show");
};
window.addEventListener("scroll", () => {
  if (this.scrollY >= 400) {
    barPage.classList.remove("show");
  }
});

const goUl = document.querySelectorAll(".goUl li");

goUl.forEach((element) => {
  element.onclick = () => {
    location.href = element.dataset.page;
  };
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 100) {
    header.style.boxShadow = "0px 6px 18px 0px #0000001f";
    header.style.backdropFilter = "blur(6px)";
  } else {
    header.style.boxShadow = "none";
    header.style.backdropFilter = "blur(0px)";
  }
});

let endTime = new Date("dec 10, 2022 00:00:00").getTime();

let startCounter = setInterval(() => {
  let nowTime = new Date().getTime();
  let timeIs = endTime - nowTime;
  let days = Math.floor(timeIs / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeIs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeIs % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((timeIs % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days + " Days";
  document.querySelector(".hours").innerHTML = hours + " Hours";
  document.querySelector(".minutes").innerHTML = minutes + " Minutes";
  document.querySelector(".secondes").innerHTML = secondes + " Secondes";
}, 1000);
const preloaded = document.querySelector(".preloaded");
window.addEventListener("load", () => {
  preloaded.classList.add("fade");
  setTimeout(() => {
    preloaded.remove();
  }, 1000);
});

let li1 = document.querySelectorAll(".schedule .shuffle ul li");
let shuffleLi = Array.from(li1);

let li2 = document.querySelectorAll(".topics > div");
let topicLi = Array.from(li2);

shuffleLi.forEach((element) => {
  element.onclick = () => {
    shuffleLi.forEach((elem) => {
      elem.classList.remove("active");
    });
    element.classList.add("active");
    topicLi.forEach((element) => {
      element.classList.remove("topic-show");
    });
    document.querySelector(element.dataset.display).classList.add("topic-show");
  };
});

let ulPage = document.querySelectorAll(".ul-page li");
ulPage.forEach((element) => {
  let pageLink = element.dataset.page;
  element.onclick = () => {
    location.href = pageLink;
  };
});

const goUp = document.querySelector(".go-up");
const events = document.querySelector(".event");
goUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.addEventListener("scroll", () => {
  let offsetTop = events.offsetTop;
  let offsetHeight = events.offsetHeight;
  let pageHeight = this.innerHeight;
  let pageY = this.pageYOffset;
  if (pageY > offsetTop + offsetHeight - pageHeight) {
    goUp.classList.add("move");
  } else {
    goUp.classList.remove("move");
  }
});
