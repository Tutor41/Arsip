$(document).ready(function () {
	$(".comments-tabs").simpleTab({
		active: 1,
		fx: "fade",
		showSpeed: 400,
		hideSpeed: 400
	});
	$('.tab-blogger').append($('#comments'));
	$(".comments-tabs.simpleTab .tab-wrapper").wrap("<div class='comments-tabs-header'/>");
	$('.comments-tabs-header').prepend('<h3>' + comments_text + '</h3>')
});
$(document).ready(function () {
	var search = $('.search');
	search.click(function (e) {
		e.preventDefault();
		if (search.is('.active') && $(e.target).is(search)) {
			search.removeClass('active')
		} else {
			search.addClass('active');
			search.find('input').focus()
		}
	});
	$('body').click(function (e) {
		if (search.is('.active') && !$(e.target).is('.search, .search form, .search input')) {
			search.removeClass('active')
		}
	});
	$(".index .post-outer,.archive .post-outer").each(function () {
		$(this).find(".block-image .thumb a").attr("style", function (a, b) {
			return b.replace("/default.jpg", "/mqdefault.jpg")
		}).attr("style", function (a, b) {
			return b.replace("s72-c", "s1600")
		})
	});
	$(".index .post-outer,.archive .post-outer").each(function () {
		$(this).find(".block-image .thumb a").attr("style", function (a, b) {
			return b.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png", "" + no_image + "")
		})
	});
	$('.PopularPosts ul li img').each(function () {
		$(this).attr('src', function (i, src) {
			return src.replace('/default.jpg', '/mqdefault.jpg')
		}).attr('src', function (i, src) {
			return src.replace('s72-c', 's1600')
		})
	});
	$(".PopularPosts .item-thumbnail a").prepend('<span class="img-overlay"/>');
	$(".sect-left .widget h2").wrap("<div class='title-wrap'/>");
	$(".back-top").click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var a = $(this.hash);
			a = a.length ? a: $("[name=" + this.hash.slice(1) + "]");
			if (a.length) {
				$("html,body").animate({
					scrollTop: a.offset().top
				},
				1e3);
				return false
			}
		}
	});
	$(".social-counter").each(function () {
		var a = $(this);
		var b = $(this).find(".item-social");
		if (0 === b.length) a.remove();
		$(this).find(".widget").removeClass("LinkList");
		$(".social-counter .item-social.facebook").find(".item-text").text("Likes");
		$(".social-counter .item-social.rss,.social-counter .item-social.youtube").find(".item-text").text("Subs");
		var c = "count=";
		var d = ";";
		$(".social-counter *").replaceText(c, '<span class="item-count">');
		$(".social-counter *").replaceText(d, "</span>");
		$(".item-social").each(function () {
			var a = $(this).find(".hide-count");
			var b = $(this).find(".item-count");
			$(a).before($(b));
			$(a).remove()
		})
	})
});
$(document).ready(function () {
	var n = $("#sidetabs #tabside1 .widget h2").text();
	$(".menu-tab .item-1 a").text(n);
	var u = $("#sidetabs #tabside2 .widget h2").text();
	$(".menu-tab .item-2 a").text(u);
	$("#tabside1 .widget h2,#tabside2 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title").remove();
	$(this).find(".menu-tab li").addClass("hide-tab");
	$(".sidetabs").tabslet({
		mouseevent: "click",
		attribute: "href",
		animation: true
	});
	if (0 === $(".sidetabs .widget").length) $(".sidetabs").remove()
});
$(document).ready(function (a) {
	var b = a("a.newer-link");
	var c = a("a.older-link");
	a.get(b.attr("href"), function (c) {
		b.html("<strong>" + pagenav_next + "</strong><span>" + a(c).find(".post h1.post-title").text() + "</span>")
	},
	"html");
	a.get(c.attr("href"), function (b) {
		c.html("<strong>" + pagenav_prev + "</strong><span>" + a(b).find(".post h1.post-title").text() + "</span>")
	},
	"html")
});
$(document).ready(function () {
	var t = $(".item #post-ads-footer");
	$(".item .post *").replaceText('<div class="ad-post-footer"/>');
	$(".ad-post-footer").append(t);
	var n = $(".post-body #post-ads-footer").width();
	$(".post-body .ad-post-footer").width(n)
});
$(document).ready(function () {
	$('a').each(function () {
		var a = $(this).attr('href'),
		e = $(this);
		if (a !== undefined) {
			if (a.indexOf('/search/label') != -1) {
				if (a.indexOf('max-results') != -1) {
					var t = getParameterByName('max-results', a),
					n = a.replace('max-results=' + t, 'max-results=' + postperpage);
					e.attr('href', n)
				} else {
					if (a.indexOf('?') == -1) {
						e.attr('href', a + "?&max-results=" + postperpage)
					} else {
						e.attr('href', a + "&max-results=" + postperpage)
					}
				}
			}
		}
	})
});
$(".ticker .HTML .widget-content").each(function () {
	var b = $(this).find("span").attr("data-no"),
	v = $(this).find("span").attr("data-label"),
	box = $(this).find("span").attr("data-type");
	if (box.match('recent')) {
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=" + b,
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
					h += '<li><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3></li>'
				}
				h += '</ul>';
				$(".ticker .widget-content").each(function () {
					$(this).html(h);
					$(this).prev('h2').prepend('<i class="fa fa-rocket"></i>');
					$(this).find('ul').webTicker()
				})
			}
		})
	} else if (box.match('label')) {
		$.ajax({
			url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
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
					h += '<li><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3></li>'
				}
				h += '</ul>';
				$(".ticker .HTML .widget-content").each(function () {
					$(this).html(h);
					$(this).prev('h2').prepend('<i class="fa fa-thumb-tack"></i>');
					$(this).find('ul').webTicker()
				})
			}
		})
	}
});
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
$('.ready-widget .HTML .widget-content span.recentcomments').each(function () {
	var b = $(this).attr("data-no");
	$.ajax({
		url: "/feeds/comments/default?alt=json-in-script&max-results=" + b,
		type: 'get',
		dataType: "jsonp",
		success: function (e) {
			var u = "";
			var h = '<ul class="cmm-widget">';
			for (var i = 0; i < e.feed.entry.length; i++) {
				if (i == e.feed.entry.length) break;
				for (var j = 0; j < e.feed.entry[i].link.length; j++) {
					if (e.feed.entry[i].link[j].rel == 'alternate') {
						u = e.feed.entry[i].link[j].href;
						break
					}
				}
				if ("content" in e.feed.entry[i]) {
					var c = e.feed.entry[i].content.$t
				} else if ("summary" in b_rc) {
					var c = e.feed.entry[i].summary.$t
				} else var c = "";
				var re = /<\S[^>]*>/g;
				c = c.replace(re, "");
				if (c.length > 70) {
					c = '' + c.substring(0, 50) + '...'
				}
				var y = e.feed.entry[i].author[0].name.$t;
				var yk = e.feed.entry[i].author[0].gd$image.src;
				if (yk.match('http://img1.blogblog.com/img/blank.gif')) {
					var k = 'http://img1.blogblog.com/img/anon36.png'
				} else {
					if (yk.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
						var k = 'http://img1.blogblog.com/img/anon36.png'
					} else {
						var k = yk
					}
				};
				h += '<li><div class="cmm-avatar"><img class="cmm-img" src="' + k + '"/></div><a href="' + u + '">' + y + '</a><span>"' + c + '"</span></li>'
			}
			h += '</ul><div class="clear"/>';
			$('.ready-widget .HTML .widget-content span.recentcomments').each(function () {
				var text = $(this).attr("data-no");
				if (text == b) {
					$(this).parent().html(h)
				}
			})
		}
	})
});
$('.ready-widget .HTML .widget-content span.recentposts').each(function () {
	var b = $(this).attr("data-no");
	$.ajax({
		url: "/feeds/posts/default?alt=json-in-script&max-results=" + b,
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
			$('.ready-widget .HTML .widget-content span.recentposts').each(function () {
				var text = $(this).attr("data-no");
				if (text == b) {
					$(this).parent().html(h)
				}
			})
		}
	})
});
$('.ready-widget .HTML .widget-content span.labelpost').each(function () {
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
			$(".ready-widget .HTML .widget-content span.labelpost").each(function () {
				var text = $(this).attr("data-label");
				if (text == v) {
					$(this).parent().html(h)
				}
			})
		}
	})
});
$("#related-posts").each(function () {
	var v = $(this).text();
	$.ajax({
		url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + related_number,
		type: 'get',
		dataType: "jsonp",
		success: function (e) {
			var u = "";
			var h = '<div class="related-wrap">';
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
				h += '<li><div class="related-thumb"><a class="related-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="related-overlay"/></a></div><div class="related-content"><div class="related-tag"><a class="icon ' + s + '" href="/search/label/' + s + '">' + s + '</a></div><h3 class="related-title"><a href="' + u + '">' + g + '</a></h3></div></li>'
			}
			h += '</div><div class="clear"/>';
			$("#related-posts").html(h);
			$(this).find('.related-img').each(function () {
				$(this).attr('style', function (i, src) {
					return src.replace('/default.jpg', '/mqdefault.jpg')
				}).attr('style', function (i, src) {
					return src.replace('s72-c', 's1600')
				})
			})
		}
	})
});
