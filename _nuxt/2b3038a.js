(window.webpackJsonp=window.webpackJsonp||[]).push([[17,7,11],{300:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},301:function(t,e,r){var n=r(302);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.default=t.exports,t.exports.__esModule=!0},302:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.default=t.exports,t.exports.__esModule=!0},305:function(t,e,r){r(19),r(16),r(22),r(30),r(18),r(31);var n=r(300),o=r(301),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(37),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,O=void 0===f?[]:f,d=data.class,y=data.staticClass,style=data.style,j=data.staticStyle,w=data.attrs,v=void 0===w?{}:w,m=o(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,y],style:[style,j],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"27.977",height:"27.977",viewBox:"0 0 27.977 27.977"},v)},m),O.concat([r("path",{attrs:{id:"Union_22","data-name":"Union 22",d:"M13100.988,2257.787l-11.19,11.191-2.8-2.8,11.19-11.191L13087,2243.8l2.8-2.8,11.19,11.191L13112.18,2241l2.8,2.8-11.19,11.191,11.19,11.191-2.8,2.8Z",transform:"translate(-13087 -2241)",fill:"#E1001E"}})]))}}},364:function(t,e,r){"use strict";r.r(e);r(19),r(16),r(22),r(30),r(18),r(31);var n=r(10),o=r(305),c=r.n(o),l=r(75);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"LastEditionPopup",components:{CloseIcon:c.a},computed:O({},Object(l.c)({isOpen:"lastEditionPopupOpen"})),methods:O({},Object(l.b)({togglePopup:"togglePopup"}))},y=r(45),component=Object(y.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"popup popup--video",class:{"popup--open":t.isOpen}},[r("button",{staticClass:"btn--close",on:{click:function(e){return t.togglePopup({popup:"lastEditionPopupOpen"})}}},[r("CloseIcon")],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"popup__content"},[e("div",{staticClass:"popup__iframe"},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/sA4pkGXWrzU",frameborder:"0",allowfullscreen:""}})])])}],!1,null,null,null);e.default=component.exports}}]);