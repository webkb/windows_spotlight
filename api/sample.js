var URL_ROOT = 'https://api.github.com/repos/webkb/windows_spotlight';
var hui = {};

function xhr (url,call_function) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url);
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			call_function(xhr.response);
		}
	}
}
function xhr_info (url) {
	xhr(url, function (data) {
		var innerHTML = '';
		var items = JSON.parse(data).batchrsp.items;
		for (var i in items) {
			var item = JSON.parse(items[i].item);
			console.log(item);
			if (typeof item.ad.image_fullscreen_001_landscape != 'undefined') {
				innerHTML += '<img src=' + item.ad.image_fullscreen_001_landscape.u + ' height=500>' + '<img src=' + item.ad.image_fullscreen_001_portrait.u + ' height=500><br>' + item.ad.title_text.tx + ' ' + item.ad.copyright_text.tx + '<br>';
			} else if (typeof item.ad.properties.landscapeImage.image != 'undefined') {
				innerHTML += '<img src=' + item.ad.properties.landscapeImage.image + ' height=500>' + '<img src=' + item.ad.properties.portraitImage.image + ' height=500><br>' + item.ad.items[0].properties.description.text + ' ' + item.ad.items[0].properties.copyright.text + '<br>';
			}
			
		}
		innerHTML += hui.count + '<br><a href=javascript:prev();>Prev</a> <a href=javascript:next();>Next</a>';
		var readme = '<br><a href=https://github.com/webkb/windows_spotlight target=_blank>read me</a>';
		document.body.innerHTML = innerHTML + readme;
	});
}

function get_list() {
	xhr(URL_ROOT + '/contents' + '/text', function (data) {
		hui.con = JSON.parse(data);
		hui.index = hui.con.length - 1;
		hui.count = (hui.index + 1) + ' / ' + hui.con.length;
		xhr_info(hui.con[hui.index].download_url);
	});
}

function prev() {
	if (hui.index > 0) {
		hui.index--;
		hui.count = (hui.index + 1) + ' / ' + hui.con.length;
		xhr_info(hui.con[hui.index].download_url);
	}
}
function next() {
	if (hui.index < hui.con.length - 1) {
		hui.index++;
		hui.count = (hui.index + 1) + ' / ' + hui.con.length;
		xhr_info(hui.con[hui.index].download_url);
	}
}

get_list();