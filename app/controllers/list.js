function init() {
	var contentFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "data/listItems.json");
	var content = contentFile.read();
	var data = JSON.parse(content.text);
	var items = data.listItems;
		
	for(var i = 0, x = items.length; i < x; i++) {
		var listItem = Alloy.createController("listItem", items[i]).getView();
		
		if(i == (x - 1)) {
			listItem.right = 75;
		}
		
		$.wrapper.add(listItem);
	}
	
	$.wrapper.contentWidth = ((455 * items.length) + 75);
}

Ti.App.addEventListener("expand", function(_event) {
	$.wrapper.contentHeight = "auto";
	
	if(_event.expanded) {
		$.wrapper.contentWidth = $.wrapper.contentWidth + 200;
	} else {
		$.wrapper.contentWidth = $.wrapper.contentWidth - 200;
	}
});

init();