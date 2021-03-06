$('.ready-widget .HTML .widget-content span.mainlabel').each(function () {
	var v = $(this).attr("data-label"),
	b = $(this).attr("data-no");
	$.ajax({
		url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
		type: 'get',
		dataType: "jsonp",
		success: function (e) {
			var u = "";
			var h = '<ul class="custom-widget">';
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
					var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
					var k = p
				} else if (c.indexOf("<img") > -1) {
					var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
					var k = q
				} else {
					var k = no_image
				}
				h += '<li><a class="rcthumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div></li>'
			}
			h += '</ul>';
			$(".ready-widget .HTML .widget-content span.mainlabel").each(function () {
				var text = $(this).attr("data-label");
				if (text == v) {
					$(this).parent().html(h)
				}
			})
		}
	})
});
