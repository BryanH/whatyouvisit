
var WhatYouVisit=function(moreSites){var sites={"Blinklist":["http://www.blinklist.com"],"Blogger":["http://blogger.com"],"Blogmarks":["http://blogmarks.net"],"Current":["http://current.com","http://current.com/login.html"],"Del.icio.us":["https://secure.del.icio.us/login","http://del.icio.us/"],"Digg":["http://digg.com","http://digg.com/login"],"Diigo":["http://www.diigo.com/","https://secure.diigo.com/sign-in"],"Facebook":["http://facebook.com/home.php","http://facebook.com","https://login.facebook.com/login.php"],"Fark":["http://www.fark.com","http://cgi.fark.com/cgi/fark/users.pl?self=1"],"Faves":["http://faves.com","http://faves.com/home","https://secure.faves.com/signIn"],"Funp":["http://funp.com","http://funp.com/account/loginpage.php"],"Furl":["http://furl.net","http://furl.net/members/login"],"Google Bookmarks":["http://www.google.com/bookmarks","http://www.google.com/ig/add?moduleurl=bookmarks.xml&hl=en"],"Kirtsy":["http://www.kirtsy.com","http://www.kirtsy.com/login.php"],"Last.fm":["http://www.last.fm/","https://www.last.fm/login/"],"Ma.gnolia":["http://ma.gnolia.com/"],"Menaeme":["http://meneame.net","http://meneame.net/login.php"],"Mister Wong":["http://www.mister-wong.com"],"Mixx":["https://www.mixx.com/login/dual","http://www.mixx.com"],"MySpace":["http://www.myspace.com/"],"N4G":["http://www.n4g.com"],"Newsvine":["https://www.newsvine.com","https://www.newsvine.com/_tools/user/login"],"Oknotizie":["http://oknotizie.alice.it","http://oknotizie.alice.it/login.html.php"],"Reddit":["http://reddit.com","http://reddit.com/new/","http://reddit.com/controversial/","http://reddit.com/top/","http://reddit.com/r/reddit.com/","http://reddit.com/r/programming/"],"Simpy":["http://www.simpy.com","http://www.simpy.com/login"],"Slashdot":["http://slashdot.org/"],"Songza":["http://songza.com"],"StumbleUpon":["http://stumbleupon.com"],"Subbmitt":["http://subbmitt.com/"],"Technorati":["http://www.technorati.com"],"Xanga":["http://xanga.com"],"Yahoo Bookmarks":["http://bookmarks.yahoo.com"],"Yahoo Buzz":["http://buzz.yahoo.com"],"Yigg":["http://www.yigg.de"]};for(var site in moreSites){if(typeof(sites[site])=="undefined")sites[site]=[];if(typeof(moreSites[site])=="string")
sites[site].push(moreSites[site]);else
sites[site]=sites[site].concat(moreSites[site]);}
var visited={};function getStyle(el,scopeDoc,styleProp){if(el.currentStyle)
var y=el.currentStyle[styleProp];else if(window.getComputedStyle)
var y=scopeDoc.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp);return y;}
function remove(el){el.parentNode.removeChild(el);}
function createIframe(){var iframe=document.createElement("iframe");iframe.style.position="absolute";iframe.style.visibility="hidden";document.body.appendChild(iframe);if(iframe.contentDocument)iframe.doc=iframe.contentDocument;else if(iframe.contentWindow)iframe.doc=iframe.contentWindow.document;iframe.doc.open();iframe.doc.write('<style>');iframe.doc.write("a{color: #000000; display:none;}");iframe.doc.write("a:visited {color: #FF0000; display:inline;}");iframe.doc.write('</style>');iframe.doc.close();return iframe;}
var iframe=createIframe();function embedLinkInIframe(href,text){var a=iframe.doc.createElement("a");a.href=href;a.innerHTML=site;iframe.doc.body.appendChild(a);}
for(var site in sites){var urls=sites[site];for(var i=0;i<urls.length;i++){embedLinkInIframe(urls[i],site);if(urls[i].match(/www\./)){var sansWWW=urls[i].replace(/www\./,"");embedLinkInIframe(sansWWW,site);}else{var httpLen=urls[i].indexOf("//")+2;var withWWW=urls[i].substring(0,httpLen)+"www."+urls[i].substring(httpLen);embedLinkInIframe(withWWW,site);}}}
var links=iframe.doc.body.childNodes;for(var i=0;i<links.length;i++){var displayValue=getStyle(links[i],iframe.doc,"display");var didVisit=displayValue!="none";if(didVisit){visited[links[i].innerHTML]=true;}}
remove(iframe);return new(function(){var usedSites=[];for(var site in visited){usedSites.push(site);}
this.visitedSites=function(){return usedSites;}
this.doesVisit=function(site){if(typeof(sites[site])=="undefined")
return-1;return typeof(visited[site])!="undefined";}
var checkedSites=[];for(var site in sites){checkedSites.push(site);}
this.checkedSites=function(){return checkedSites;}})();}