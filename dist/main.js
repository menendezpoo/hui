!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=9)}([function(e,t){e.exports=React},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0)),o=i(4);t.Label=e=>{if(e.icon&&!e.text)return s.createElement("div",{className:"ui-label"},s.createElement(o.Icon,{name:e.icon,size:e.iconSize}));if(e.icon||e.description){if(!e.icon&&e.description)return s.createElement("div",{className:"ui-label"},s.createElement("div",{className:"text"},e.text),s.createElement("div",{className:"desc"},e.description));if(e.icon)return e.description?s.createElement("div",{className:"ui-label with-icon"},s.createElement(o.Icon,{name:e.icon,size:e.iconSize}),s.createElement("div",{className:"text-side"},s.createElement("div",{className:"text"},e.text),s.createElement("div",{className:"desc"},e.description))):s.createElement("div",{className:"ui-label with-icon"},s.createElement(o.Icon,{name:e.icon,size:e.iconSize}),s.createElement("div",{className:"text"},e.text));throw"Undesired state"}return s.createElement("div",{className:"ui-label"},e.text)}},function(e,t,i){"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),r={};function a(e,t,i){for(var n=0;n<t.length;n++){var s={css:t[n][1],media:t[n][2],sourceMap:t[n][3]};r[e][n]?r[e][n](s):r[e].push(f(s,i))}}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function h(e,t,i,n){var s=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,s);else{var o=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function d(e,t,i){var n=i.css,s=i.media,o=i.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function f(e,t){var i,n,s;if(t.singleton){var o=m++;i=p||(p=l(t)),n=h.bind(null,i,o,!1),s=h.bind(null,i,o,!0)}else i=l(t),n=d.bind(null,i,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else s()}}e.exports=function(e,t,i){return(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=s()),e=i.base?e+i.base:e,t=t||[],r[e]||(r[e]=[]),a(e,t,i),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){r[e]||(r[e]=[]),a(e,t,i);for(var n=t.length;n<r[e].length;n++)r[e][n]();r[e].length=t.length,0===r[e].length&&delete r[e]}}}},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var s=(r=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[i].concat(o).concat([s]).join("\n")}var r,a,l;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(s[r]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&s[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0));t.Icon=e=>s.createElement("div",{className:`ui-icon size-${e.size||16} icon-${e.name}`})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e,t,i,n){this.left=e,this.top=t,this.width=i,this.height=n}static get empty(){return new n(0,0,0,0)}static fromDOMRect(e){return new n(e.left,e.top,e.width,e.height)}clone(){return new n(this.left,this.top,this.width,this.height)}equals(e){return e.left===this.left&&e.top===this.top&&e.width===this.width&&e.height===this.height}round(){return new n(Math.round(this.left),Math.round(this.top),Math.round(this.width),Math.round(this.height))}toString(){return`(Rect: ${this.left}, ${this.top}, ${this.width}, ${this.height})`}withBottom(e){return new n(this.left,e-this.height,this.width,this.height)}withHeight(e){return new n(this.left,this.top,this.width,e)}withLeft(e){return new n(e,this.top,this.width,this.height)}withRight(e){return new n(e-this.width,this.top,this.width,this.height)}withTop(e){return new n(this.left,e,this.width,this.height)}withWidth(e){return new n(this.left,this.top,e,this.height)}get right(){return this.left+this.width}get bottom(){return this.top+this.height}}t.Rectangle=n},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0)),o=i(1),r=i(4),a=i(7),l=i(28),c=i(8),u=i(5);class h extends s.Component{constructor(e){super(e),this.escapeKeyDismissId=0,this.clickDismissId=0,this.buttonRef=s.createRef(),this.state={},this.activate=this.activate.bind(this),this.showDropDown=this.showDropDown.bind(this),this.hideDropDown=this.hideDropDown.bind(this),this.keyDownHide=this.keyDownHide.bind(this),this.keyDownShow=this.keyDownShow.bind(this),this.keyDownActivate=this.keyDownActivate.bind(this)}activate(){!0!==this.props.disabled&&this.props.onClick&&this.props.onClick()}keyPass(e,t){"Enter"!==e.key&&" "!==e.key||this.props.disabled||(e.stopPropagation(),e.preventDefault(),t())}keyDownHide(e){this.keyPass(e,()=>this.hideDropDown())}keyDownShow(e){this.props.disabled||this.keyPass(e,()=>this.showDropDown())}keyDownActivate(e){this.keyPass(e,()=>this.activate())}hideDropDown(){this.setState({dropDownVisible:!1}),l.FocusStackHandler.dismiss.unregister(this.escapeKeyDismissId),c.ClickDismiss.mouseup.unregister(this.clickDismissId)}showDropDown(){this.setState({dropDownVisible:!0}),this.escapeKeyDismissId=l.FocusStackHandler.dismiss.register(()=>{this.hideDropDown()}),this.clickDismissId=c.ClickDismiss.mouseup.register(()=>this.hideDropDown())}render(){var e;const t=u.Rectangle.fromDOMRect((null===(e=this.buttonRef.current)||void 0===e?void 0:e.getBoundingClientRect())||new DOMRect),i=()=>s.createElement(r.Icon,{name:"chevron-down",size:8}),n=()=>s.createElement(o.Label,Object.assign({},this.props)),l=()=>s.createElement(a.MenuOverlay,{top:t.top+t.height,left:t.left,refRect:t,onDismissSignal:this.hideDropDown},this.props.children),c=[`face-${this.props.face||"hover"}`,this.props.classTag,this.props.disabled?"disabled":null].filter(e=>!!e).join(" "),h=this.props.disabled?{}:{tabIndex:0};return this.props.children?this.props.split?this.state.dropDownVisible?s.createElement("div",{className:"ui-button-wrap split "},s.createElement("div",Object.assign({},h,{ref:this.buttonRef,className:`ui-clickable ui-button is-open ${c}`,onClick:this.activate}),n()),s.createElement("div",Object.assign({},h,{className:"ui-clickable ui-button split-part",onClick:this.showDropDown,onKeyDown:this.keyDownShow}),i(),l())):s.createElement("div",{className:`ui-button-wrap split ${c}`},s.createElement("div",Object.assign({},h,{ref:this.buttonRef,className:"ui-clickable ui-button",onClick:this.activate}),n()),s.createElement("div",Object.assign({},h,{className:"ui-clickable ui-button split-part",onClick:this.showDropDown,onKeyDown:this.keyDownShow}),i())):this.state.dropDownVisible?s.createElement("div",{className:"ui-button-wrap"},s.createElement("div",Object.assign({},h,{ref:this.buttonRef,className:`ui-clickable ui-button is-open ${c}`,onKeyDown:this.keyDownHide,onClick:this.showDropDown}),n(),i()),l()):s.createElement("div",{className:"ui-button-wrap"},s.createElement("div",Object.assign({},h,{ref:this.buttonRef,className:`ui-clickable ui-button ${c}`,onClick:this.showDropDown,onKeyDown:this.keyDownShow}),n(),i())):s.createElement("div",Object.assign({},h,{ref:this.buttonRef,className:`ui-clickable ui-button ${c}`,onClick:this.activate,onKeyDown:this.keyDownActivate}),n())}}t.Button=h},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0)),o=i(5),r=i(27);class a extends s.Component{constructor(e){super(e),this.overlayRef=s.createRef(),this.state={},this.setOpenItem=this.setOpenItem.bind(this);const t=e=>"Enter"===e.key||" "===e.key,i=(e,t)=>{e.stopPropagation(),e.preventDefault(),t()};this.keyCaptureId=r.KeyCaptureStackHandler.instance.register(e=>{"ArrowDown"==e.key?i(e,this.selectNext.bind(this)):"ArrowUp"===e.key?i(e,this.selectPrev.bind(this)):"ArrowRight"===e.key||t(e)?(i(e,this.openCurrentIndex.bind(this)),t(e)&&this.setState({activatedIndex:this.state.selectedIndex})):"ArrowLeft"===e.key&&void 0!==this.props.parentMenuItem&&i(e,()=>this.sendDismissSingleSignal())})}closeOpenedIndex(){void 0!==this.state.openIndex&&this.setState({openIndex:void 0})}componentWillUnmount(){r.KeyCaptureStackHandler.instance.unregister(this.keyCaptureId)}selectNext(){let e=-1;"number"==typeof this.state.selectedIndex&&(e=this.state.selectedIndex);let t=e+1;void 0!==this.childCount&&t>=this.childCount&&(t=0),this.setState({selectedIndex:t})}selectPrev(){let e=-1;"number"==typeof this.state.selectedIndex&&(e=this.state.selectedIndex);let t=e-1;t<0&&(t=void 0!==this.childCount?this.childCount-1:0),this.setState({selectedIndex:t})}openCurrentIndex(){void 0!==this.state.selectedIndex&&this.setOpenItem(this.state.selectedIndex)}correctPosition(){if(!this.overlayRef||!this.overlayRef.current)return;const e=o.Rectangle.fromDOMRect(this.overlayRef.current.getBoundingClientRect()),t={width:window.innerWidth,height:window.innerHeight},i=this.props.refRect;let n=e.clone();e.right>t.width&&(n=n.withRight(i.left)),e.bottom>t.height&&(n=n.withBottom(t.height)),n.equals(e)||(this.overlayRef.current.style.left=n.left+"px",this.overlayRef.current.style.top=n.top+"px")}setNoOpenItem(){this.setState({selectedIndex:void 0})}setOpenItem(e){this.setState({selectedIndex:e,openIndex:e})}setSelectedItem(e){this.setState({selectedIndex:e})}render(){const e={top:this.props.top+"px",left:this.props.left+"px",width:"auto",height:"auto"};return"number"==typeof this.props.height&&(e.height=this.props.height+"px"),"number"==typeof this.props.width&&(e.width=this.props.width+"px"),setTimeout(()=>{this.correctPosition()}),this.childCount=s.Children.count(this.props.children),s.createElement("div",{ref:this.overlayRef,className:"ui-overlay ui-menu-overlay",style:e},s.Children.map(this.props.children,(e,t)=>s.cloneElement(e,{onOpen:()=>this.setOpenItem(t),onClose:()=>this.setNoOpenItem(),onDismissSignal:()=>this.sendDismissSignal(),onDismissSingleSignal:()=>this.closeOpenedIndex(),onSelectSignal:()=>this.setSelectedItem(t),isSelected:t===this.state.selectedIndex,isOpen:t===this.state.openIndex,isActivated:t===this.state.activatedIndex,parent:this})))}sendDismissSignal(){this.props.onDismissSignal&&this.props.onDismissSignal()}sendDismissSingleSignal(){this.props.onDismissSingleSignal&&this.props.onDismissSingleSignal()}}t.MenuOverlay=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this.stack=[],this.preventNext=!1,window.addEventListener(e,e=>{this.preventNext?this.preventNext=!1:this.stack.length>0&&(e.stopImmediatePropagation(),this.popAndExecute())})}isIdRegistered(e){return this.stack.filter(t=>t.id===e).length>0}register(e){const t=n.idReminder++;return this.stack.push({id:t,call:e}),t}popAndExecute(){const e=this.stack.pop();e&&(e.call(),this.unregister(e.id))}preventNextEvent(){this.preventNext=!0}unregister(e){this.stack=this.stack.filter(t=>t.id!=e),this.preventNext=!1}}t.ClickDismiss=n,n.mouseup=new n("mouseup"),n.idReminder=1},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0)),o=n(i(10)),r=i(11);i(12),i(23),i(25);const a=i(6),l=i(29),c=i(1),u=i(30),h=i(31);o.render(s.createElement(r.Panel,null,s.createElement(h.TextBox,{placeholder:"Box with clearButton",clearButton:!0,change:e=>console.log(`value: ${e}`)}),s.createElement(h.TextBox,{placeholder:"A text box",change:e=>console.log(`value: ${e}`)}),s.createElement(a.Button,{icon:"file",iconSize:16,text:"I have split items",split:!0},s.createElement(u.MenuItem,{text:"Hello"}),s.createElement(u.MenuItem,{text:"World",icon:"floppy"})),s.createElement(a.Button,{icon:"file",iconSize:16,text:"I have items"},s.createElement(u.MenuItem,{text:"Hello"}),s.createElement(u.MenuItem,{text:"World",icon:"floppy"}),s.createElement(u.MenuItem,{text:"Here I am"},s.createElement(u.MenuItem,{text:"This is a sub Item",onActivate:()=>console.log("Activated!")}),s.createElement(u.MenuItem,{text:"This as well"},s.createElement(u.MenuItem,{text:"Well well well"}),s.createElement(u.MenuItem,{text:"Little Maui is having trouble"}),s.createElement(u.MenuItem,{text:"With his hook.",onActivate:()=>console.log("Hook!")})),s.createElement(u.MenuItem,{text:"Here comes more"},s.createElement(u.MenuItem,{text:"Well well well"}),s.createElement(u.MenuItem,{text:"Little Maui is having trouble"},s.createElement(u.MenuItem,{text:"You poor semi"}),s.createElement(u.MenuItem,{text:"demi-mini god"}),s.createElement(u.MenuItem,{text:"You don't swing like"},s.createElement(u.MenuItem,{text:"You used to man"}),s.createElement(u.MenuItem,{text:"You're welcome"},s.createElement(u.MenuItem,{text:"Well well"}),s.createElement(u.MenuItem,{text:"I see what's happening"}),s.createElement(u.MenuItem,{text:"Yeah. You're face to face"}),s.createElement(u.MenuItem,{text:"With Greatness and it's strange"}),s.createElement(u.MenuItem,{text:"You don't even know how you"}),s.createElement(u.MenuItem,{text:"Feel. It's adorable."},s.createElement(u.MenuItem,{text:"Well it's nice to see"}),s.createElement(u.MenuItem,{text:"That humans never change."}),s.createElement(u.MenuItem,{text:"Open your eyes, let's"}),s.createElement(u.MenuItem,{text:"Begin. Yes it's really me"}),s.createElement(u.MenuItem,{text:"It's Maui, breath it in."}))))),s.createElement(u.MenuItem,{text:"With his hook."})),s.createElement(u.MenuItem,{text:"And how about this one"})),s.createElement(u.MenuItem,{text:"This is me"})),s.createElement(a.Button,{icon:"file",iconSize:32},s.createElement(u.MenuItem,{text:"Hello"}),s.createElement(u.MenuItem,{text:"World"}),s.createElement(u.MenuItem,{text:"Here I am"})),s.createElement(a.Button,{icon:"file",iconSize:32}),s.createElement(a.Button,{text:"Im just a button"}),s.createElement(l.Clickable,{icon:"floppy"}),s.createElement(l.Clickable,{text:"Click me",description:"Right here"}),s.createElement(l.Clickable,{text:"Click me",description:"Right here",icon:"floppy",iconSize:32}),s.createElement(c.Label,{text:"Hello World"}),s.createElement(c.Label,{text:"Hello World",description:"With Hello Description"}),s.createElement(c.Label,{text:"Hello World 16",icon:"floppy"}),s.createElement(c.Label,{text:"Hello World 16",description:"With Hello Description",icon:"file"}),s.createElement(c.Label,{text:"Hello World 32",icon:"folder",iconSize:32}),s.createElement(c.Label,{text:"Hello World 32",description:"With Hello Description",icon:"floppy",iconSize:32})),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0));t.Panel=e=>s.createElement("div",{className:"ui-panel"},e.children)},function(e,t,i){var n=i(2),s=i(13);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var o={insert:"head",singleton:!1},r=(n(e.i,s,o),s.locals?s.locals:{});e.exports=r},function(e,t,i){var n=i(3),s=i(14),o=i(15),r=i(16),a=i(17),l=i(18),c=i(19),u=i(20),h=i(21),d=i(22);t=n(!1);var p=s(o),m=s(r),f=s(a),g=s(l),v=s(c),b=s(u),w=s(h),x=s(d);t.push([e.i,"body{font:caption}.ui-panel>div{margin:50px}.ui-icon.icon-cross{background-image:url("+p+")}.ui-icon.icon-floppy{background-image:url("+m+")}.ui-icon.icon-file{background-image:url("+f+")}.ui-icon.icon-folder{background-image:url("+g+")}.ui-icon.icon-chevron-up{background-image:url("+v+")}.ui-icon.icon-chevron-down{background-image:url("+b+")}.ui-icon.icon-chevron-left{background-image:url("+w+")}.ui-icon.icon-chevron-right{background-image:url("+x+")}\n",""]),e.exports=t},function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/1b889a4d5e234aee94d06d274874a298.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/d1d25e41f877a1357853503703716c85.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/bcb81a66c85c02a6dd38a7010fe86f30.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/bd041ee3dd072567f88ee1b03bf101f5.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/70d7674a883c4e14b1f3aa61e114e537.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/291a2076d5767e7291e793746aee8e9d.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/2f28c5c23377bd4898076686b28b0a50.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"imgs/4206aed994e6be569d3f15fd37424ad7.svg"},function(e,t,i){var n=i(2),s=i(24);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var o={insert:"head",singleton:!1},r=(n(e.i,s,o),s.locals?s.locals:{});e.exports=r},function(e,t,i){(t=i(3)(!1)).push([e.i,".ui-clickable.is-open{background-color:Highlight;color:HighlightText}.ui-button-wrap.split:hover>.ui-button-split-part,.ui-button-wrap.split:hover>.ui-button,.ui-button:hover:not(.face-never):not(.disabled),.ui-button.is-open{background-color:Highlight;color:HighlightText}.ui-menuitem.is-open,.ui-menuitem.is-selected{background-color:Highlight;color:HighlightText}.ui-menu-overlay{background-color:Window;color:WindowText;border:solid 1px #ddd}\n",""]),e.exports=t},function(e,t,i){var n=i(2),s=i(26);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var o={insert:"head",singleton:!1},r=(n(e.i,s,o),s.locals?s.locals:{});e.exports=r},function(e,t,i){(t=i(3)(!1)).push([e.i,".ui-button-wrap{display:inline-flex;align-items:stretch}.ui-button-wrap.split>.split-part>.ui-icon.size-8{margin-left:0}.ui-button{display:inline-flex;align-items:center;padding:0.6em}.ui-button>.ui-icon.size-8{margin-left:0.6em}.ui-clickable:not(.disabled){cursor:pointer}.ui-icon{background:center center no-repeat;background-size:100% 100%}.ui-icon.size-8{width:8px;height:8px}.ui-icon.size-16{width:16px;height:16px}.ui-icon.size-32{width:32px;height:32px}.ui-label.with-icon{display:flex;align-items:center}.ui-label.with-icon .ui-icon{margin-right:0.5em}.ui-label .desc{opacity:50%}.ui-textbox{display:inline-flex;position:relative;border:solid 1px WindowFrame}.ui-textbox input{border:none}.ui-textbox input:focus{outline:none}.ui-menuitem{position:relative;display:flex;align-items:center;padding:0.6em;cursor:pointer}.ui-menuitem .ui-icon.icon-chevron-right{position:absolute;right:0.6em}.ui-menu-overlay{min-width:300px;box-shadow:3px 3px 3px rgba(0,0,0,0.3);z-index:10000}.ui-overlay{position:fixed}\n",""]),e.exports=t},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){this.stack=[],window.addEventListener("keydown",e=>{this.stack.length>0&&this.execute(e)},!0)}isIdRegistered(e){return this.stack.filter(t=>t.id===e).length>0}register(e){const t=n.idReminder++;return this.stack.push({id:t,call:e}),t}execute(e){if(this.stack.length>0){this.stack[this.stack.length-1].call(e)}}unregister(e){this.stack=this.stack.filter(t=>t.id!=e)}}t.KeyCaptureStackHandler=n,n.idReminder=1,n.instance=new n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this.stack=[],window.addEventListener("keydown",t=>{t.key===e&&this.stack.length>0&&(t.stopImmediatePropagation(),this.popAndExecute())})}isIdRegistered(e){return this.stack.filter(t=>t.id===e).length>0}register(e){const t=n.idReminder++;return this.stack.push({id:t,call:e}),t}popAndExecute(){const e=this.stack.pop();e&&(e.call(),this.unregister(e.id))}unregister(e){this.stack=this.stack.filter(t=>t.id!=e)}}t.FocusStackHandler=n,n.idReminder=1,n.dismiss=new n("Escape"),n.commit=new n("Enter")},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0)),o=i(1);t.Clickable=e=>s.createElement("div",{className:"ui-clickable"},s.createElement(o.Label,Object.assign({},e)))},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0)),o=i(1),r=i(4),a=i(7),l=i(8),c=i(5);class u extends s.Component{constructor(e){super(e),this.ref=s.createRef(),this.showOverlay=this.showOverlay.bind(this),this.hideOverlay=this.hideOverlay.bind(this),this.mouseActivate=this.mouseActivate.bind(this),this.sendDismissSignal=this.sendDismissSignal.bind(this),this.sendDismissSingleSignal=this.sendDismissSingleSignal.bind(this),this.sendSelectSignal=this.sendSelectSignal.bind(this)}mouseActivate(e){e.stopPropagation(),this.activate()}activate(){this.props.onActivate&&this.props.onActivate(),this.sendDismissSignal()}hideOverlay(e){l.ClickDismiss.mouseup.preventNextEvent(),e.stopPropagation(),this.props.onClose&&this.props.onClose()}showOverlay(e){l.ClickDismiss.mouseup.preventNextEvent(),e.stopPropagation(),this.props.onOpen&&this.ref&&this.ref.current&&this.props.onOpen()}render(){var e;const t=this.props.isSelected?"is-selected":"",i=Object.assign({icon:"empty"},this.props);if(!0===this.props.isActivated&&0===s.Children.count(this.props.children)&&setTimeout(()=>this.activate()),this.props.children){const n=c.Rectangle.fromDOMRect((null===(e=this.ref.current)||void 0===e?void 0:e.getBoundingClientRect())||new DOMRect);return this.props.isOpen?s.createElement("div",{ref:this.ref,className:"ui-menuitem is-selected is-open",onMouseDown:this.hideOverlay},s.createElement(o.Label,Object.assign({},i)),s.createElement(r.Icon,{name:"chevron-right",size:8}),s.createElement(a.MenuOverlay,{left:n.right,top:n.top,refRect:n,parentMenuItem:this,onDismissSingleSignal:this.sendDismissSingleSignal,onDismissSignal:this.sendDismissSignal},this.props.children)):s.createElement("div",{ref:this.ref,className:`ui-menuitem ${t}`,onMouseEnter:this.sendSelectSignal,onMouseDown:this.showOverlay},s.createElement(o.Label,Object.assign({},i)),s.createElement(r.Icon,{name:"chevron-right",size:8}))}return s.createElement("div",{ref:this.ref,className:`ui-menuitem ${t}`,onMouseEnter:this.sendSelectSignal,onMouseDown:this.mouseActivate},s.createElement(o.Label,Object.assign({},i)))}sendDismissSignal(){this.props.onDismissSignal&&this.props.onDismissSignal()}sendDismissSingleSignal(){this.props.onDismissSingleSignal&&this.props.onDismissSingleSignal()}sendSelectSignal(){this.props.onSelectSignal&&this.props.onSelectSignal()}}t.MenuItem=u},function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(0)),o=i(6);class r extends s.Component{constructor(e){super(e),this.tRef=s.createRef(),this.state={value:e.defaultValue||"",focused:!1},this.handleChange=this.handleChange.bind(this),this.clear=this.clear.bind(this)}clear(){this.setState({value:""}),this.tRef.current&&this.tRef.current.focus()}handleChange(e){this.setState({value:e.target.value}),this.props.change&&this.props.change(e.target.value)}render(){const e=s.createElement("input",{ref:this.tRef,type:"text",value:this.state.value,onChange:this.handleChange}),t=this.props.clearButton||!1,i="always"===t||t&&!!this.state.value,n=s.createElement(o.Button,{icon:i?"cross":"empty",classTag:"clear",face:"never",iconSize:8,onClick:this.clear,disabled:!i});return!1!==t?s.createElement("div",{className:"ui-textbox",placeholder:this.props.placeholder},e,n):s.createElement("div",{className:"ui-textbox",placeholder:this.props.placeholder},e)}}t.TextBox=r}]);
//# sourceMappingURL=main.js.map