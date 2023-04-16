let moved = true;
const sliderBall = document.getElementById("slider-ball");
const sliderContainer = document.getElementsByClassName("slider-container");
const modeSwitch = document.getElementById("mode-switch");
const topSectionDiv = document.getElementsByClassName("top-section-div ");
const OverviewDiv = document.getElementsByClassName('overview-div');
const bgPattern = document.getElementsByClassName('bg');
const Number = document.getElementsByClassName('number');
const Html = document.getElementsByTagName('html');
const cardNumber = document.getElementsByClassName('overview-card-num');
sliderBall.addEventListener("click", function () {
    console.log(sliderBall.style.justifyContent);
    if (moved) {
        sliderContainer[0].style.backgroundImage = "none";
        sliderContainer[0].style.backgroundColor = "hsl(230, 22%, 74%)";
        // sliderBall.style.marginLeft = "55%"
        sliderContainer[0].style.justifyContent = "end";
        modeSwitch.innerText = "Light Mode ";
        moved = false;
        bgPattern[0].style.backgroundColor = "hsl(225, 100%, 98%)";
        for (let i of topSectionDiv) {
            i.style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        Html[0].style.backgroundColor = "hsl(0, 0%, 100%)";
        for (let i of OverviewDiv) {
            i.style.backgroundColor = "hsl(227, 47%, 96%)";
            i.style.color = "hsl(230, 17%, 14%)";
        }
        for (let i of Number) {
            i.style.color = "hsl(230, 17%, 14%)";
        }
        modeSwitch.style.color = "hsl(228, 34%, 66%)";
        document.getElementsByClassName('heading')[0].style.color = "hsl(230, 17%, 14%)";
        for (let i of cardNumber) {
            i.style.color = "hsl(230, 17%, 14%)";
        }
        document.getElementsByClassName('attribution')[0].style.color = "hsl(230, 17%, 14%)";

    }
    else {
        modeSwitch.style.color = "hsl(228, 34%, 66%)";
        sliderContainer[0].style.backgroundImage = "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        // sliderBall.style.marginLeft = "0%"
        sliderContainer[0].style.justifyContent = "start";
        modeSwitch.innerText = "Dark Mode ";
        moved = true;
        bgPattern[0].style.backgroundColor = "hsl(232, 19%, 15%)";
        for (let i of topSectionDiv) {
            i.style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        Html[0].style.backgroundColor = "hsl(230, 17%, 14%)";
        for (let i of OverviewDiv) {
            i.style.backgroundColor = "hsl(228, 28%, 20%)";
            i.style.color = "white";
        }
        for (let i of Number) {
            i.style.color = "white";
        }
        document.getElementsByClassName('heading')[0].style.color = "white";
        for (let i of cardNumber) {
            i.style.color = "white";
        }
        document.getElementsByClassName('attribution')[0].style.color = "white";


    }



})


