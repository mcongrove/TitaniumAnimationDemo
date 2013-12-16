var App = require("core");

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
			}
		}
	}
}

calculateUI();