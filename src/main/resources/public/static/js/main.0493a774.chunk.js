(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,r){t.exports=r.p+"static/media/CLUB.b9b419db.png"},27:function(t,e,r){t.exports=r.p+"static/media/KING.0c926d91.png"},28:function(t,e,r){t.exports=r.p+"static/media/QUEEN.5006f688.png"},29:function(t,e,r){t.exports=r.p+"static/media/HEART.4ede9234.png"},30:function(t,e,r){t.exports=r.p+"static/media/DIAMOND.393d1d7b.png"},31:function(t,e,r){t.exports=r.p+"static/media/SPADE.8fe8bc1f.png"},36:function(t,e,r){t.exports=r.p+"static/media/board.bc75515f.pdf"},41:function(t,e,r){t.exports=r(65)},49:function(t,e,r){},51:function(t,e,r){},61:function(t,e,r){var n={"./CLUB.png":26,"./DIAMOND.png":30,"./HEART.png":29,"./KING.png":27,"./QUEEN.png":28,"./SPADE.png":31};function o(t){var e=a(t);return r(e)}function a(t){var e=n[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id=61},65:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(32),i=r.n(a),c=(r(49),r(51),r(21)),u=r(24),l=r(11);var s=function(t){var e=t.image,r=t.name;return o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement(l.a,{id:"diceCard"},o.a.createElement(l.a.Img,{variant:"top",src:e,id:"cardImg"}),o.a.createElement(l.a.Body,null,o.a.createElement(l.a.Text,{id:"cardText"},r))))},f=(r(26),r(27),r(28),r(29),r(30),r(31),r(64),r(36)),h=r.n(f),p=r(40);function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var v={};c(v,o,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==e&&r.call(g,o)&&(v=g);var y=p.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var v=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),a=e[0],i=e[1],l=Object(n.useState)(!0),f=Object(u.a)(l,2),v=f[0],m=f[1],g=function(){var t=Object(c.a)(d().mark(function t(){var e,r;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/roll-dice");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,i(r),m(!1);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),y={SPADE:"\u0938\u0941\u0930\u0925",KING:"\u092c\u0941\u0930\u094d\u091c\u093e",QUEEN:"\u0932\u0902\u0917\u0941\u0930",DIAMOND:"\u0907\u091f",CLUB:"\u091a\u093f\u0921\u0940",HEART:"\u092a\u093e\u0928"};Object(n.useEffect)(function(){g()},["/roll-dice"]);var w=function(){var t=Object(c.a)(d().mark(function t(){return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},v?o.a.createElement(p.a,{height:"500",width:"",radisu:1,color:"#4fa94d",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0}):a.map(function(t){return o.a.createElement(s,{key:t.diceId,name:y[t.face],image:r(61)("./".concat(t.face,".png"))})})),o.a.createElement("pre",null),o.a.createElement("button",{onClick:w,id:"rollButton",className:"btn btn-success btn-lg col-lg-10"},"Roll Again"),o.a.createElement("pre",null),o.a.createElement("div",null,o.a.createElement("a",{className:"btn btn-success",href:h.a,target:"_blank"},"Download Board")))};var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"mainHeading"}," Langur Burja (\u0932\u0902\u0917\u0941\u0930 \u092c\u0941\u0930\u094d\u091c\u093e)"),o.a.createElement(v,null),o.a.createElement("pre",null),o.a.createElement("div",{className:"copyRight"}," \xa9 2022 - Ram Chapagai"))},g=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,66)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};r(62);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null))),g()}},[[41,3,2]]]);
//# sourceMappingURL=main.0493a774.chunk.js.map