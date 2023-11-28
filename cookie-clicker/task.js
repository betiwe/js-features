const cookie = document.getElementById('cookie');
let counter = 0;
const clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = function() {
	if (counter === 0) {
		cookie.width = 300;
		counter++
		clickerCounter.textContent++
	} else {
		cookie.width = 200;
		counter = 0;
		clickerCounter.textContent++
	}

}