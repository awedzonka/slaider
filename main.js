const slidList = [{
        imgSrc: "images/poniedzialek.jpg",
        text: "Miłego poniedziałku",
    },
    {
        imgSrc: "images/wtorek.jpeg",
        text: "Udanego wtorku",
    },
    {
        imgSrc: "images/sroda.jpg",
        text: "Spokojnej środy",
    },
    {
        imgSrc: "images/czwartek.jpg",
        text: "Melodyjnego czwartku",
    },
    {
        imgSrc: "images/piatek.jpg",
        text: "Imprezowego piątku",
    },
    {
        imgSrc: "images/sobota.jpg",
        text: "Rodzinnej soboty",
    },
    {
        imgSrc: "images/niedziela.jpg",
        text: "Magicznej niedzieli",
    },
]
let img = document.querySelector("img.slider");
const header = document.querySelector("h1.slider");
const span = [...document.querySelectorAll("span")];
let active = 0;
const time = 3000;
let indexElementClick;

const changeDot = () => {
    const activeSpan = span.findIndex(dot =>
        dot.classList.contains("active")
    );
    span[activeSpan].classList.remove("active");
    span[active].classList.add("active");
}

function changeSlide() {
    active++;
    if (active === slidList.length) {
        active = 0;
    }
    img.src = slidList[active].imgSrc;
    header.textContent = slidList[active].text;
    changeDot();
}
let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
        e.keyCode === 37 ? active-- : active++;
        clearInterval(indexInterval);
        if (active >= slidList.length) {
            active = 0;
        } else if (active < 0) {
            active = slidList.length - 1;
        }
        img.src = slidList[active].imgSrc;
        header.textContent = slidList[active].text;
        changeDot();
        indexInterval = setInterval(changeSlide, time);
    }
}
window.addEventListener("keydown", keyChangeSlide);

const clickChangeSlide = (e) => {
    // let result = e.target.dataset.index;
    span.forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    const result = span.findIndex(clickedDot => clickedDot.classList.contains("active"));
    clearInterval(indexInterval);
    img.src = slidList[result].imgSrc;
    header.textContent = slidList[result].text;
    active = result;
    indexInterval = setInterval(changeSlide, time);
}

span.forEach((el, index) => {
    el.addEventListener("click", clickChangeSlide);
    // el.dataset.index = index;
});
