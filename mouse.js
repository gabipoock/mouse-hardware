const emoji = document.querySelector('.emoji');
// const leaps = document.querySelector('#leaps'); uncomment if you want to show number of leaps
let y = 0;
let vy = -6; // initial vertical velocity
let gravity = 0.5;
let leapcount = 0;

function leap() {
y += vy;
vy += gravity;

if (y > 160) {
y = 160;
vy = -6; // reset the vertical velocity
	leapcount ++;
	// leaps.textContent = leapcount; uncomment if you want to show number of leaps
	if (leapcount == 5) {
y = 160;
vy = -9; // reset the vertical velocity

}	
	if (leapcount == 10) {
y = 160;
vy = -12; // reset the vertical velocity
leapcount = 0;
}
}


emoji.style.transform = `translateY(${y}px)`;

requestAnimationFrame(leap);
}

leap();
