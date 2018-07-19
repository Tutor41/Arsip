// Random Post Widget
var homePage = 'https://www.tutor41.com',
    maxResults = 30,
    containerId = 'recentpost-random';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(arr) {
    var i = arr.length, j, temp;
    if (i === 0) return false;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function ArlinaRandomPosts(json) {
    var startIndex = getRandomInt(1, (json.feed.openSearch$totalResults.$t - maxResults));
    // console.log('Get the post feed start from ' + startIndex + ' until ' + (startIndex + maxResults));
    document.write('<scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index=' + startIndex + '&max-results=' + maxResults + '&callback=randomPosts"></scr' + 'ipt>');
}
function randomPosts(json) {
    var link, ct = document.getElementById(containerId),
        entry = shuffleArray(json.feed.entry),
        skeleton = "<ul>";
    for (var i = 0, len = entry.length; i < len; i++) {
        for (var j = 0, jen = entry[i].link.length; j < jen; j++) {
            link = (entry[i].link[j].rel == "alternate") ? entry[i].link[j].href : '#';
        }
        skeleton += '<li><a href="' + link + '">' + entry[i].title.$t + '</a></li>';
    }
    ct.innerHTML = skeleton + '</ul>';
}
document.write('<scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&max-results=0&callback=ArlinaRandomPosts"></scr' + 'ipt>');
