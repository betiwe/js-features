let changeTimer = setInterval(
	function() {
		const timer = document.getElementById('timer');
		if (timer.textContent > 0) {
			timer.textContent -= 1;
		} else {
			alert('Вы победили в конкурсе!')
			clearInterval(changeTimer)
		}
	}
,1000)

