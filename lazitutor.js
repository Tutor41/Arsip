// lazitutor
function lztutor(d)window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
// lazitutor Event
function lazyLoad(){for(var e=document.getElementsByClassName("lazitutor"),t=0;t<e.length;t++)isInViewport(e[t])&&(e[t].src=e[t].getAttribute("data-src"))}function isInViewport(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}function registerListener(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)}registerListener("load",lazyLoad),registerListener("scroll",lazyLoad);document.addEventListener("DOMContentLoaded",function(){"use strict";for(var e=document.querySelectorAll("a"),t=e.length,n=/firefox|trident/i.test(navigator.userAgent)?document.documentElement:document.body,o=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t};t--;)e.item(t).addEventListener("click",function(e){var t,r=n.scrollTop,i=document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top,c=n.scrollHeight-window.innerHeight,u=c>r+i?i:c-r,d=900,l=function(e){t=t||e;var i=e-t,c=o(i,r,u,d);n.scrollTop=c,d>i&&requestAnimationFrame(l)};requestAnimationFrame(l),e.preventDefault()})});
