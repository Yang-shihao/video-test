(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="9a4a")})({"49fa":function(e,t,n){"use strict";var r=n("8f2c"),o=n.n(r);o.a},"573b":function(e,t,n){var r=n("c86c");t=r(!1),t.push([e.i,"",""]),e.exports=t},"6a58":function(e,t,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},darkmode:!1},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("cedf").default)}))},8246:function(e,t,n){"use strict";n.r(t);var r=n("8538"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"828b":function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,u,c,s){var f,d="function"===typeof e?e.options:e;if(c){d.components||(d.components={});var l=Object.prototype.hasOwnProperty;for(var p in c)l.call(c,p)&&!l.call(d.components,p)&&(d.components[p]=c[p])}if(s&&("function"===typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(d.mixins||(d.mixins=[])).push(s)),t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(d.functional){d._injectStyles=f;var v=d.render;d.render=function(e,t){return f.call(t),v(e,t)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,f):[f]}return{exports:e,options:d}}n.d(t,"a",(function(){return r}))},8538:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{wxsProps:{}}},components:{}}},"8f2c":function(e,t,n){var r=n("f034");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("b49c").default;o("34f7e6bc",r,!0,{sourceMap:!1,shadowMode:!1})},"93a4":function(e,t,n){var r=n("573b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("b49c").default;o("49208940",r,!0,{sourceMap:!1,shadowMode:!1})},"9a4a":function(e,t,n){"use strict";function r(){function e(e){var t=n("c6e3");t.__inject__&&t.__inject__(e)}"function"===typeof e&&e(),UniViewJSBridge.publishHandler("webviewReady")}n("6a58"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},b49c:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],u=i[1],c=i[2],s=i[3],f={id:e+":"+o,css:u,media:c,sourceMap:s};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,s=!1,f=function(){},d=null,l="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){s=n,d=o||{};var a=r(e,t);return v(a),function(t){for(var n=[],o=0;o<a.length;o++){var u=a[o],c=i[u.id];c.refs--,n.push(c)}t?(a=r(e,t),v(a)):a=[];for(o=0;o<n.length;o++){c=n[o];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function y(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(l){var o=c++;r=u||(u=h()),t=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=h(),t=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":U(r.css);if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function _(e,t){var n=U(t.css),r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,x=/var\(--status-bar-height\)/gi,w=/var\(--window-top\)/gi,C=/var\(--window-bottom\)/gi,A=/var\(--window-left\)/gi,O=/var\(--window-right\)/gi,S=!1;function U(e){if(!uni.canIUse("css.var")){!1===S&&(S=plus.navigator.getStatusbarHeight());var t={statusBarHeight:S,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};e=e.replace(x,t.statusBarHeight+"px").replace(w,t.top+"px").replace(C,t.bottom+"px").replace(A,"0px").replace(O,"0px")}return e.replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(e){return e.replace(m,(function(e,t){return uni.upx2px(t)+"px"}))}))}},c51f:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uni-view",{staticClass:e._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-button",{attrs:{_i:1},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("\u5f00\u59cb\u5904\u7406\u89c6\u9891")]),n("v-uni-button",{attrs:{_i:2},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("\u505c\u6b62\u670d\u52a1")]),n("v-uni-button",{attrs:{_i:3},on:{click:function(t){return e.$handleViewEvent(t)}}},[e._v("\u64ad\u653e\u89c6\u9891")]),e._$g(4,"i")?n("v-uni-video",{staticStyle:{width:"100%",height:"300px","margin-top":"20px"},attrs:{src:e._$g(4,"a-src"),controls:!0,id:"videoPlayer",_i:4}}):e._e()],1)},o=[]},c6e3:function(e,t,n){"use strict";n.r(t);var r=n("93a4"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},c86c:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},cedf:function(e,t,n){"use strict";n.r(t);var r=n("c51f"),o=n("8246");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("49fa");var a=n("828b"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"50b656b6",null,!1,r["a"],void 0);t["default"]=u.exports},f034:function(e,t,n){var r=n("c86c");t=r(!1),t.push([e.i,".container[data-v-50b656b6]{padding:20px}uni-button[data-v-50b656b6]{margin:10px 0;padding:10px 20px}",""]),e.exports=t}});