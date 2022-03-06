import JSConfetti from 'js-confetti'

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		elementAnimate();
	}

};

function elementAnimate(){
	document.getElementById("sanic").animate([
		// keyframes
		{ transform: 'translateX(0px)' }, 
		{ transform: 'translateX(150vw)' }
	  ], { 
		// timing options
		duration: 3000,
	  });
}

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);


// Ghostfetti

// const canvasjs = document.getElementById('canvas');
const button = document.getElementById('aave');

const jsConfetti = new JSConfetti({  })

setInterval(() => {
	jsConfetti.addConfetti({
	  emojis: ['🦄', '⚡️']
	})
  }, 2500)

button.addEventListener('mouseenter', () => {
  jsConfetti.addConfetti()
  console.log("test")
})

