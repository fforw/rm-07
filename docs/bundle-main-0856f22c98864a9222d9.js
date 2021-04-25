var Demo;!function(){var e={20:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),s=0;s<i.length;s++){var u=i[s];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],s=e[i];(o?-1!==t.indexOf(i):t(i,s,e))&&(r[i]=s)}return r}},75:function(e){(function(){var t,r,n,o,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},r=process.hrtime,o=(t=function(){var e;return 1e9*(e=r())[0]+e[1]})(),i=1e9*process.uptime(),a=o-i):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},563:function(e,t,r){"use strict";const n=r(610),o=r(20),a=r(500),i=r(806);function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function c(e,t){return t.decode?o(e):e}function l(e){return Array.isArray(e)?e.sort():"object"==typeof e?l(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function f(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){const t=(e=f(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&c(r,e).includes(e.arrayFormatSeparator);r=a?c(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===r?r:c(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?c(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>c(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,i]=a(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:c(i,t),r(c(e,t),i,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=d(r[e],t);else n[e]=d(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=l(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[",o,"]"].join("")]:[...r,[u(t,e),"[",u(o,e),"]=",u(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[u(r,e),t,u(o,e)].join("")]:[[n,u(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,u(t,e)]:[...r,[u(t,e),"=",u(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?u(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":o.reduce(n(r),[]).join("&"):u(r,t)+"="+u(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(p(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:c(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=f(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query);let s=t.stringify(i,r);s&&(s=`?${s}`);let c=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c=`#${u(e.fragmentIdentifier,r)}`),`${n}${s}${c}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:o,query:a,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:i(a,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},500:function(e){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){"use strict";r.r(n);var e=r(75),t=r.n(e),o=r(563);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=/^(#)?([0-9a-f]+)$/i;function s(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function u(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}var c,l,f,p,d,m,g,y,v,h,b,x,w,_=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.r=void 0,this.g=void 0,this.b=void 0,this.r=t,this.g=r,this.b=n}var t,r,n;return t=e,n=[{key:"validate",value:function(t){var r;if("string"!=typeof t||!(r=i.exec(t)))return null;var n=r[2];return 3===n.length?new e(17*parseInt(n[0],16),17*parseInt(n[1],16),17*parseInt(n[2],16)):6===n.length?new e(parseInt(n.substring(0,2),16),parseInt(n.substring(2,4),16),parseInt(n.substring(4,6),16)):null}},{key:"from",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(Array.isArray(t)){for(var n=t.length,o=new Float32Array(3*n),a=r/255,i=0,s=0;s<n;s++){var u=e.from(t[s]);o[i++]=u.r*a,o[i++]=u.g*a,o[i++]=u.b*a}return o}var c=e.validate(t);if(!c)throw new Error("Invalid color "+t);return c.r*=r,c.g*=r,c.b*=r,c}},{key:"fromHSL",value:function(t,r,n){var o,a,i;if(r<=0)o=a=i=n;else{var s=n<.5?n*(1+r):n+r-n*r,c=2*n-s;o=u(c,s,t+1/3),a=u(c,s,t),i=u(c,s,t-1/3)}return new e(Math.round(255*o),Math.round(255*a),Math.round(255*i))}}],(r=[{key:"mix",value:function(t,r,n){return n||(n=new e),n.r=this.r+(t.r-this.r)*r|0,n.g=this.g+(t.g-this.g)*r|0,n.b=this.b+(t.b-this.b)*r|0,n}},{key:"multiply",value:function(t,r){return r||(r=new e),r.r=this.r*t,r.g=this.g*t,r.b=this.b*t,r}},{key:"toRGBHex",value:function(){return"#"+s(this.r)+s(this.g)+s(this.b)}},{key:"toHex",value:function(){return(this.r<<16)+(this.g<<8)+this.b}}])&&a(t.prototype,r),n&&a(t,n),e}(),S=(Math.sqrt(5),Math.PI,{width:0,height:0}),A=0,F=0;function j(){var e=-16&window.innerWidth,t=0|window.innerHeight;S.width=e,S.height=t,c.width=e,c.height=t,A=e/2,F=t/2,l.viewport(0,0,c.width,c.height)}function k(e,t,r){var n=e.createShader(t);if(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))return n;console.error(e.getShaderInfoLog(n)),e.deleteShader(n)}function E(e){var r=h?1:-1;l.uniform1f(d,t()()/1e3),l.uniform2f(g,S.width,S.height),l.uniform4f(y,A,S.height-F,b*r,(S.height-x)*r),l.clearColor(0,0,0,0),l.clear(l.COLOR_BUFFER_BIT);var n=l.TRIANGLES;l.drawArrays(n,0,6),requestAnimationFrame(E)}function O(e){h&&(A=e.clientX-w.left+self.pageXOffset,F=e.clientY-w.top+self.pageYOffset)}function I(e){h=!0,b=e.clientX-w.left+self.pageXOffset,x=e.clientY-w.top+self.pageYOffset,A=b,F=x}function C(e){h=!1}window.onload=function(){if(c=document.getElementById("screen"),!(l=c.getContext("webgl2")))return c.parentNode.removeChild(c),"Cannot run shader. Your browser does not support WebGL2.",void(document.getElementById("out").innerHTML="<p>Cannot run shader. Your browser does not support WebGL2.</p>");var e=k(l,l.VERTEX_SHADER,"#version 300 es\n#define GLSLIFY 1\n\n// an attribute is an input (in) to a vertex shader.\n// It will receive data from a buffer\nin vec4 a_position;\n\n// all shaders have a main function\nvoid main() {\n\n    // gl_Position is a special variable a vertex shader\n    // is responsible for setting\n    gl_Position = a_position;\n}\n"),t=k(l,l.FRAGMENT_SHADER,"#version 300 es\nprecision lowp float;\n#define GLSLIFY 1\n\nuniform float u_time;\nuniform float u_symmetry;\n\nuniform vec2 u_resolution;\nuniform vec4 u_mouse;\nuniform vec3 u_palette[10];\nuniform sampler2D u_env;\n\nconst float pi = 3.141592653589793;\nconst float tau = pi * 2.0;\nconst float invTau = 1.0 / tau;\nconst float hpi = pi * 0.5;\nconst float phi = (1.0+sqrt(5.0))/2.0;\n\nout vec4 outColor;\n\nfloat atan2(in float y, in float x)\n{\n    return abs(x) > abs(y) ? hpi - atan(x,y) : atan(y,x);\n}\n\nfloat sdCircle( vec2 p, float r )\n{\n    return length(p) - r;\n}\nfloat sdBox( in vec2 p, in vec2 b )\n{\n    vec2 d = abs(p)-b;\n    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);\n}\n\nfloat sdSegment( in vec2 p, in vec2 a, in vec2 b )\n{\n    vec2 pa = p-a, ba = b-a;\n    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n    return length( pa - ba*h );\n}\n\nvec3 getPaletteColor(float id)\n{\n    int last = u_palette.length() - 1;\n    //return id < float(last) ? mix(u_palette[int(id)], u_palette[int(id) + 1], fract(id)) : u_palette[last];\n    return mix(u_palette[int(id)], u_palette[int(id) + 1], fract(id));\n}\n\nvoid main(void)\n{\n    vec2 uv = (gl_FragCoord.xy-.5*u_resolution.xy)/u_resolution.y;\n    vec2 m = u_mouse.xy/u_resolution.xy;\n\n    float size = min(u_resolution.x, u_resolution.y);\n\n    float tx = ((gl_FragCoord.x) / size) * 2.0 - 1.0;\n    float ty = 1.0 - ((gl_FragCoord.y) / size) * 2.0;\n\n    if (u_resolution.x < u_resolution.y)\n    {\n        ty -= (u_resolution.y - u_resolution.x) / size;\n    }\n    else\n    {\n        tx -= (u_resolution.x - u_resolution.y) / size;\n    }\n\n    float a0 = ((atan2(ty,tx) - pi/2.0) / tau) * u_symmetry * 2.0;\n    float id = floor(a0);\n    float c = mod(id,2.0);\n    float a = c - fract(a0) * (c * 2.0 - 1.0);\n    float d = sqrt( tx * tx + ty * ty) * size;\n\n    float symAngle = tau/(u_symmetry*2.0);\n\n    vec2 p = vec2(\n        cos(a * symAngle) * d,\n        sin(a * symAngle) * d\n    );\n\n    float t0  = u_time *  1.03 * 0.5;\n    float t1  = u_time * -1.11 * 0.5;\n    float t11 = u_time *  1.07 * 0.5;\n    float t2  = u_time * -1.05 * 0.5;\n\n    float result = sdCircle(p - vec2(200.0 + sin(t0) * 200.0, 200.0 + cos(t0) * 200.0), 100.0);\n\n    result = min(result, sdSegment(p, vec2(300.0 + cos(t1) * 150.0, 300.0 + sin(t1) * 150.0), vec2(300.0 - cos(t1) * 150.0, 300.0 - sin(t1) * 150.0)));\n    result = min(result, sdBox(p - vec2(100.0 + cos(t2) * 300.0, 500.0 + sin(t2) * 300.0), vec2(80.0,60.0)));\n    result = min(result, sdCircle(p - vec2(700.0 + sin(t0) * 400.0, 700.0 + cos(t0) * 300.0), 100.0));\n\n    float scale = 0.03;\n    result *= scale;\n\n    float id2 =  floor(result / 4.0);\n\n    outColor = vec4(\n        floor(mod(result, 4.0)) >= 1.0 ? getPaletteColor(id2 + 1.0) : vec3(0),\n        1.0\n    );\n\n    //outColor = vec4(1,0,1,1);\n}\n");p=function(e,t,r){var n=e.createProgram();if(e.attachShader(n,t),e.attachShader(n,r),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS))return n;console.error(e.getProgramInfoLog(n)),e.deleteProgram(n)}(l,e,t);var r=l.getAttribLocation(p,"a_position"),n=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,n),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,1,1,-1]),l.STATIC_DRAW),f=l.createVertexArray(),l.bindVertexArray(f),l.enableVertexAttribArray(r);var a=l.FLOAT;l.vertexAttribPointer(r,2,a,!1,0,0),j(),l.viewport(0,0,l.canvas.width,l.canvas.height),l.createTexture(),d=l.getUniformLocation(p,"u_time"),m=l.getUniformLocation(p,"u_symmetry"),g=l.getUniformLocation(p,"u_resolution"),y=l.getUniformLocation(p,"u_mouse"),v=l.getUniformLocation(p,"u_palette"),l.getUniformLocation(p,"u_env"),l.useProgram(p);var i=+(o.parse(location.search).sym||"5");console.log("SYM = "+i),l.uniform1f(m,i),l.bindVertexArray(f),window.addEventListener("resize",j,!0),c.addEventListener("mousemove",O,!0),c.addEventListener("mousedown",I,!0),document.addEventListener("mouseup",C,!0),window.addEventListener("touchstart",I,!0),window.addEventListener("touchmove",O,!0),window.addEventListener("touchend",C,!0),w=document.getElementById("screen").getBoundingClientRect();var s=_.from(["#ff356c","#b9479e","#735cd2","#356cff","#778abd","#c0ab74","#ffc835","#ff9b46","#ff6b58","#ff356c"],1);l.uniform3fv(v,s),requestAnimationFrame(E)}}(),Demo=n}();
//# sourceMappingURL=bundle-main-0856f22c98864a9222d9.js.map