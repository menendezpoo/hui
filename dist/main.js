module.exports=function(e){var i={};function t(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=i,t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)t.d(o,n,function(i){return e[i]}.bind(null,n));return o},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=2)}([function(e,i,t){"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(i){if(void 0===e[i]){var t=document.querySelector(i);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[i]=t}return e[i]}}(),u=[];function a(e){for(var i=-1,t=0;t<u.length;t++)if(u[t].identifier===e){i=t;break}return i}function c(e,i){for(var t={},o=[],n=0;n<e.length;n++){var r=e[n],c=i.base?r[0]+i.base:r[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var d=a(l),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(u[d].references++,u[d].updater(p)):u.push({identifier:l,updater:h(p,i),references:1}),o.push(l)}return o}function s(e){var i=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=t.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){i.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(i);else{var u=r(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(i)}return i}var l,d=(l=[],function(e,i){return l[e]=i,l.filter(Boolean).join("\n")});function p(e,i,t,o){var n=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(i,n);else{var r=document.createTextNode(n),u=e.childNodes;u[i]&&e.removeChild(u[i]),u.length?e.insertBefore(r,u[i]):e.appendChild(r)}}function f(e,i,t){var o=t.css,n=t.media,r=t.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,b=0;function h(e,i){var t,o,n;if(i.singleton){var r=b++;t=g||(g=s(i)),o=p.bind(null,t,r,!1),n=p.bind(null,t,r,!0)}else t=s(i),o=f.bind(null,t,i),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;o(e=i)}else n()}}e.exports=function(e,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=n());var t=c(e=e||[],i);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var n=a(t[o]);u[n].references--}for(var r=c(e,i),s=0;s<t.length;s++){var l=a(t[s]);0===u[l].references&&(u[l].updater(),u.splice(l,1))}t=r}}}},function(e,i,t){"use strict";e.exports=function(e){var i=[];return i.toString=function(){return this.map((function(i){var t=function(e,i){var t=e[1]||"",o=e[3];if(!o)return t;if(i&&"function"==typeof btoa){var n=(u=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([n]).join("\n")}var u,a,c;return[t].join("\n")}(i,e);return i[2]?"@media ".concat(i[2]," {").concat(t,"}"):t})).join("")},i.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var r=0;r<this.length;r++){var u=this[r][0];null!=u&&(n[u]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&n[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),i.push(c))}},i}},function(e,i,t){"use strict";t.r(i);t(3),t(14),t(16)},function(e,i,t){var o=t(0),n=t(4);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(n,r);e.exports=n.locals||{}},function(e,i,t){var o=t(1),n=t(5),r=t(6),u=t(7),a=t(8),c=t(9),s=t(10),l=t(11),d=t(12),p=t(13);i=o(!1);var f=n(r),g=n(u),b=n(a),h=n(c),m=n(s),v=n(l),x=n(d),w=n(p);i.push([e.i,"body{font:caption}.ui-panel>div{margin:50px}.ui-icon.icon-cross{background-image:url("+f+")}.ui-icon.icon-floppy{background-image:url("+g+")}.ui-icon.icon-file{background-image:url("+b+")}.ui-icon.icon-folder{background-image:url("+h+")}.ui-icon.icon-chevron-up{background-image:url("+m+")}.ui-icon.icon-chevron-down{background-image:url("+v+")}.ui-icon.icon-chevron-left{background-image:url("+x+")}.ui-icon.icon-chevron-right{background-image:url("+w+")}\n",""]),e.exports=i},function(e,i,t){"use strict";e.exports=function(e,i){return i||(i={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),i.hash&&(e+=i.hash),/["'() \t\n]/.test(e)||i.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/1b889a4d5e234aee94d06d274874a298.svg"},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/d1d25e41f877a1357853503703716c85.svg"},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/bcb81a66c85c02a6dd38a7010fe86f30.svg"},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/bd041ee3dd072567f88ee1b03bf101f5.svg"},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/70d7674a883c4e14b1f3aa61e114e537.svg"},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/291a2076d5767e7291e793746aee8e9d.svg"},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/2f28c5c23377bd4898076686b28b0a50.svg"},function(e,i,t){"use strict";t.r(i),i.default=t.p+"imgs/4206aed994e6be569d3f15fd37424ad7.svg"},function(e,i,t){var o=t(0),n=t(15);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(n,r);e.exports=n.locals||{}},function(e,i,t){(i=t(1)(!1)).push([e.i,".ui-clickable.is-open{background-color:Highlight;color:HighlightText}.ui-button-wrap.split:hover>.ui-button-split-part,.ui-button-wrap.split:hover>.ui-button,.ui-button:hover:not(.face-never):not(.disabled),.ui-clickable.selected:not(.disabled),.ui-button.is-open{background-color:Highlight;color:HighlightText}.ui-menuitem.is-open,.ui-menuitem.is-selected{background-color:Highlight;color:HighlightText}.ui-menu-overlay,.ui-suggestions-overlay{background-color:Window;color:WindowText;border:solid 1px #ddd;box-shadow:2px 2px 2px rgba(0,0,0,0.2)}.ui-separator:after{background-color:rgba(0,0,0,0.13)}.ui-item-group{border:solid 1px #ddd;border-radius:0.5em}.ui-item-group>.ui-clickable.selected:not(.disabled){background-color:#ddd}.ui-split-view>.dock-side{border-color:#ddd}.ui-tab-view>.tabs{background-color:#ddd}.ui-tab-view>.tabs>.items>.tab{margin-top:0.6em}.ui-tab-view>.tabs>.items>.selected{background-color:white}.ui-tree-view:focus .ui-tree-item.selected{background-color:Highlight;color:HighlightText}.ui-tree-item.selected{background-color:#f0f0f0;color:HighlightText}.ui-tree-item:not(.selected):hover{background-color:#E3EFFE}\n",""]),e.exports=i},function(e,i,t){var o=t(0),n=t(17);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(n,r);e.exports=n.locals||{}},function(e,i,t){(i=t(1)(!1)).push([e.i,".ui-button-wrap{display:inline-flex;align-items:stretch}.ui-button-wrap.split>.split-part>.ui-icon.size-8{margin-left:0}.ui-button{display:inline-flex;align-items:center;padding:0.6em}.ui-button>.ui-icon.size-8{margin-left:0.6em}.ui-clickable:not(.disabled){cursor:pointer}.ui-icon{background:center center no-repeat;background-size:100% 100%}.ui-icon.size-8{width:8px;height:8px}.ui-icon.size-16{width:16px;height:16px}.ui-icon.size-32{width:32px;height:32px}.ui-item-group{display:inline-flex;overflow:hidden;align-items:stretch}.ui-label.with-icon{display:flex;align-items:center}.ui-label.with-icon .ui-icon{margin-right:0.5em}.ui-label .desc{opacity:50%}.ui-separator{position:relative;height:1em}.ui-separator::after{display:block;position:absolute;content:'.';color:transparent;left:0;right:0;top:50%;height:1px}.ui-textbox{display:inline-flex;position:relative;border:solid 1px WindowFrame;background-color:white}.ui-textbox input{border:none;background-color:white}.ui-textbox input:focus{outline:none}.ui-menuitem{position:relative;display:flex;align-items:center;padding:0.6em;cursor:pointer}.ui-menuitem .ui-icon.icon-chevron-right{position:absolute;right:0.6em}.ui-menuitem .ui-label{padding-right:25px}.ui-tree-item{display:flex;padding:0.6em;align-items:center;cursor:pointer}.ui-tree-item>.collapse-glyph{margin-right:0.6em}.ui-dock-view,.ui-dock-view>.dock-side,.ui-dock-view>.main-side{position:absolute;top:0;left:0;right:0;bottom:0}.ui-dock-view .dock-side,.ui-dock-view>.main-side{overflow:auto}.ui-dock-view.side-left>.dock-side{right:auto}.ui-dock-view.side-top>.dock-side{bottom:auto}.ui-dock-view.side-right>.dock-side{left:auto}.ui-dock-view.side-bottom>.dock-side{top:auto}.ui-split-view.side-left>.dock-side{border-right-style:solid;border-right-width:1px}.ui-split-view.side-top>.dock-side{border-bottom-style:solid;border-bottom-width:1px}.ui-split-view.side-right>.dock-side{border-left-style:solid;border-left-width:1px}.ui-split-view.side-bottom>.dock-side{border-top-style:solid;border-top-width:1px}.ui-tab-view>.tabs>.items>.tab{padding-left:2em;padding-right:2em}.ui-tree-view{position:absolute;top:0;left:0;right:0;bottom:0}.ui-toolbar-view>.toolbar{display:flex;justify-content:space-between}.ui-toolbar-view>.toolbar>.items{display:flex;align-items:stretch}.ui-toolbar-view>.content{flex-grow:1;overflow:auto}.ui-toolbar-view.side-left>.toolbar,.ui-toolbar-view.side-right>.toolbar{flex-direction:column}.ui-menu-overlay{min-width:100px;box-shadow:3px 3px 3px rgba(0,0,0,0.3);z-index:10000}.ui-suggestions-overlay{background-color:Menu}.ui-suggestions-overlay .ui-clickable,.ui-suggestions-overlay .ui-loader{padding:0.6em}.ui-overlay{position:fixed;z-index:10000}\n",""]),e.exports=i}]);
//# sourceMappingURL=main.js.map