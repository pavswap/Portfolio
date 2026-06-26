const element = document.querySelector("#stylesheet");

const time = new Date().getHours();

if(time >= 2 && time <= 4) {
    element.href = "style2.css";
} else {
    element.href = "style.css";
}
