// Making boubble

var clutter = '';
function createBoubble() {
    for (var i = 0; i <= 146; ++i) {
        clutter += `<div class="boubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('#bpnl').innerHTML = clutter;
    clutter = '';
}

// timer 
function runtimer() {
    var timer = 60;

    var timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint)
            document.querySelector('#bpnl').innerHTML = "";
            finalScore();
        }
    }, 1000);
}

// restart function

var restart = document.querySelector(".restart");
function finalScore() {
    restart.style.display = "block";
    document.querySelector('.finalscore').textContent = score;
}

document.querySelector(".rest").addEventListener("click", function () {
    window.location.reload();
})

var hitval;
function hitme() {
    hitval = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitval;
}

var score = 0;
function scoreIncrese() {
    score += 10;
    document.querySelector("#score").textContent = score;
}



document.querySelector(".bpnl").addEventListener("click", function (details) {
    var clickednum = (Number(details.target.textContent));

    if (clickednum == hitval) {
        scoreIncrese();
        createBoubble();
        hitme();
    }
})


createBoubble();
runtimer();
hitme();
