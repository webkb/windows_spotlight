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
		var data = JSON.parse(xhr.response);
		var item = data[0];
		git_api_get(item.download_url, function (resp) {
			console.log(resp)
		});
	}
}