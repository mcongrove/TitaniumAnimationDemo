var App = require("core");

var menuIsOpen = false,
	drawerIsOpen = false;

function openMenu() {
	$.content.animate({
		left: 0,
		duration: 250,
		curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	menuIsOpen = true;
}

function closeMenu() {
	$.content.animate({
		left: -300,
		duration: 250,
		curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	menuIsOpen = false;
}

function openDrawer() {
	$.drawerWrapper.animate({
		height: 240,
		duration: 250,
		curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	drawerIsOpen = true;
}

function closeDrawer() {
	$.drawerWrapper.animate({
		height: 40,
		duration: 250,
		curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	drawerIsOpen = false;
}

if(OS_IOS && App.Device.versionMajor >= 7) {
	$.content.top = 67;
	$.drawerWrapper.top = 67;
}

$.menuWrapper.addEventListener("swipe", function(_event) {
	if(!menuIsOpen && _event.direction == "right") {
		openMenu();
	} else if(menuIsOpen && _event.direction == "left") {
		closeMenu();
	}
});

$.drawerWrapper.addEventListener("swipe", function(_event) {
	if(!drawerIsOpen && _event.direction == "down") {
		openDrawer();
	} else if(drawerIsOpen && _event.direction == "up") {
		closeDrawer();
	}
});