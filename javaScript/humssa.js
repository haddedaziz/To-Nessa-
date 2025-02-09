function openEnvelope() {
    let envelope = document.querySelector(".envelope");
    let flap = document.querySelector(".flap");
    let heart = document.querySelector(".heart");
    let message = document.querySelector(".letter");
    let firstBg = document.querySelector(".first-bg");
    let secondBg = document.querySelector(".second-bg");

    // Stop heartbeat animation
    heart.style.animation = "none";

    // Open envelope animation
    envelope.classList.add("shake");
    setTimeout(() => {
        envelope.classList.remove("shake"); 
        flap.style.transform = "rotateX(180deg)";
        heart.style.opacity = "0";

        // Background transition
        firstBg.style.opacity = "0";
        secondBg.style.opacity = "1";

        // Show letter
        message.classList.add("show");
        message.style.display = "block";

        // Launch heart confetti effect
        launchHeartConfetti();
    }, 500);
}

/* Heart Confetti Effect */
function launchHeartConfetti() {
    let confettiContainer = document.querySelector(".heart-confetti");
    confettiContainer.innerHTML = "";

    for (let i = 0; i < 40; i++) {
        let heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `-${Math.random() * 20}vh`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        heart.style.animationDelay = `${Math.random()}s`;
        confettiContainer.appendChild(heart);
    }
}
