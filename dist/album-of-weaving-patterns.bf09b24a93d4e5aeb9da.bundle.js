/*! For license information please see album-of-weaving-patterns.bf09b24a93d4e5aeb9da.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(t,e,n){"use strict";t.exports=n(5)},177:function(t,e,n){var r=n(2),a=n(178);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},178:function(t,e,n){(e=n(3)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"main.scss"}]),t.exports=e},2:function(t,e,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function u(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],a=0;a<t.length;a++){var o=t[a],c=e.base?o[0]+e.base:o[0],l=n[c]||0,s="".concat(c," ").concat(l);n[c]=l+1;var f=u(s),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:v(p,e),references:1}),r.push(s)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function p(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(t,e){var n,r,a;if(e.singleton){var o=m++;n=h||(h=l(e)),r=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=l(e),r=d.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=u(n[r]);i[a].references--}for(var o=c(t,e),l=0;l<n.length;l++){var s=u(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=o}}}},203:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r),o=n(0),i=n.n(o);n(177);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}i.a.Component;var h={popularity:[[-999,10,"202,202,202","220,230,230"],[11,20,"160,225,215","160,225,215"],[21,30,"100,215,155","200,225,220"],[31,40,"0,170,160","180,220,150"],[41,50,"255,160,75","180,220,150"],[51,60,"5,115,145","255,125,110"],[61,70,"170,76,35","255,80,110"],[71,999,"190,70,180","255,100,70"]],temp:[[-999,-5,"195,220,235","170,240,240"],[-4,0,"100,225,195","215,215,215"],[1,5,"0,200,225","160,225,215"],[6,10,"100,135,160","40,220,175"],[11,15,"0,170,160","220,220,40"],[16,20,"255,190,0","255,225,20"],[21,25,"255,100,25","250,130,80"],[26,30,"255,45,40","255,125,110"],[31,35,"255,60,150","170,40,0"],[36,999,"155,30,0","255,40,70"]]};var m={getSchemeBy:function(t,e){if(!t||!e)return console.error("No key or value");console.log(t,e);var n=h[t].filter((function(t){return t[0]<=e&&e<=t[1]}));return n[0]&&[n[0][2],n[0][3]]},schemes:h};function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var a=C(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=function(t,e){return"rgba("+t+","+e+")"},O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(o,t);var e,n,r,a=g(o);function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),_(x(e=a.call(this,t)),"play",(function(){e.animation=requestAnimationFrame(e.animate)})),_(x(e),"pause",(function(){cancelAnimationFrame(e.animation)})),_(x(e),"setup",(function(){e.width=window.innerWidth,e.height=window.innerHeight,e.ctx=e.refs.canvas.getContext("2d"),e.tmpCanvas=document.createElement("canvas"),e.tmpCanvasCtx=e.tmpCanvas.getContext("2d"),e.gCanvas1=document.createElement("canvas"),e.gCtx1=e.gCanvas1.getContext("2d"),e.gCanvas2=document.createElement("canvas"),e.gCtx2=e.gCanvas2.getContext("2d"),e.height=e.height*e.heightFactor,e.widthF=e.width*e.scale,e.heightF=e.height*e.scale,e.diameter=parseInt(e.width/2),e.radius=parseInt(e.diameter/2),e.refs.canvas.width=e.width,e.refs.canvas.height=e.height,e.tmpCanvas.width=e.widthF,e.tmpCanvas.height=e.heightF,e.gCanvas1.width=e.gCanvas1.height=e.diameter,e.gCanvas2.width=e.gCanvas2.height=e.diameter,e.ctx.webkitImageSmoothingEnabled=!1,e.ctx.mozImageSmoothingEnabled=!1,e.ctx.msImageSmoothingEnabled=!1,e.ctx.oImageSmoothingEnabled=!1,e.ctx.imageSmoothingEnabled=!1})),_(x(e),"init",(function(){console.log("init"),e.gradients&&0===e.balls.length&&(e.createGradients(),e.generateBalls(),e.animate(!1),e.play())})),_(x(e),"createGradients",(function(){if(!e.gradients)return!1;var t=function(t,n,r){var a=e.radius,o=t.createRadialGradient(a,a,1,a,a,a);o.addColorStop(0,j(n,.75)),o.addColorStop(1,j(r,0)),t.fillStyle=o,t.arc(a,a,a,0,2*Math.PI),t.fill()};t(e.gCtx1,e.gradients[0][0],e.gradients[0][1]),t(e.gCtx2,e.gradients[1][0],e.gradients[1][1])})),_(x(e),"generateBalls",(function(){if(!e.gradients)return!1;for(var t=[],n=0;n<e.numBalls;n++){var r=.5*-e.widthF+Math.random()*e.widthF,a=.5*-e.heightF+Math.random()*e.heightF,o=function(){return.2*Math.round(8*Math.random()-4)},i=e.widthF>e.heightF?e.widthF:e.heightF,u=Math.random()>=.5?e.gCanvas1:e.gCanvas2,c=document.createElement("canvas"),l=c.getContext("2d");c.width=c.height=i,l.drawImage(u,0,0,i,i),t.push({x:parseInt(r),y:parseInt(a),vx:o(),vy:o(),size:i,maxX:e.widthF,maxY:e.heightF,img:c})}e.balls=t})),_(x(e),"animate",(function(){var t,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=e.balls.length;for(e.tmpCanvasCtx.clearRect(0,0,e.width,e.height);r--;)(t=e.balls[r]).x+=t.vx,t.y+=t.vy,t.x>t.maxX?t.x=-t.size:t.x<-t.size&&(t.x=t.maxX),t.y>t.maxY?t.y=-t.size:t.y<-t.size&&(t.y=t.maxY),e.tmpCanvasCtx.drawImage(t.img,t.x,t.y,t.size,t.size);e.metabalize(),!e.paused&&n&&(e.animation=requestAnimationFrame(e.animate))})),_(x(e),"metabalize",(function(){var t=e.tmpCanvasCtx.getImageData(0,0,e.widthF,e.heightF);e.tmpCanvasCtx.putImageData(t,0,0),e.ctx.clearRect(0,0,e.width,e.height),e.ctx.drawImage(e.tmpCanvas,0,0,e.width,e.height),e.balls.forEach((function(t){}))})),e.animation=null,e.numBalls=25,e.ctx=null,e.tmpCanvas=null,e.tmpCanvasCtx=null,e.gCanvas1=null,e.gCtx1=null,e.gCanvas2=null,e.gCtx2=null,e.scale=.75,e.widthF=null,e.heightF=null,e.diameter=null,e.radius=null,e.balls=[],e.popularity=903,e.temp=-25,e.heightFactor=1,e.scale=1.1;var n=m.getSchemeBy("popularity",e.popularity),r=m.getSchemeBy("temp",e.temp);return e.gradients=[n,r],e}return e=o,(n=[{key:"componentDidMount",value:function(){this.setup(),this.init()}},{key:"render",value:function(){return i.a.createElement("div",{style:{position:"absolute",zIndex:-1,top:0,left:0}},i.a.createElement("canvas",{ref:"canvas"}))}}])&&b(e.prototype,n),r&&b(e,r),o}(i.a.Component);a.a.render(i.a.createElement(O,null),document.getElementById("root"))},3:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([a]).join("\n")}var i,u,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},5:function(t,e,n){"use strict";var r,a,o,i,u;if("undefined"==typeof window||"function"!=typeof MessageChannel){var c=null,l=null,s=function(){if(null!==c)try{var t=e.unstable_now();c(!0,t),c=null}catch(t){throw setTimeout(s,0),t}},f=Date.now();e.unstable_now=function(){return Date.now()-f},r=function(t){null!==c?setTimeout(r,0,t):(c=t,setTimeout(s,0))},a=function(t,e){l=setTimeout(t,e)},o=function(){clearTimeout(l)},i=function(){return!1},u=e.unstable_forceFrameRate=function(){}}else{var p=window.performance,d=window.Date,h=window.setTimeout,m=window.clearTimeout;if("undefined"!=typeof console){var v=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof v&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof p&&"function"==typeof p.now)e.unstable_now=function(){return p.now()};else{var b=d.now();e.unstable_now=function(){return d.now()-b}}var y=!1,g=null,w=-1,x=5,C=0;i=function(){return e.unstable_now()>=C},u=function(){},e.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):x=0<t?Math.floor(1e3/t):5};var _=new MessageChannel,j=_.port2;_.port1.onmessage=function(){if(null!==g){var t=e.unstable_now();C=t+x;try{g(!0,t)?j.postMessage(null):(y=!1,g=null)}catch(t){throw j.postMessage(null),t}}else y=!1},r=function(t){g=t,y||(y=!0,j.postMessage(null))},a=function(t,n){w=h((function(){t(e.unstable_now())}),n)},o=function(){m(w),w=-1}}function O(t,e){var n=t.length;t.push(e);t:for(;;){var r=n-1>>>1,a=t[r];if(!(void 0!==a&&0<F(a,e)))break t;t[r]=e,t[n]=a,n=r}}function S(t){return void 0===(t=t[0])?null:t}function k(t){var e=t[0];if(void 0!==e){var n=t.pop();if(n!==e){t[0]=n;t:for(var r=0,a=t.length;r<a;){var o=2*(r+1)-1,i=t[o],u=o+1,c=t[u];if(void 0!==i&&0>F(i,n))void 0!==c&&0>F(c,i)?(t[r]=c,t[u]=n,r=u):(t[r]=i,t[o]=n,r=o);else{if(!(void 0!==c&&0>F(c,n)))break t;t[r]=c,t[u]=n,r=u}}}return e}return null}function F(t,e){var n=t.sortIndex-e.sortIndex;return 0!==n?n:t.id-e.id}var T=[],E=[],I=1,P=null,M=3,R=!1,B=!1,N=!1;function z(t){for(var e=S(E);null!==e;){if(null===e.callback)k(E);else{if(!(e.startTime<=t))break;k(E),e.sortIndex=e.expirationTime,O(T,e)}e=S(E)}}function A(t){if(N=!1,z(t),!B)if(null!==S(T))B=!0,r(D);else{var e=S(E);null!==e&&a(A,e.startTime-t)}}function D(t,n){B=!1,N&&(N=!1,o()),R=!0;var r=M;try{for(z(n),P=S(T);null!==P&&(!(P.expirationTime>n)||t&&!i());){var u=P.callback;if(null!==u){P.callback=null,M=P.priorityLevel;var c=u(P.expirationTime<=n);n=e.unstable_now(),"function"==typeof c?P.callback=c:P===S(T)&&k(T),z(n)}else k(T);P=S(T)}if(null!==P)var l=!0;else{var s=S(E);null!==s&&a(A,s.startTime-n),l=!1}return l}finally{P=null,M=r,R=!1}}function L(t){switch(t){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var q=u;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(t){t.callback=null},e.unstable_continueExecution=function(){B||R||(B=!0,r(D))},e.unstable_getCurrentPriorityLevel=function(){return M},e.unstable_getFirstCallbackNode=function(){return S(T)},e.unstable_next=function(t){switch(M){case 1:case 2:case 3:var e=3;break;default:e=M}var n=M;M=e;try{return t()}finally{M=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=q,e.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=M;M=t;try{return e()}finally{M=n}},e.unstable_scheduleCallback=function(t,n,i){var u=e.unstable_now();if("object"==typeof i&&null!==i){var c=i.delay;c="number"==typeof c&&0<c?u+c:u,i="number"==typeof i.timeout?i.timeout:L(t)}else i=L(t),c=u;return t={id:I++,callback:n,priorityLevel:t,startTime:c,expirationTime:i=c+i,sortIndex:-1},c>u?(t.sortIndex=c,O(E,t),null===S(T)&&t===S(E)&&(N?o():N=!0,a(A,c-u))):(t.sortIndex=i,O(T,t),B||R||(B=!0,r(D))),t},e.unstable_shouldYield=function(){var t=e.unstable_now();z(t);var n=S(T);return n!==P&&null!==P&&null!==n&&null!==n.callback&&n.startTime<=t&&n.expirationTime<P.expirationTime||i()},e.unstable_wrapCallback=function(t){var e=M;return function(){var n=M;M=e;try{return t.apply(this,arguments)}finally{M=n}}}},8:function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,c=i(t),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))a.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)o.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}}},[[203,0,1]]]);