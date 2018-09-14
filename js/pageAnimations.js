/* JavaScript
Index page behavior implementation 
Lily Stilson 2018
Works as shit, but nobody cares, lol */
//"use strict";
var aboutScroll = false;
var workScroll = false;
var socialScroll = false;
var contactScroll = false;
var spoilerShow = false;


window.onload = function() {
	var aboutLink = document.getElementById("about");
	var aboutText = document.getElementById("aboutText");
	var workLink = document.getElementById("work");
	var workText = document.getElementById("workText");
	var socialLink = document.getElementById("social");
		var socialText = document.getElementById("socialText");
			var VK = document.getElementById("VK");
			var YouTube = document.getElementById("YouTube");
			var Soundcloud = document.getElementById("Soundcloud");
	var contactLink = document.getElementById("contact");
	var contactText = document.getElementById("contactText");

	var logo = document.getElementById("logo");
	var spoiler = document.getElementById("spoiler");
	var container = document.getElementById("container");
	
	aboutLink.onclick = function() {
		aboutText.style.visibility = 'visible';
		workText.style.visibility = 'hidden';
		socialText.style.visibility = 'hiden';
		contactText.style.visibility = 'hidden';
		if (aboutScroll === false) {
			//Makes about section visible
			workLink.style.opacity = '0';
			workLink.style.visibility = 'hidden';
			socialLink.style.opacity = '0';
			socialLink.style.visibility = 'hidden';
			contactLink.style.opacity = '0';
			contactLink.style.visibility = 'hidden';
			spoiler.style.visibility = 'hidden';

			spoiler.style.height = '0';
			spoiler.style.width = '0';
			
			logo.style.transition = '1s ease-out';
			aboutText.style.opacity = '1';
			logo.style.width = '10%';
			container.style.height = '10%';
			aboutText.style.height = '85%';		
			aboutScroll = true;
			return false;
		} else {
			//Makes about section invisible
			workLink.style.opacity = '1';
			workLink.style.visibility = 'visible';
			socialLink.style.opacity = '1';
			socialLink.style.visibility = 'visible';
			contactLink.style.opacity = '1';
			contactLink.style.visibility = 'visible';
			spoiler.style.visibility = 'visible';

			spoiler.style.height = '100%';
			spoiler.style.width = '100%';

			logo.style.transition = '1s ease-in';
			aboutText.style.opacity = '0';
			logo.style.width = '75%';
			container.style.height = '100%';
			aboutText.style.height = '0%';		
			aboutScroll = false;
			return false;
		}
	}
	
	workLink.onclick = function() {
		aboutText.style.visibility = 'hidden';
		workText.style.visibility = 'visible';
		socialText.style.visibility = 'hidden';
		contactText.style.visibility = 'hidden';
		if (workScroll === false) {
			aboutLink.style.opacity = '0';
			aboutLink.style.visibility = 'hidden';
			socialLink.style.opacity = '0';
			socialLink.style.visibility = 'hidden';
			contactLink.style.opacity = '0';
			contactLink.style.visibility = 'hidden';
			spoiler.style.visibility = 'hidden';

			spoiler.style.height = '0';
			spoiler.style.width = '0';

			logo.style.transition = '1s ease-out';

			workText.style.opacity = '1';
			logo.style.width = '10%';
			container.style.height = '10%';
			workText.style.height = '85%';		
			workScroll = true;
			return false;
		} else {
			aboutLink.style.opacity = '1';
			aboutLink.style.visibility = 'visible';
			socialLink.style.opacity = '1';
			socialLink.style.visibility = 'visible';
			contactLink.style.opacity = '1';
			contactLink.style.visibility = 'visible';
			spoiler.style.visibility = 'visible';

			spoiler.style.height = '100%';
			spoiler.style.width = '100%';

			logo.style.transition = '1s ease-in';
			workText.style.opacity = '0';
			logo.style.width = '75%';
			container.style.height = '100%';
			workText.style.height = '0%';		
			workScroll = false;
			return false;
		}
	}

	socialLink.onclick = function() {
		aboutText.style.visibility = 'hidden';
		workText.style.visibility = 'hidden';
		socialText.style.visibility = 'visible';
		contactText.style.visibility = 'hidden';
		if (socialScroll === false) {
			aboutLink.style.opacity = '0';
			aboutLink.style.visibility = 'hidden';
			workLink.style.opacity = '0';
			workLink.style.visibility = 'hidden';
			contactLink.style.opacity = '0';
			contactLink.style.visibility = 'hidden';
			spoiler.style.visibility = 'hidden';

			spoiler.style.height = '0';
			spoiler.style.width = '0';

			logo.style.transition = '1s ease-out';
			socialText.style.opacity = '1';
			logo.style.width = '10%';
			container.style.height = '10%';
			socialText.style.height = '85%';		
			socialScroll= true;
			return false;
		} else {
			aboutLink.style.opacity = '1';
			aboutLink.style.visibility = 'visible';
			workLink.style.opacity = '1';
			workLink.style.visibility = 'visible';
			contactLink.style.opacity = '1';
			contactLink.style.visibility = 'visible';
			spoiler.style.visibility = 'visible';

			spoiler.style.height = '100%';
			spoiler.style.width = '100%';

			logo.style.transition = '1s ease-in';
			socialText.style.opacity = '0';
			logo.style.width = '75%';
			container.style.height = '100%';
			socialText.style.height = '0%';		
			socialScroll = false;
			return false;
		}
	}

	contactLink.onclick = function() {
		aboutText.style.visibility = 'hidden';
		workText.style.visibility = 'hidden';
		socialText.style.visibility = 'hidden';
		contactText.style.visibility = 'visible';
		if (contactScroll === false) {
			aboutLink.style.opacity = '0';
			aboutLink.style.visibility = 'hidden';
			workLink.style.opacity = '0';
			workLink.style.visibility = 'hidden';
			socialLink.style.opacity = '0';
			socialLink.style.visibility = 'hidden';
			spoiler.style.visibility = 'hidden';

			spoiler.style.height = '0';
			spoiler.style.width = '0';

			logo.style.transition = '1s ease-out';
			contactText.style.opacity = '1';
			logo.style.width = '10%';
			container.style.height = '10%';
			contactText.style.height = '85%';		
			contactScroll = true;
			return false;
		} else {
			aboutLink.style.opacity = '1';
			aboutLink.style.visibility = 'visible';
			workLink.style.opacity = '1';
			workLink.style.visibility = 'visible';
			socialLink.style.opacity = '1';
			socialLink.style.visibility = 'visible';
			spoiler.style.visibility = 'visible';

			spoiler.style.height = '100%';
			spoiler.style.width = '100%';

			logo.style.transition = '1s ease-in';
			contactText.style.opacity = '0';
			logo.style.width = '75%';
			container.style.height = '100%';
			contactText.style.height = '0%';		
			contactScroll = false;
			return false;
		}
	}
	logo.onmouseenter = function() {
		if (aboutScroll === true || workScroll === true || socialScroll === true || contactScroll === true) {
			logo.style.transition = '1s ease-in-out';
			logo.style.opacity = '1';
			spoiler.style.visibility = 'hidden';
		} else {
			//setTimeout(function() {
				spoiler.style.visibility = 'visible';
				logo.style.opacity = '0';
				spoiler.style.opacity = '1';	
				spoilerShow = true;
			//}, 1000);
		}
	}

	logo.onmouseout = function() {
		logo.style.opacity = '1';
		spoiler.style.opacity = '0';
	}
	/*YouTube.onmouseover = function() {
		YouTube.height = '200px';
	}*/
}

