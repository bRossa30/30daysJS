function setDate() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    console.log(sec);
    const hands = document.querySelectorAll('.hand');
    const secHand = document.querySelector('.sec-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    sec === 0 && hands.forEach(hand => hand.style.transition = 'none');
    sec === 1 && hands.forEach(hand => hand.style.transition = 'all cubic-bezier(0.23, 1.54, 0.01, 1.39) .1s');
    secDeg = 90 + sec * 360 / 60;
    minDeg = 90 + min * 360 / 60 + sec / 60 * 6;
    hourDeg = 90 + hour * 360 / 12 + min / 60 * 30;

    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);

setDate();