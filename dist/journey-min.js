"use strict";function parse(e,i,r){var n=Object.create(null);if("string"!=typeof e||0===e.length)return n;i=i||"&",r=r||"=";for(var t=e.split(i),s=0,o=t.length;s<o;s++){var f=t[s].split(r),a=f[0].trim(),y=f[1].trim(),l=n[a];if(l)if(Array.isArray(l))l.push(y);else{var p=l;n[a]=new Array,n[a].push(p),n[a].push(y)}else n[a]=y}return n}function stringify(e,i,r){if(i=i||"&",r=r||"=",null!==e&&"object"===(void 0===e?"undefined":_typeof(e))){for(var n=Object.keys(e),t=n.length,s=t-1,o="",f=0;f<t;f++){var a=n[f],y=e[a],l=a+r;if(Array.isArray(y)){for(var p=y.length,u=p-1,v=0;v<p;++v)o+=l+y[v],v<u&&(o+=i);p&&f<s&&(o+=i)}else o+=l+y,f<s&&(o+=i)}return o}return""}function format(e,i){return e+"?"+querystring.stringify(i)}function parse$1(e,i){var r=e.indexOf("?");if(-1===r)return{};var n=e.slice(r+1),t=querystring.parse(n);return"string"==typeof i&&i.length>0?t[i]:t}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},querystring={stringify:stringify,parse:parse},URL={format:format,parse:parse$1};if("undefined"==typeof weex){window.weex={},weex.config={},weex.config.env={};var _env=weex.config.env;_env.platform="NOTWeexNative&&WeexWeb"}var env=weex.config.env,isiOS="iOS"===env.platform,isAndroid="Android"===env.platform,isDingtalk="DingTalk"===env.appName,isWeexWeb="Web"===env.platform,isWeexNative=isiOS||isAndroid,isWeb="NOTWeexNative&&WeexWeb"===env.platform,env$1={isiOS:isiOS,isAndroid:isAndroid,isDingtalk:isDingtalk,isWeexWeb:isWeexWeb,isWeexNative:isWeexNative,isWeb:isWeb},index={querystring:querystring,URL:URL,env:env$1};module.exports=index;
//# sourceMappingURL=journey-min.js.map
