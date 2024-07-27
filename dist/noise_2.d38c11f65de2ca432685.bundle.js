/*! For license information please see noise_2.d38c11f65de2ca432685.bundle.js.LICENSE.txt */
(self.webpackChunkshelby_wilson_portfolio=self.webpackChunkshelby_wilson_portfolio||[]).push([[607],{5836:(e,t,n)=>{"use strict";var r=n(3935),o=n(7294),a=n(3005),i=n.n(a);n(5295);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const c=function(){var e=(0,o.useRef)(null),t=l((0,o.useState)(!1),2),n=t[0],r=t[1],a=Math.min(window.innerWidth-40,400),u=function(e,t,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:255,l=4*(t+n*e.width);e.data[l+0]=r,e.data[l+1]=o,e.data[l+2]=a,e.data[l+3]=i},c=function(e,t,n){return 156*Math.abs(i().simplex2(t/500+e,n/500+e))+100};return(0,o.useEffect)((function(){e.current&&!n&&(!function t(n,r,o){var i,l=e.current.getContext("2d"),s=l.createImageData(a,400);if(o%2==0){for(var f=0;f<a;f+=1)for(var d=0;d<400;d+=1)i=c(r,f,d),140,140,o<400&&(i=c(n,f,d)+(c(r,f,d)-c(n,f,d))*(o+1)/400),u(s,f,d,i,140,140);l.putImageData(s,0,0)}o<400?window.requestAnimationFrame((function(){return t(n,r,o+1)})):window.requestAnimationFrame((function(){return t(r,1e3*Math.random(),0)}))}(0,1e3*Math.random(),0),r(!0))}),[e.current]),o.createElement("div",{className:"noise-canvas"},o.createElement("canvas",{width:a,height:400,ref:e,style:{display:"block",margin:"0 auto"}}))};var s=n(9571);n(6069);r.render(o.createElement(o.Fragment,null,o.createElement(s.Z,{url:"/#/sketches"}),o.createElement(c,null)),document.getElementById("root"))},9571:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294);const o=function(e){return window.location.search.indexOf("_no-header")>-1?null:r.createElement("header",null,r.createElement("a",{href:e.url||"/#"},r.createElement("h1",null,r.createElement("span",null,"S"),r.createElement("span",null,"h"),r.createElement("span",null,"e"),r.createElement("span",null,"l"),r.createElement("span",null,"b"),r.createElement("span",null,"y")," ",r.createElement("span",null,"W"),r.createElement("span",null,"i"),r.createElement("span",null,"l"),r.createElement("span",null,"s"),r.createElement("span",null,"o"),r.createElement("span",null,"n"))))}},8561:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(7537),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const l=i},5700:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(7537),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const l=i},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var u=this[l][0];null!=u&&(i[u]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},7537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,l,u=o(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))n.call(i,s)&&(u[s]=i[s]);if(t){l=t(i);for(var f=0;f<l.length;f++)r.call(i,l[f])&&(u[l[f]]=i[l[f]])}}return u}},3005:function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(){var e={};function t(e,t,n){this.x=e,this.y=t,this.z=n}t.prototype.dot2=function(e,t){return this.x*e+this.y*t},t.prototype.dot3=function(e,t,n){return this.x*e+this.y*t+this.z*n};var n=[new t(1,1,0),new t(-1,1,0),new t(1,-1,0),new t(-1,-1,0),new t(1,0,1),new t(-1,0,1),new t(1,0,-1),new t(-1,0,-1),new t(0,1,1),new t(0,-1,1),new t(0,1,-1),new t(0,-1,-1)],r=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],o=new Array(512),a=new Array(512);e.seed=function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t=0;t<256;t++){var i;i=1&t?r[t]^255&e:r[t]^e>>8&255,o[t]=o[t+256]=i,a[t]=a[t+256]=n[i%12]}},e.seed(0);var i=.5*(Math.sqrt(3)-1),l=(3-Math.sqrt(3))/6,u=1/6;function c(e){return e*e*e*(e*(6*e-15)+10)}function s(e,t,n){return(1-n)*e+n*t}return e.simplex2=function(e,t){var n,r,u=(e+t)*i,c=Math.floor(e+u),s=Math.floor(t+u),f=(c+s)*l,d=e-c+f,p=t-s+f;d>p?(n=1,r=0):(n=0,r=1);var v=d-n+l,m=p-r+l,h=d-1+2*l,b=p-1+2*l,y=a[(c&=255)+o[s&=255]],w=a[c+n+o[s+r]],g=a[c+1+o[s+1]],_=.5-d*d-p*p,x=.5-v*v-m*m,M=.5-h*h-b*b;return 70*((_<0?0:(_*=_)*_*y.dot2(d,p))+(x<0?0:(x*=x)*x*w.dot2(v,m))+(M<0?0:(M*=M)*M*g.dot2(h,b)))},e.simplex3=function(e,t,n){var r,i,l,c,s,f,d=(e+t+n)*(1/3),p=Math.floor(e+d),v=Math.floor(t+d),m=Math.floor(n+d),h=(p+v+m)*u,b=e-p+h,y=t-v+h,w=n-m+h;b>=y?y>=w?(r=1,i=0,l=0,c=1,s=1,f=0):b>=w?(r=1,i=0,l=0,c=1,s=0,f=1):(r=0,i=0,l=1,c=1,s=0,f=1):y<w?(r=0,i=0,l=1,c=0,s=1,f=1):b<w?(r=0,i=1,l=0,c=0,s=1,f=1):(r=0,i=1,l=0,c=1,s=1,f=0);var g=b-r+u,_=y-i+u,x=w-l+u,M=b-c+2*u,E=y-s+2*u,k=w-f+2*u,j=b-1+.5,T=y-1+.5,O=w-1+.5,C=a[(p&=255)+o[(v&=255)+o[m&=255]]],I=a[p+r+o[v+i+o[m+l]]],S=a[p+c+o[v+s+o[m+f]]],A=a[p+1+o[v+1+o[m+1]]],F=.6-b*b-y*y-w*w,P=.6-g*g-_*_-x*x,N=.6-M*M-E*E-k*k,R=.6-j*j-T*T-O*O;return 32*((F<0?0:(F*=F)*F*C.dot3(b,y,w))+(P<0?0:(P*=P)*P*I.dot3(g,_,x))+(N<0?0:(N*=N)*N*S.dot3(M,E,k))+(R<0?0:(R*=R)*R*A.dot3(j,T,O)))},e.perlin2=function(e,t){var n=Math.floor(e),r=Math.floor(t);e-=n,t-=r;var i=a[(n&=255)+o[r&=255]].dot2(e,t),l=a[n+o[r+1]].dot2(e,t-1),u=a[n+1+o[r]].dot2(e-1,t),f=a[n+1+o[r+1]].dot2(e-1,t-1),d=c(e);return s(s(i,u,d),s(l,f,d),c(t))},e.perlin3=function(e,t,n){var r=Math.floor(e),i=Math.floor(t),l=Math.floor(n);e-=r,t-=i,n-=l;var u=a[(r&=255)+o[(i&=255)+o[l&=255]]].dot3(e,t,n),f=a[r+o[i+o[l+1]]].dot3(e,t,n-1),d=a[r+o[i+1+o[l]]].dot3(e,t-1,n),p=a[r+o[i+1+o[l+1]]].dot3(e,t-1,n-1),v=a[r+1+o[i+o[l]]].dot3(e-1,t,n),m=a[r+1+o[i+o[l+1]]].dot3(e-1,t,n-1),h=a[r+1+o[i+1+o[l]]].dot3(e-1,t-1,n),b=a[r+1+o[i+1+o[l+1]]].dot3(e-1,t-1,n-1),y=c(e),w=c(t),g=c(n);return s(s(s(u,v,y),s(f,m,y),g),s(s(d,h,y),s(p,b,y),g),w)},e})?r.call(t,n,t,e):r)||(e.exports=o)},53:(e,t)=>{"use strict";var n,r,o,a,i;if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,u=null,c=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(c,0),e}},s=Date.now();t.unstable_now=function(){return Date.now()-s},n=function(e){null!==l?setTimeout(n,0,e):(l=e,setTimeout(c,0))},r=function(e,t){u=setTimeout(e,t)},o=function(){clearTimeout(u)},a=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var f=window.performance,d=window.Date,p=window.setTimeout,v=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)t.unstable_now=function(){return f.now()};else{var h=d.now();t.unstable_now=function(){return d.now()-h}}var b=!1,y=null,w=-1,g=5,_=0;a=function(){return t.unstable_now()>=_},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):g=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,M=x.port2;x.port1.onmessage=function(){if(null!==y){var e=t.unstable_now();_=e+g;try{y(!0,e)?M.postMessage(null):(b=!1,y=null)}catch(e){throw M.postMessage(null),e}}else b=!1},n=function(e){y=e,b||(b=!0,M.postMessage(null))},r=function(e,n){w=p((function(){e(t.unstable_now())}),n)},o=function(){v(w),w=-1}}function E(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<T(o,t)))break e;e[r]=t,e[n]=o,n=r}}function k(e){return void 0===(e=e[0])?null:e}function j(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,i=e[a],l=a+1,u=e[l];if(void 0!==i&&0>T(i,n))void 0!==u&&0>T(u,i)?(e[r]=u,e[l]=n,r=l):(e[r]=i,e[a]=n,r=a);else{if(!(void 0!==u&&0>T(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}return null}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var O=[],C=[],I=1,S=null,A=3,F=!1,P=!1,N=!1;function R(e){for(var t=k(C);null!==t;){if(null===t.callback)j(C);else{if(!(t.startTime<=e))break;j(C),t.sortIndex=t.expirationTime,E(O,t)}t=k(C)}}function q(e){if(N=!1,R(e),!P)if(null!==k(O))P=!0,n(L);else{var t=k(C);null!==t&&r(q,t.startTime-e)}}function L(e,n){P=!1,N&&(N=!1,o()),F=!0;var i=A;try{for(R(n),S=k(O);null!==S&&(!(S.expirationTime>n)||e&&!a());){var l=S.callback;if(null!==l){S.callback=null,A=S.priorityLevel;var u=l(S.expirationTime<=n);n=t.unstable_now(),"function"==typeof u?S.callback=u:S===k(O)&&j(O),R(n)}else j(O);S=k(O)}if(null!==S)var c=!0;else{var s=k(C);null!==s&&r(q,s.startTime-n),c=!1}return c}finally{S=null,A=i,F=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var D=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){P||F||(P=!0,n(L))},t.unstable_getCurrentPriorityLevel=function(){return A},t.unstable_getFirstCallbackNode=function(){return k(O)},t.unstable_next=function(e){switch(A){case 1:case 2:case 3:var t=3;break;default:t=A}var n=A;A=t;try{return e()}finally{A=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=D,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=A;A=e;try{return t()}finally{A=n}},t.unstable_scheduleCallback=function(e,a,i){var l=t.unstable_now();if("object"==typeof i&&null!==i){var u=i.delay;u="number"==typeof u&&0<u?l+u:l,i="number"==typeof i.timeout?i.timeout:U(e)}else i=U(e),u=l;return e={id:I++,callback:a,priorityLevel:e,startTime:u,expirationTime:i=u+i,sortIndex:-1},u>l?(e.sortIndex=u,E(C,e),null===k(O)&&e===k(C)&&(N?o():N=!0,r(q,u-l))):(e.sortIndex=i,E(O,e),P||F||(P=!0,n(L))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();R(e);var n=k(O);return n!==S&&null!==S&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<S.expirationTime||a()},t.unstable_wrapCallback=function(e){var t=A;return function(){var n=A;A=t;try{return e.apply(this,arguments)}finally{A=n}}}},3840:(e,t,n)=>{"use strict";e.exports=n(53)},6069:(e,t,n)=>{var r=n(3379),o=n(8561);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},5295:(e,t,n)=>{var r=n(3379),o=n(5700);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},3379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function l(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],c=n[u]||0,s="".concat(u," ").concat(c);n[u]=c+1;var f=l(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:h(d,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var a=m++;n=v||(v=c(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);i[o].references--}for(var a=u(e,t),c=0;c<n.length;c++){var s=l(n[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}}},e=>{e.O(0,[216],()=>{return t=5836,e(e.s=t);var t});e.O()}]);