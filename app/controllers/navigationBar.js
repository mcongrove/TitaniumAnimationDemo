var App = require("core");

if(OS_IOS && App.Device.versionMajor >= 7) {
	$.wrapper.height = 67;
	$.title.top = 20;
}