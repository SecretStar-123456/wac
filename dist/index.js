!function webpackUniversalModuleDefinition(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.wac=n():e.wac=n()}(this,(()=>(()=>{"use strict";var e={d:(n,o)=>{for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{beforeCssLayout:()=>beforeCssLayout,beforeFutureCssLayout:()=>beforeFutureCssLayout,frameThrower:()=>frameThrower,onceAnimationEnd:()=>onceAnimationEnd,onceNextCssLayout:()=>onceNextCssLayout,onceTransitionEnd:()=>onceTransitionEnd,recursiveAnimationFrame:()=>recursiveAnimationFrame,setCssEndEvent:()=>setCssEndEvent});var recursiveAnimationFrame=function(e,n){window&&e&&Number.isInteger(e)&&e>0?window.requestAnimationFrame((function(){recursiveAnimationFrame(e-1,n)})):n()};function setCssEndEvent(e,n,o){var t=void 0===o?{}:o,i=t.tolerance,r=void 0===i?0:i,s=t.propertyName;return new Promise((function(o){var t;if(e){var i=null,d=n.charAt(0).toUpperCase()+n.slice(1),a=0;void 0!==e.style["Webkit".concat(d)]&&(i="webkit".concat(d,"End")),void 0!==(null===(t=e.style)||void 0===t?void 0:t.OTransition)&&(i="o".concat(n,"End")),void 0!==e.style[n]&&(i="".concat(n,"end")),e.clearCssEndEvent&&e.clearCssEndEvent(),e.clearCssEndEvent=function(){e.removeEventListener(i,end)},e.addEventListener(i,end)}else o(!1);function end(n){if((n.srcElement||n.target)===e){if(a>=r){if(s&&s!==n.propertyName)return;e.removeEventListener(i,end),o(n)}a+=1}}}))}function beforeCssLayout(e){"undefined"!=typeof window&&(null===window||void 0===window?void 0:window.requestAnimationFrame)||e(),window.requestAnimationFrame(e)}function beforeFutureCssLayout(e,n){"undefined"!=typeof window&&(null===window||void 0===window?void 0:window.requestAnimationFrame)||n(),recursiveAnimationFrame(e+1,n)}function frameThrower(e){return new Promise((function(n){beforeFutureCssLayout(e,n)}))}function onceNextCssLayout(){return new Promise((function(e){recursiveAnimationFrame(2,e)}))}function onceTransitionEnd(e,n){return void 0===n&&(n={}),new Promise((function(o){setCssEndEvent(e,"transition",n).then(o)}))}function onceAnimationEnd(e,n){return void 0===n&&(n={}),new Promise((function(o){setCssEndEvent(e,"animation",n).then(o)}))}return n})()));