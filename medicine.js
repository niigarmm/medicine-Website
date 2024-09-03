let btn = document.querySelector(".btn");
let input1 = document.querySelector(".email");
let input2 = document.querySelector(".password");
let aElement = document.querySelector(".join");
btn.addEventListener("click", (event) => {
  if (input1.value.length === 0 || input2.value.length === 0) {
    aElement.href = "";
    alert("Password and email didn't included");
  } else {
    aElement.href = "./medicine-2.html";
  }
});

let newBtn = document.querySelector(".last-btn");
let p = document.querySelector(".hide-p");
newBtn.addEventListener("click", (event) => {
  if (newBtn.innerText === "DONATE") {
    p.style.display = "flex";
    newBtn.innerText = "DONATED";
    newBtn.style.backgroundColor = "white";
    newBtn.style.color = "coral";
  } else {
    newBtn.innerText = "DONATE";
    p.style.display = "none";
    newBtn.style.backgroundColor = "coral";
    newBtn.style.color = "white";
  }
});

let a = document.querySelector(".about");
a.addEventListener("mouseover", (event) => {
  event.target.style.borderBottom = "3px solid coral";
  event.target.style.transition = "0.1s"

});
a.addEventListener("mouseout", (event) => {
  event.target.style.borderBottom = "none";
});

let b = document.querySelector(".donate-a");
b.addEventListener("mouseover", (event) => {
  event.target.style.borderBottom = "3px solid coral";
  event.target.style.transition = "0.1s"

});
b.addEventListener("mouseout", (event) => {
  event.target.style.borderBottom = "none";
});

let c = document.querySelector(".programs-a");
c.addEventListener("mouseover", (event) => {
  event.target.style.borderBottom = "3px solid coral";
  event.target.style.transition = "0.1s"
});
c.addEventListener("mouseout", (event) => {
  event.target.style.borderBottom = "none";
});

let d = document.querySelector(".impact");
d.addEventListener("mouseover", (event) => {
  event.target.style.borderBottom = "3px solid coral";
  event.target.style.transition = "0.1s"
});
d.addEventListener("mouseout", (event) => {
  event.target.style.borderBottom = "none";
});

let e = document.querySelector(".history");
e.addEventListener("mouseover", (event) => {
  event.target.style.borderBottom = "3px solid coral";
  event.target.style.transition = "0.1s"
});
e.addEventListener("mouseout", (event) => {
  event.target.style.borderBottom = "none";
});

