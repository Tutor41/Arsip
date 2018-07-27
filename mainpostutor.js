$('.featured .HTML .widget-content').each(function () {
	var v = $(this).find("span").attr("data-label"),
	box = $(this).find("span").attr("data-type");
	if (box.match('recent')) {
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=4",
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<ul>';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var y = e.feed.entry[i].author[0].name.$t;
					var d = e.feed.entry[i].published.$t,
					t = d.substring(0, 4),
					w = d.substring(5, 7),
					f = d.substring(8, 10),
					r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					if (c.indexOf("//www.youtube.com/embed/") > -1) {
						var p = e.feed.entry[i].media$thumbnail.url;
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src');
						var k = q
					} else {
						var k = no_image
					}
					h += '<li><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-author idel">' + y + '</span><span class="featured-date">' + r + '</span></div></div></div></li>'
				}
				h += '</ul>';
				$(".featured .HTML .widget-content").each(function () {
					$(this).html(h);
					$(this).find('.rcp-thumb').each(function () {
						$(this).attr('style', function (i, src) {
							return src.replace('/default.jpg', '/mqdefault.jpg')
						}).attr('style', function (i, src) {
							return src.replace('s72-c', 's1600')
						})
					})
				})
			}
		})
	} else if (box.match('label')) {
		$.ajax({
			url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=4",
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<ul>';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var y = e.feed.entry[i].author[0].name.$t;
					var d = e.feed.entry[i].published.$t,
					t = d.substring(0, 4),
					w = d.substring(5, 7),
					f = d.substring(8, 10),
					r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					if (c.indexOf("//www.youtube.com/embed/") > -1) {
						var p = e.feed.entry[i].media$thumbnail.url;
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src');
						var k = q
					} else {
						var k = no_image
					}
					h += '<li><div class="featured-inner"><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><a class="rcp-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><div class="featured-meta"><span class="featured-author idel">' + y + '</span><span class="featured-date">' + r + '</span></div></div></div></li>'
				}
				h += '</ul>';
				$(".featured .HTML .widget-content").each(function () {
					$(this).html(h);
					$(this).find('.rcp-thumb').each(function () {
						$(this).attr('style', function (i, src) {
							return src.replace('/default.jpg', '/mqdefault.jpg')
						}).attr('style', function (i, src) {
							return src.replace('s72-c', 's1600')
						})
					})
				})
			}
		})
	}
});
