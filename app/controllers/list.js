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
}

init();