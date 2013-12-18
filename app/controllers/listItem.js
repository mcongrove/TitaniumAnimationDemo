var ARGS = arguments[0] || {};

$.wrapper.backgroundColor = ARGS.color.background;
$.image.image = ARGS.image;
$.heading.text = ARGS.heading;
$.heading.color = ARGS.color.text;
$.text.text = ARGS.text;
$.text.color = ARGS.color.text;

if(ARGS.expandable) {
	var expanded = false;
	
	$.expand = Ti.UI.createImageView({
		top: 20,
		right: 20,
		height: 50,
		width: 50,
		image: "/images/expand.png"
	});
	
	$.expand.addEventListener("click", function(_event) {
		if(!expanded) {
			Ti.App.fireEvent("expand", { expanded: true });
			
			$.wrapper.animate({
				width: 580,
				duration: 500
			});
			
			expanded = true;
		} else {
			$.wrapper.animate({
				width: 380,
				duration: 500
			}, function() {
				Ti.App.fireEvent("expand", { expanded: false });
			});
			
			expanded = false;
		}
	});
	
	$.wrapper.add($.expand);
}