var App = require("core");

var menuIsOpen = false,
	drawerIsOpen = false,
	isTouching = false,
	xStart = 0;

function openMenu() {
	if(!menuIsOpen) { 
		$.content.animate({
			left: 0,
			duration: 250,
			curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		
		menuIsOpen = true;
	}
}

function closeMenu() {
	if(menuIsOpen) {
		$.content.animate({
			left: -300,
			duration: 250,
			curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
		});
		
		menuIsOpen = false;
	}
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

$.menuWrapper.addEventListener("touchstart", function(_event) {
	isTouching = true;
	
	xStart = _event.x;
});

$.wrapper.addEventListener("touchmove", function(_event) {
	if(isTouching) {
		var point = $.menuWrapper.convertPointToView({
			x: _event.x,
			y: _event.y
		}, $.wrapper);
		
		var difference = (point.x - xStart);
			difference = difference > 0 ? 0 : difference;
			difference = difference < -300 ? -300 : difference;
		
		$.content.left = difference;
	}
});

$.wrapper.addEventListener("touchend", function(_event) {
	isTouching = false;
});

$.wrapper.addEventListener("touchcancel", function(_event) {
	isTouching = false;
});

$.drawerWrapper.addEventListener("swipe", function(_event) {
	if(!drawerIsOpen && _event.direction == "down") {
		openDrawer();
	} else if(drawerIsOpen && _event.direction == "up") {
		closeDrawer();
	}
});