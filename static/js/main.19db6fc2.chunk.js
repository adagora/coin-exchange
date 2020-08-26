(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{29:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},32:function(e,n,t){e.exports=t(60)},37:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(23),i=t.n(c),o=(t(37),t(12)),l=t(4),u=t.n(l),s=t(10),m=t(7),f=t(1),h=t(2);function p(){var e=Object(f.a)(["\n    font-size: 11px;\n    width: 64px;\n    margin: 3px 5px 0;\n"]);return p=function(){return e},e}function b(){var e=Object(f.a)(["\n    width: 24vw;\n"]);return b=function(){return e},e}function d(){var e=Object(f.a)(["\n    width: 34vw;\n"]);return d=function(){return e},e}function v(){var e=Object(f.a)(["\n    border: 1px solid #cccccc;\n    width: 14vh;\n"]);return v=function(){return e},e}var g=h.a.td(v()),E=Object(h.a)(g)(d()),k=Object(h.a)(g)(b()),w=h.a.button(p());function j(e){return r.a.createElement("tr",null,r.a.createElement(k,null,e.name),r.a.createElement(g,null,e.ticker),r.a.createElement(g,null,"$",e.price),r.a.createElement(g,null,e.showBalance?e.balance:"-"),r.a.createElement(E,null,r.a.createElement("form",{action:"#",method:"POST"},r.a.createElement(w,{className:"btn btn-info",onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)}},"Refresh"),r.a.createElement(w,{className:"btn btn-success",onClick:function(n){n.preventDefault(),e.handleTransaction(!0,e.tickerId)}},"Buy"),r.a.createElement(w,{className:"btn btn-danger",onClick:function(n){n.preventDefault(),e.handleTransaction(!1,e.tickerId)}},"Sell"))))}function O(){var e=Object(f.a)(["\n        font-size: 1rem;\n"]);return O=function(){return e},e}var x=h.a.table(O());function y(e){return r.a.createElement(x,{className:"table table-primary table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Ticker"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Balance"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,e.coinData.map((function(n){var t=n.key,a=n.name,c=n.ticker,i=n.price,o=n.balance;return r.a.createElement(j,{key:t,handleRefresh:e.handleRefresh,handleTransaction:e.handleTransaction,name:a,ticker:c,showBalance:e.showBalance,balance:o,price:i,tickerId:t})}))))}var B=t(27),N=t(28),S=t(31),C=t(30),D=t(29),T=t.n(D);function z(){var e=Object(f.a)(["\n        font-size: 3rem;\n        line-height: 8rem;\n        fold-weight: bold;\n        min-width: 300px;\n "]);return z=function(){return e},e}function I(){var e=Object(f.a)(["\n        background-color: #282c34;\n        min-height: 10vh;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        font-size: 36 px;\n        color: white;\n  "]);return I=function(){return e},e}function R(){var e=Object(f.a)(["\n    height: 8rem;\n    pointer-events: none;\n"]);return R=function(){return e},e}var F=h.a.img(R()),U=h.a.header(I()),P=h.a.h1(z()),q=function(e){Object(S.a)(t,e);var n=Object(C.a)(t);function t(){return Object(B.a)(this,t),n.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement(F,{src:T.a,alt:"React logo"}),r.a.createElement(P,null,"Coin Exchange"))}}]),t}(a.Component);function A(){var e=Object(f.a)(["\n    width: 150px;\n"]);return A=function(){return e},e}function J(){var e=Object(f.a)(["\n    margin 0 8px;\n"]);return J=function(){return e},e}function V(){var e=Object(f.a)(["\n    min-width: 250px;\n    margin: 0.5rem 0 0 2.5rem;\n    font-size: 1.5em;\n    vertical-align: middle;\n    text-align: left;\n"]);return V=function(){return e},e}function W(){var e=Object(f.a)(["\n    font-size: 2rem;\n    text-align: center;\n    margin-bottom: 2rem;\n    line-height: 3rem;\n    display: inline-block;\n"]);return W=function(){return e},e}var $=h.a.section(W()),H=h.a.div(V()),M=h.a.button(J()),G=Object(h.a)(M)(A()),K=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function L(e){var n=e.showBalance?"Hide Balance":"Show Balance",t="\xa0";e.showBalance&&(t=r.a.createElement(r.a.Fragment,null,K.format(e.amount)));var a="btn "+(e.showBalance?"btn-warning":"btn-info");return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,t),r.a.createElement($,null,r.a.createElement(G,{onClick:e.handleBalanceVisibilityChange,className:a},n),r.a.createElement(M,{className:"btn btn-success",onClick:e.handleBrrr},r.a.createElement("i",{className:"fa fa-helicopter"}))))}var Q=t(6),X=t.n(Q);t(56),t(57);function Y(){var e=Object(f.a)(["\n      text-align: center;\n      background-color: rgb(255, 255, 255);\n      color: #cccccc;\n"]);return Y=function(){return e},e}var Z=h.a.div(Y()),_=function(e){return parseFloat(Number(e).toFixed(3))};function ee(e){var n=Object(a.useState)(1e3),t=Object(m.a)(n,2),c=t[0],i=t[1],l=Object(a.useState)(!1),f=Object(m.a)(l,2),h=f[0],p=f[1],b=Object(a.useState)([]),d=Object(m.a)(b,2),v=d[0],g=d[1],E=function(){var e=Object(s.a)(u.a.mark((function e(){var n,t,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",a=t.map((function(e){return X.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(a);case 8:r=e.sent,c=r.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:_(n.quotes.USD.price)}})),g(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){0===v.length&&E()}));var k=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,X.a.get(t);case 3:a=e.sent,r=_(a.data.quotes.USD.price),c=v.map((function(e){var t=Object(o.a)({},e);return n===e.key&&(t.price=r),t})),g(c);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(Z,{className:"App"},r.a.createElement(q,null),r.a.createElement(L,{amount:c,showBalance:h,handleBrrr:function(){i((function(e){return e+1e4}))},handleBalanceVisibilityChange:function(){p((function(e){return!e}))}}),r.a.createElement(y,{coinData:v,showBalance:h,handleTransaction:function(e,n){var t=e?1:-1,a=v.map((function(e){var a=Object(o.a)({},e);return n==e.key&&(a.balance+=t,i((function(e){return e-t*a.price}))),a}));g(a)},handleRefresh:k}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.19db6fc2.chunk.js.map