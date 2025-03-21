if (window.location.href == "https://www.instagram.com/") {
  let countdown = 150;
  let countdownTimer = setInterval(() => {
    document.title = `${countdown} sec`;
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownTimer);
      alert("Lösch dich!");
    }
  }, 1000);
}
