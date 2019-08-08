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


var xhr = new XMLHttpRequest();
xhr.open('get', 'https://api.github.com/repos/webkb/windows_spotlight/contents/text');
xhr.send(null);
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
		var con = JSON.parse(xhr.response);
		var fst = con[0];
		git_api_get(fst.download_url, function (resp) {
			var data = JSON.parse(resp);
			var items = data.batchrsp.items;
			for (i in items) {
				var item = JSON.parse(items[i].item);
				console.log(item);
				var innerHTML = '<img src=' + item.ad.image_fullscreen_001_landscape.u + ' width=1024 height=576>' + '<img src=' + item.ad.image_fullscreen_001_portrait.u + ' height=576>';
				innerHTML += item.ad.title_text.tx + ' ' + item.ad.copyright_text.tx;
				document.body.innerHTML = innerHTML;
			}
		});
	}
}