var animationElement = document.getElementById("animation");

function animate() {
	requestAnimationFrame(animate);
	
	var time = performance.now();
	var opacity = (Math.sin(time / 500) + 1) / 2;
	
	animationElement.style.opacity = opacity;
}

animate();