function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=u||l||Function("return this")(),a=Object.prototype.toString,f=Math.max,m=Math.min,v=function(){return d.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o,r,i,s,c,u,l=0,d=!1,a=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=r;return o=r=void 0,l=t,s=e.apply(i,n)}function _(e){return l=e,c=setTimeout(h,t),d?p(e):s}function b(e){var n=e-u;return void 0===u||n>=t||n<0||a&&e-l>=i}function h(){var e=v();if(b(e))return $(e);c=setTimeout(h,function(e){var n=t-(e-u);return a?m(n,i-(e-l)):n}(e))}function $(e){return c=void 0,y&&o?p(e):(o=r=void 0,s)}function x(){var e=v(),n=b(e);if(o=arguments,r=this,u=e,n){if(void 0===c)return _(u);if(a)return c=setTimeout(h,t),p(u)}return void 0===c&&(c=setTimeout(h,t)),s}return t=w(t)||0,g(n)&&(d=!!n.leading,i=(a="maxWait"in n)?f(w(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=r=c=void 0},x.flush=function(){return void 0===c?s:$(v())},x};var y={};!function(e){"function"==typeof define&&define.amd?define(e):y?y=e():window.enterView=e.call(this)}((()=>({selector:e,enter:t=(()=>{}),exit:n=(()=>{}),progress:o=(()=>{}),offset:r=0,once:i=!1})=>{let s=null,c=!1,u=[],l=0;function d(){const e=document.documentElement.clientHeight,t=window.innerHeight||0;l=Math.max(e,t)}function a(){c=!1;const e=function(){if(r&&"number"==typeof r){const e=Math.min(Math.max(0,r),1);return l-e*l}return l}();u=u.filter((r=>{const{top:s,bottom:c,height:u}=r.getBoundingClientRect(),l=s<e,d=c<e;if(l&&!r.__ev_entered){if(t(r),r.__ev_progress=0,o(r,r.__ev_progress),i)return!1}else!l&&r.__ev_entered&&(r.__ev_progress=0,o(r,r.__ev_progress),n(r));if(l&&!d){const t=(e-s)/u;r.__ev_progress=Math.min(1,Math.max(0,t)),o(r,r.__ev_progress)}return l&&d&&1!==r.__ev_progress&&(r.__ev_progress=1,o(r,r.__ev_progress)),r.__ev_entered=l,!0})),u.length||(window.removeEventListener("scroll",f,!0),window.removeEventListener("resize",m,!0),window.removeEventListener("load",v,!0))}function f(){c||(c=!0,s(a))}function m(){d(),a()}function v(){d(),a()}function g(e){const t=e.length,n=[];for(let o=0;o<t;o+=1)n.push(e[o]);return n}function w(){u=function(e,t=document){return"string"==typeof e?g(t.querySelectorAll(e)):e instanceof NodeList?g(e):e instanceof Array?e:void 0}(e)}e?(w(),u&&u.length?(s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},window.addEventListener("resize",m,!0),window.addEventListener("scroll",f,!0),window.addEventListener("load",v,!0),m(),a()):console.error("no selector elements found")):console.error("must pass a selector")}));const p=e=>{const{width:t}=document.querySelector(e).getBoundingClientRect(),n=window.innerHeight;document.querySelectorAll(`${e} .slide`).forEach((e=>{e.style.width=`${t}px`})),document.querySelector(`${e} .scroll-background `).style.height=`${n}px`,document.querySelector(`${e} .scroll-row`).style.height=`${n}px`};var _,b;_="#doge-scrolly",window.addEventListener("DOMContentLoaded",e(t)((()=>{p(_)}),150)),window.addEventListener("resize",e(t)((()=>{p(_)}),150)),e(y)({selector:`${_} .scroll-enter`,offset:1,enter:e=>{document.querySelector(`${_} .scroll-background`).classList.remove("unfixed"),document.querySelector(`${_} .scroll-background`).classList.add("fixed")},exit:e=>{document.querySelector(`${_} .scroll-background`).classList.remove("fixed")}}),e(y)({selector:`${_} .scroll-exit`,offset:0,enter:e=>{document.querySelector(`${_} .scroll-background`).classList.add("unfixed"),document.querySelector(`${_} .scroll-background`).classList.remove("fixed")},exit:e=>{document.querySelector(`${_} .scroll-background`).classList.remove("unfixed"),document.querySelector(`${_} .scroll-background`).classList.add("fixed")}}),e(y)({selector:`${_} .anno-block`,enter:e=>{!b&&document.querySelectorAll(`${_} .slide`).forEach((e=>e.classList.remove("active"))),document.querySelector(`${_} .slide.${e.id}`).classList.add("active")},exit:e=>{const t=document.querySelector(`${_} .slide.${e.id}`).previousElementSibling;t&&(t.classList.add("active"),document.querySelector(`${_} .slide.${e.id}`).classList.remove("active"))}});