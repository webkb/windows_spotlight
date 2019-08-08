function xhr_info(url) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url);
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var data = JSON.parse(xhr.response);
			var items = data.batchrsp.items;
			for (var i in items) {
				var item = JSON.parse(items[i].item);
				console.log(item);
				var innerHTML = '<img src=' + item.ad.image_fullscreen_001_landscape.u + ' height=568>' + '<img src=' + item.ad.image_fullscreen_001_portrait.u + ' height=568>';
				innerHTML += item.ad.title_text.tx + ' ' + item.ad.copyright_text.tx;
				var readme = '<br><a href=https://github.com/webkb/windows_spotlight target=_blank>read me</a> <a href=javascript:next();>Next</a> <a href=javascript:prev();>Prev</a>'
				document.body.innerHTML = innerHTML + readme;
			}
		}
	}
}

var p ={};

var xhr = new XMLHttpRequest();
xhr.open('get', 'https://api.github.com/repos/webkb/windows_spotlight/contents/text');
xhr.send(null);
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
		p.con = JSON.parse(xhr.response);
		p.i = p.con.length - 1;
		var fst = p.con[p.i];
		xhr_info(fst.download_url);
	}
}
function prev() {
	if (p.i > 0) {
		p.i--;
		var fst = p.con[p.i];
		xhr_info(fst.download_url);
	}
}
function next() {

	if (p.i < p.con.length - 1) {
		p.i++;
		var fst = p.con[p.i];
		xhr_info(fst.download_url);
	}
}