let minutes = 0, seconds = 0, milliseconds = 0, interval;
let running = false;

function startStopwatch() {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").innerText = "Pause";
    } else {
        running = false;
        clearInterval(interval);
        document.getElementById("startStop").innerText = "Resume";
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    minutes = seconds = milliseconds = 0;
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("milliseconds").innerText = "00";
    document.getElementById("startStop").innerText = "Start";
}

function updateTime() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
    document.getElementById("milliseconds").innerText = String(milliseconds).padStart(2, "0");
}

document.getElementById("startStop").addEventListener("click", startStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);