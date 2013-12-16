var App = require("core");

function calculateUI() {
	var children = $.wrapper.children;
	var height = App.Device.height - 47;
	var iconSize;
	
	if(OS_IOS && App.Device.versionMajor >= 7) {
		height = height - 20;
	}
	
	iconSize = ((height - 500) / 9);
	
	for(var i = 0, x = children.length; i < x; i++) {
		if(children[i].image) {
			children[i].width = iconSize;
			children[i].height = iconSize;
		}
	}
}

calculateUI();
