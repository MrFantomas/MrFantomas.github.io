let clickCount = 0;

document.getElementById("checkMeButton").addEventListener("click", function() {
    clickCount++;

    if (clickCount === 10) {
        alert("Ещё раз нажмёшь получишь пизды");
    } else if (clickCount === 20) {
        alert("Я тебя предупреждал!");
    } else if (clickCount === 25) {
        alert("kotKyzma - это пароль)");
    } else if (clickCount === 100) {
        document.getElementById("messageContainer").classList.remove("hidden");
    }
});
