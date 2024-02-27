!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.dropDownMe=e():n.dropDownMe=e()}(this,(()=>(()=>{"use strict";var n={249:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#navbar {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  justify-items: center;\n  gap: 1em;\n}\n.parentContainer {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  width: 200px;\n  cursor: pointer;\n  z-index: 9999;\n}\n\n.parentItem {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n\n.itemsContainer {\n  justify-content: center;\n  flex-direction: column;\n  align-items: start;\n  align-items: center;\n  justify-content: space-evenly;\n  opacity: 0;\n  transform: rotateX(-180deg);\n  bottom:0;\n  transition: transform 200ms ease-in 0s;\n  position: relative;\n}\n\n.dummy-item-container {\n  width: 200px;\n  height: 2vh;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.dummy-item {\n  width: 30px;\n  height: 2vh;\n  border-left: 2px solid #090a0a38;\n  border-right: 2px solid #090a0a38;\n  border-radius: 2px;\n}\n\n.item:not(.dummy-item) {\n  font-size: 0.95rem;\n  width: 200px;\n  height: 4vh;\n  border: 2px solid #090a0a38;\n  padding-left: 1em;\n  display: flex;\n  align-items: center;\n  font-weight: 200;\n  color: #090a0ac2;\n  cursor: pointer;\n  margin-top: 0.5em;\n  border-radius: 5px;\n  background-color: #ffffff;\n  transform: skewX(10deg);\n  font-weight: 200;\n}\n\n.itemsContainer > :nth-child(2) {\n  margin-top: 0;\n}\n\n.itemsContainer.visible {\n  display: flex;\n  opacity: 1;\n  transform: rotateX(0);\n}\n\n.change-border-bottom {\n  animation: animated-border 200ms ease-in-out 300ms forwards;\n}\n\n@keyframes animated-border {\n  0% {\n    border-bottom: 0px solid #090a0a38;\n  }\n  25% {\n    border-bottom: 2px solid #090a0a38;\n  }\n  50% {\n    border-bottom: 3px solid #090a0a38;\n  }\n  100% {\n    border-bottom: 5px solid #090a0a38;\n  }\n}\n\n.item.animated {\n  transform: skewX(-10deg);\n  color: #000000;\n  background-color: rgba(0, 0, 0, 0.1);\n  font-weight: 800;\n}',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;EACrB,QAAQ;AACV;AACA;EACE,4DAA4D;EAC5D,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,6BAA6B;EAC7B,UAAU;EACV,2BAA2B;EAC3B,QAAQ;EACR,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,gCAAgC;EAChC,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,2DAA2D;AAC7D;;AAEA;EACE;IACE,kCAAkC;EACpC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,kCAAkC;EACpC;AACF;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,oCAAoC;EACpC,gBAAgB;AAClB",sourcesContent:['* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#navbar {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  justify-items: center;\n  gap: 1em;\n}\n.parentContainer {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  width: 200px;\n  cursor: pointer;\n  z-index: 9999;\n}\n\n.parentItem {\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n\n.itemsContainer {\n  justify-content: center;\n  flex-direction: column;\n  align-items: start;\n  align-items: center;\n  justify-content: space-evenly;\n  opacity: 0;\n  transform: rotateX(-180deg);\n  bottom:0;\n  transition: transform 200ms ease-in 0s;\n  position: relative;\n}\n\n.dummy-item-container {\n  width: 200px;\n  height: 2vh;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.dummy-item {\n  width: 30px;\n  height: 2vh;\n  border-left: 2px solid #090a0a38;\n  border-right: 2px solid #090a0a38;\n  border-radius: 2px;\n}\n\n.item:not(.dummy-item) {\n  font-size: 0.95rem;\n  width: 200px;\n  height: 4vh;\n  border: 2px solid #090a0a38;\n  padding-left: 1em;\n  display: flex;\n  align-items: center;\n  font-weight: 200;\n  color: #090a0ac2;\n  cursor: pointer;\n  margin-top: 0.5em;\n  border-radius: 5px;\n  background-color: #ffffff;\n  transform: skewX(10deg);\n  font-weight: 200;\n}\n\n.itemsContainer > :nth-child(2) {\n  margin-top: 0;\n}\n\n.itemsContainer.visible {\n  display: flex;\n  opacity: 1;\n  transform: rotateX(0);\n}\n\n.change-border-bottom {\n  animation: animated-border 200ms ease-in-out 300ms forwards;\n}\n\n@keyframes animated-border {\n  0% {\n    border-bottom: 0px solid #090a0a38;\n  }\n  25% {\n    border-bottom: 2px solid #090a0a38;\n  }\n  50% {\n    border-bottom: 3px solid #090a0a38;\n  }\n  100% {\n    border-bottom: 5px solid #090a0a38;\n  }\n}\n\n.item.animated {\n  transform: skewX(-10deg);\n  color: #000000;\n  background-color: rgba(0, 0, 0, 0.1);\n  font-weight: 800;\n}'],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var u=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=A,e.splice(A,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var s=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nc=void 0;var r={};return(()=>{t.r(r),t.d(r,{default:()=>E});var n=t(72),e=t.n(n),o=t(825),a=t.n(o),i=t(659),A=t.n(i),s=t(56),c=t.n(s),d=t(540),l=t.n(d),u=t(113),m=t.n(u),f=t(249),p={};function C(n){return function(n){if(Array.isArray(n))return g(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"==typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}p.styleTagTransform=m(),p.setAttributes=c(),p.insert=A().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=l(),e()(f.A,p),f.A&&f.A.locals&&f.A.locals;const E=function(){var n=C(document.querySelectorAll(".parentContainer"));n.map((function(n){return n.addEventListener("mouseenter",(function(e){var t=n.children[0],r=e.target.children[1],o=C(e.target.children[1].children);t.classList.toggle("change-border-bottom"),r.classList.toggle("visible");var a=o.filter((function(n){return"dummy-item"!==n.className}));a.map((function(n){return n.addEventListener("mouseover",(function(){n.classList.add("animated")}))})),a.map((function(n){return n.addEventListener("mouseout",(function(){n.classList.remove("animated")}))}))}))})),n.map((function(n){return n.addEventListener("mouseleave",(function(e){var t=n.children[0],r=e.target.children[1];t.classList.toggle("change-border-bottom"),r.classList.toggle("visible")}))}))}})(),r})()));
//# sourceMappingURL=dropdownme.js.map