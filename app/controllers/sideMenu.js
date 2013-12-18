var App = require("core");

var accordionOpen = false;

function toggleAccordion(_event) {
	if(!accordionOpen) {
		Ti.API.error("Opening");
		$.accordion.visible = true;
		
		$.accordion.animate({
			height: 200,
			duration: 250
		});
		
		accordionOpen = true;
	} else {
		Ti.API.error("Closing");
		$.accordion.animate({
			height: 1,
			duration: 250
		}, function() {
			$.accordion.visible = false;
		});
		
		accordionOpen = false;
	}
}

function calculateUI() {
	var containers = $.wrapper.children;
	var height = App.Device.height - 47;
	var iconSize;
	
	if(OS_IOS && App.Device.versionMajor >= 7) {
		height = height - 20;
	} else if(OS_ANDROID) {
		height = height;
	}
	
	iconSize = ((height - 500) / 9);
	
	for(var i = 0, x = containers.length; i < x; i++) {
		var children = containers[i].children;
		
		for(var q = 0, z = children.length; q < z; q++) {
			if(children[q].image) {
				children[q].width = iconSize;
				children[q].height = iconSize;
				
				if(i == (containers.length - 1) && q == 0) {
					children[q].addEventListener("click", toggleAccordion);
				}
			}
		}
		
		containers[i].visible = true;
	}
}

setTimeout(function() {
	calculateUI();
}, 1000);