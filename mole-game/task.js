getHole = (index) => document.getElementById(`hole${index}`);
let counterDead = 0;
let counterLost = 0;

for (i = 1; i < 10; i++) {
  let hole = getHole(i);
  hole.addEventListener('click', function () {
    if (hole.className.includes('hole_has-mole')) {
      dead.textContent++;
	  counterDead++;
    } else {
      lost.textContent++;
	  counterLost++;
    }

	if(counterDead === 10) {
		alert('Вы победили!');
		counterDead = 0;
		counterLost = 0;
		dead.textContent = 0;
		lost.textContent = 0;
	}
	if(counterLost === 5) {
		alert('Вы проиграли!');
		counterDead = 0;
		counterLost = 0;
		dead.textContent = 0;
		lost.textContent = 0;
	}
  });
}


