const addon = document.querySelectorAll(".detail1");
let flag, flag1;
let index;
let color = 1;

addon.forEach((e) => {
  e.addEventListener("mouseover", function () {
    if (flag === 1) {
      remove_addon();
    }
    e.lastElementChild.classList.add("show");
    e.classList.add("bestflight");
    e.addEventListener("mouseout", function () {
      remove_addon();
    });
    flag = 1;
  });
});

const remove_addon = () => {
  addon.forEach((f) => {
    flag = 0;
    f.classList.remove("bestflight");
  });
};

const dot = document.querySelectorAll(".dot");

let up = document.getElementById("up");
let down = document.getElementById("down");

let middle = document.querySelector(".box1");
let last = document.querySelector(".box2");
let upper = document.querySelector(".box0");

up.addEventListener("click", function () {
  if (middle.classList.contains("foc1")) {
    middle.classList.remove("foc1");
  }
  if (flag1 === 1) {
    upper.classList.replace("downtoggb", "downtogg");
    middle.classList.replace("focb", "foc");
    last.classList.replace("foc1b", "foc1");
    if (color === 1) {
      remove_color();
    }
    dot[last.title].classList.add("dot-color");
    color = 1;
  } else {
    middle.classList.contains("foc1")
      ? middle.classList.replace("foc1", "foc")
      : middle.classList.add("foc");
    last.classList.contains("downtogg")
      ? last.classList.replace("downtogg", "foc1")
      : last.classList.add("foc1");
    if (color === 1) {
      remove_color();
    }
    dot[last.title].classList.add("dot-color");
    color = 1;
    upper.classList.contains("foc")
      ? upper.classList.replace("foc", "downtogg")
      : upper.classList.add("downtogg");
  }
  flag1 = 0;
  let temp = upper;
  upper = middle;
  middle = last;
  last = temp;
});

down.addEventListener("click", function () {
  if (middle.classList.contains("foc1")) {
    middle.classList.remove("foc1");
  }
  if (flag1 === 0) {
    upper.classList.replace("foc", "focb");
    if (color === 1) {
      remove_color();
    }
    dot[upper.title].classList.add("dot-color");
    color = 1;
    middle.classList.replace("foc1", "foc1b");
    last.classList.replace("downtogg", "downtoggb");
  } else {
    upper.classList.contains("downtoggb")
      ? upper.classList.replace("downtoggb", "focb")
      : upper.classList.add("focb");
    if (color === 1) {
      remove_color();
    }
    dot[upper.title].classList.add("dot-color");
    color = 1;
    middle.classList.contains("focb")
      ? middle.classList.replace("focb", "foc1b")
      : middle.classList.add("foc1b");
    last.classList.contains("foc1b")
      ? last.classList.replace("foc1b", "downtoggb")
      : last.classList.add("downtoggb");
  }
  flag1 = 1;
  let temp = upper;
  upper = last;
  last = middle;
  middle = temp;
});

const remove_color = () => {
  dot.forEach((e) => {
    color = 0;
    e.classList.remove("dot-color");
  });
};

const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".rightnav");
const nav_items = document.querySelectorAll(".item");
menu.addEventListener("click", () => {
  nav.classList.toggle("change");
  if (nav.classList.contains("change")) {
    nav_items.forEach((e) => {
      e.addEventListener("click", (f) => {
        f.preventDefault();
        console.log("folk");
        menu.style.display = "none";
        setInterval(() => {
          menu.style.display = "flex";
        }, 800);
        nav.classList.remove("change");
      });
    });
  }
});

function changecss() {
  this.scrollY > 5 ? (menu.style.top = "0px") : (menu.style.top = "20px");
  this.scrollY > 20 ? (menu.style.top = "-5px") : (menu.style.top = "20px");
  this.scrollY > 40
    ? (menu.style.position = "unset")
    : (menu.style.position = "fixed");
}

window.addEventListener("scroll", changecss);

document.querySelector('.contact-botom').addEventListener('submit',validate);

function validate(event){
  event.preventDefault();
  console.log("work");
  let email=document.getElementById('email').value
  const regex=/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/
  console.log(email);
  if(email == "")
  {
    alert("Enter email first");
    return false;
  }
  if(regex.test(email) == false)
  {
    alert("invalid email address");
    return false;
  } else {
    alert("We'll send you more information on your mail")
  }
  
}