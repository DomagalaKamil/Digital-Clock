function updateTime() {
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Convert seconds to two-digit format
    var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    var dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
    var day = currentDate.getDate();
    var month = currentDate.toLocaleString('en-US', { month: 'long' });
    var year = currentDate.getFullYear();

    var timeString = hours + ":" + minutes + ":" + formattedSeconds;
    var dateString = dayOfWeek + " - " + day + " - " + month + " - " + year;

    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}

setInterval(updateTime, 1000); // Update every second
