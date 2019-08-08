function git_api_get(url, cb) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url);
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			cb(xhr.response);
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
		git_api_get(fst.download_url, function (resp) {
			var data = JSON.parse(resp);
			var items = data.batchrsp.items;
			for (i in items) {
				var item = JSON.parse(items[i].item);
				console.log(item);
				var innerHTML = '<img src=' + item.ad.image_fullscreen_001_landscape.u + ' width=1024 height=576>' + '<img src=' + item.ad.image_fullscreen_001_portrait.u + ' height=576>';
				innerHTML += item.ad.title_text.tx + ' ' + item.ad.copyright_text.tx;
				var readme = '<br><a href=https://github.com/webkb/windows_spotlight target=_blank>read me</a> <a href=javascript:prev();>Prev</a>'
				document.body.innerHTML = innerHTML + readme;
			}
		});
	}
}
function prev() {
	p.i--;
	if (p.i >= 0) {
		var fst = p.con[p.i];
		git_api_get(fst.download_url, function (resp) {
			var data = JSON.parse(resp);
			var items = data.batchrsp.items;
			for (i in items) {
				var item = JSON.parse(items[i].item);
				console.log(item);
				var innerHTML = '<img src=' + item.ad.image_fullscreen_001_landscape.u + ' width=1024 height=576>' + '<img src=' + item.ad.image_fullscreen_001_portrait.u + ' height=576>';
				innerHTML += item.ad.title_text.tx + ' ' + item.ad.copyright_text.tx;
				var readme = '<br><a href=https://github.com/webkb/windows_spotlight target=_blank>read me</a> <a href=javascript:prev();>Prev</a>'
				document.body.innerHTML = innerHTML + readme;
			}
		});
	}
}