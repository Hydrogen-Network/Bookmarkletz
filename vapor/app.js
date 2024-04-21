/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /gh/FogNetwork/Vapor@master/app.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var title = document.createElement("div");
title.className = "vaportitle", title.innerText = "Vapor", appid.appendChild(title);
var items = document.createElement("center");


var tab = document.createElement("button");
tab.className = "vaportab";
tab.innerText = "Tab Cloak";
tab.setAttribute("onclick", 'new Nightmare({"title": "Tab Cloak","type": "js","js": "https://cdn.jsdelivr.net/gh/FogNetwork/Vapor/tab.min.js","width": 400,"height": 300,"theme": "dark"})');
items.appendChild(tab);

var inspect = document.createElement("button");
inspect.className = "vaportab", inspect.innerText = "Avo", inspect.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Avo/avo.min.js';document.body.appendChild(a);}())"), items.appendChild(inspect); 

var title = document.createElement("button");
inspect.className = "vaportab", inspect.innerText = "Titlerun", inspect.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://raw.githack.com/Hydrogen-Network/Bookmarkletz/master/vapor/titlerun.js';document.body.appendChild(a);}())"), items.appendChild(title); 

var ingot = document.createElement("button");
inspect.className = "vaportab", inspect.innerText = "Ingot", inspect.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js';document.body.appendChild(a);}())"), items.appendChild(title); 

appid.appendChild(items);
var vaporstyle = document.createElement("style");
vaporstyle.innerText = ".vaportitle {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.vaportab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .vaportab:hover {background: darkslategrey;}", document.getElementsByTagName("html")[0].appendChild(vaporstyle);
//# sourceMappingURL=/sm/178c24625af1941a8ee915cd807365408201df616d1c4e8347a959a0238af504.map
