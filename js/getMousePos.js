var mouseX = 0, mouseY = 0;

function init() {
	document.addEventListener ('mousemove', onDocumentMouseMove, false);
}

function onDocumentMouseMove(event) {
	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - windowHalfY;
}