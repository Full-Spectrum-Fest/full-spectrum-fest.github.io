const start = new Date("2024-06-29T16:00:00.000Z")

function updateTimer() {
    const until = (start.getTime() - Date.now()) / 1000;

    const days = Math.floor(until / 86400);
    const hours = Math.floor(until / 3600) - (days * 24);
    const minutes = Math.floor(until / 60) - (days * 1440) - (hours * 60);
    const seconds = Math.floor(until - (days * 86400) - (hours * 3600) - (minutes * 60));

    document.getElementById("countdown-days").innerText = days;
    document.getElementById("countdown-hours").innerText = hours;
    document.getElementById("countdown-mins").innerText = minutes;
    document.getElementById("countdown-secs").innerText = seconds;

    document.getElementById("countdown-date").innerText = `${start.getDate()}th ${["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][start.getMonth()]} ${start.getFullYear()}`; // at ${start.getHours() / 12 > 1 ? start.getHours()-12 : (start.getHours() == 0 ? 12 : start.getHours())}:${start.getMinutes().toString().length == 1 ? `0${start.getMinutes()}` : start.getMinutes()}${start.getHours() / 12 >= 1 ? "pm": "am"}
}

setInterval(() => {
    updateTimer();
},100);