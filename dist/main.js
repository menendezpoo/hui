!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0)),o=n(4);t.Label=e=>{if(e.icon&&!e.text)return r.createElement("div",{className:"ui-label"},r.createElement(o.Icon,{name:e.icon,size:e.iconSize}));if(e.icon||e.description){if(!e.icon&&e.description)return r.createElement("div",{className:"ui-label"},r.createElement("div",{className:"text"},e.text),r.createElement("div",{className:"desc"},e.description));if(e.icon)return e.description?r.createElement("div",{className:"ui-label with-icon"},r.createElement(o.Icon,{name:e.icon,size:e.iconSize}),r.createElement("div",{className:"text-side"},r.createElement("div",{className:"text"},e.text),r.createElement("div",{className:"desc"},e.description))):r.createElement("div",{className:"ui-label with-icon"},r.createElement(o.Icon,{name:e.icon,size:e.iconSize}),r.createElement("div",{className:"text"},e.text));throw"Undesired state"}return r.createElement("div",{className:"ui-label"},e.text)}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c={};function a(e,t,n){for(var i=0;i<t.length;i++){var r={css:t[i][1],media:t[i][2],sourceMap:t[i][3]};c[e][i]?c[e][i](r):c[e].push(h(r,n))}}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(o,c[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,m=0;function h(e,t){var n,i,r;if(t.singleton){var o=m++;n=p||(p=l(t)),i=d.bind(null,n,o,!1),r=d.bind(null,n,o,!0)}else n=l(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],c[e]||(c[e]=[]),a(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){c[e]||(c[e]=[]),a(e,t,n);for(var i=t.length;i<c[e].length;i++)c[e][i]();c[e].length=t.length,0===c[e].length&&delete c[e]}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(c=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var c,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0));t.Icon=e=>r.createElement("div",{className:`ui-icon size-${e.size||16} icon-${e.name}`})},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0)),o=i(n(6)),c=n(7);n(8),n(19);const a=n(21),l=n(23),s=n(1),u=n(24);o.render(r.createElement(c.Panel,null,r.createElement(a.Button,{icon:"file",iconSize:16,text:"I have items"},r.createElement(u.MenuItem,{text:"Hello"}),r.createElement(u.MenuItem,{text:"World"}),r.createElement(u.MenuItem,{text:"Here I am"})),r.createElement(a.Button,{icon:"file",iconSize:32},r.createElement(u.MenuItem,{text:"Hello"}),r.createElement(u.MenuItem,{text:"World"}),r.createElement(u.MenuItem,{text:"Here I am"})),r.createElement(a.Button,{icon:"file",iconSize:32}),r.createElement(a.Button,{text:"Im just a button"}),r.createElement(l.Clickable,{icon:"floppy"}),r.createElement(l.Clickable,{text:"Click me",description:"Right here"}),r.createElement(l.Clickable,{text:"Click me",description:"Right here",icon:"floppy",iconSize:32}),r.createElement(s.Label,{text:"Hello World"}),r.createElement(s.Label,{text:"Hello World",description:"With Hello Description"}),r.createElement(s.Label,{text:"Hello World 16",icon:"floppy"}),r.createElement(s.Label,{text:"Hello World 16",description:"With Hello Description",icon:"file"}),r.createElement(s.Label,{text:"Hello World 32",icon:"folder",iconSize:32}),r.createElement(s.Label,{text:"Hello World 32",description:"With Hello Description",icon:"floppy",iconSize:32})),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0));t.Panel=e=>r.createElement("div",{className:"ui-panel"},e.children)},function(e,t,n){var i=n(2),r=n(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(i(e.i,r,o),r.locals?r.locals:{});e.exports=c},function(e,t,n){var i=n(3),r=n(10),o=n(11),c=n(12),a=n(13),l=n(14),s=n(15),u=n(16),d=n(17),f=n(18);t=i(!1);var p=r(o),m=r(c),h=r(a),b=r(l),v=r(s),g=r(u),x=r(d),y=r(f);t.push([e.i,"body{font:caption}.ui-panel>div{margin:50px}.ui-icon.icon-cross{background-image:url("+p+")}.ui-icon.icon-floppy{background-image:url("+m+")}.ui-icon.icon-file{background-image:url("+h+")}.ui-icon.icon-folder{background-image:url("+b+")}.ui-icon.icon-chevron-up{background-image:url("+v+")}.ui-icon.icon-chevron-down{background-image:url("+g+")}.ui-icon.icon-chevron-left{background-image:url("+x+")}.ui-icon.icon-chevron-right{background-image:url("+y+")}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/1b889a4d5e234aee94d06d274874a298.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/d1d25e41f877a1357853503703716c85.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/bcb81a66c85c02a6dd38a7010fe86f30.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/bd041ee3dd072567f88ee1b03bf101f5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/70d7674a883c4e14b1f3aa61e114e537.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/291a2076d5767e7291e793746aee8e9d.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/2f28c5c23377bd4898076686b28b0a50.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"imgs/4206aed994e6be569d3f15fd37424ad7.svg"},function(e,t,n){var i=n(2),r=n(20);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(i(e.i,r,o),r.locals?r.locals:{});e.exports=c},function(e,t,n){(t=n(3)(!1)).push([e.i,".ui-button-wrap{display:inline-flex;align-items:center}.ui-button{display:inline-flex;align-items:center;padding:0.6em}.ui-button>.ui-icon.size-8{margin-left:0.6em}.ui-clickable{cursor:pointer}.ui-clickable:hover{background-color:Highlight;color:HighlightText}.ui-icon{background:center center no-repeat;background-size:100% 100%}.ui-icon:hover{background-color:Highlight;color:HighlightText;cursor:pointer}.ui-icon.size-8{width:8px;height:8px}.ui-icon.size-16{width:16px;height:16px}.ui-icon.size-32{width:32px;height:32px}.ui-label.with-icon{display:flex;align-items:center}.ui-label.with-icon .ui-icon{margin-right:0.5em}.ui-label .desc{opacity:50%}.ui-menuitem{padding:0.6em}.ui-menu-overlay{min-width:300px;background-color:Window;color:WindowText;box-shadow:3px 3px 3px rgba(0,0,0,0.3)}.ui-overlay{position:fixed}\n",""]),e.exports=t},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0)),o=n(1),c=n(4),a=n(22);class l extends r.Component{constructor(e){super(e),this.buttonRef=r.createRef(),this.state={},this.showDropDown=this.showDropDown.bind(this)}showDropDown(){this.setState({dropDownVisible:!0})}render(){var e;if(this.props.children){if(this.state.dropDownVisible){const t=(null===(e=this.buttonRef.current)||void 0===e?void 0:e.getBoundingClientRect())||new DOMRect;return r.createElement("div",{className:"ui-button-wrap"},r.createElement("div",{ref:this.buttonRef,className:"ui-clickable ui-button",onClick:this.showDropDown},r.createElement(o.Label,Object.assign({},this.props)),r.createElement(c.Icon,{name:"chevron-down",size:8})),r.createElement(a.MenuOverlay,{top:t.top+t.height,left:t.left},this.props.children))}return r.createElement("div",{ref:this.buttonRef,className:"ui-clickable ui-button",onClick:this.showDropDown},r.createElement(o.Label,Object.assign({},this.props)),r.createElement(c.Icon,{name:"chevron-down",size:8}))}return r.createElement("div",{ref:this.buttonRef,className:"ui-clickable ui-button"},r.createElement(o.Label,Object.assign({},this.props)))}}t.Button=l},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0));class o extends r.Component{render(){const e={top:this.props.top+"px",left:this.props.left+"px",width:"auto",height:"auto"};return"number"==typeof this.props.height&&(e.height=this.props.height+"px"),"number"==typeof this.props.width&&(e.width=this.props.width+"px"),r.createElement("div",{className:"ui-overlay ui-menu-overlay",style:e},this.props.children)}}t.MenuOverlay=o},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0)),o=n(1);t.Clickable=e=>r.createElement("div",{className:"ui-clickable"},r.createElement(o.Label,Object.assign({},e)))},function(e,t,n){"use strict";var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=i(n(0)),o=n(1);class c extends r.Component{render(){return r.createElement("div",{className:"ui-clickable ui-menuitem"},r.createElement(o.Label,Object.assign({},this.props)))}}t.MenuItem=c}]);
//# sourceMappingURL=main.js.map