function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    document.getElementById('currentDay').innerHTML = "Current Day: " + day;
    document.getElementById('currentTime').innerHTML = "Current UTC Time: " + hours + ':' + minutes + ':' + seconds;
}

updateTime();

setInterval(updateTime, 1000);
