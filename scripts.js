// Countdown Timer Script
document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("May 25, 2025 00:00:00").getTime();

    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "Congratulations!";
        }
    }, 1000);
});
