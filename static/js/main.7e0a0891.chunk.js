(this["webpackJsonpcrypto-board"]=this["webpackJsonpcrypto-board"]||[]).push([[0],{168:function(e,n,t){},169:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(54),o=t.n(c),i=(t(67),t(1)),u=t(2);function l(){var e=Object(i.a)(["\n    padding: 30px;\n"]);return l=function(){return e},e}var s=u.b.div(l()),d=t(5),f=t(9),m=t.n(f),v=t(23),b=t(34),p=t.n(b),E=t(3);function g(){var e=Object(i.a)(["\n            text-shadow: 0 0 20px #00d0ff, 5px 5px 5px #69eaff;\n        "]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n    justify-self: right;\n    font-size: calc(1em + .5vw);\n    cursor: pointer;\n    ","\n"]);return h=function(){return e},e}function y(){var e=Object(i.a)(["\n    font-size: calc(1.1em + 1vw);\n"]);return y=function(){return e},e}function x(){var e=Object(i.a)(["\n    display: grid;\n    grid-template-columns: minmax(100px, 1fr) 50px 50px 50px;\n    grid-gap: 5vw;\n    margin-bottom: 30px;\n"]);return x=function(){return e},e}var O=u.b.div(x()),j=u.b.div(y()),C=u.b.div(h(),(function(e){return e.active&&Object(u.a)(g())})),w=function(e){var n=e.name,t=(e.active,r.a.useContext(d.a)),a=t.state,c=t.dispatch;return r.a.createElement(C,{active:n===a.page,onClick:function(){return c({type:E.i,payload:n})}},n)};function S(){return r.a.createElement(O,null,r.a.createElement(j,null,"_CryptoBoard_"),r.a.createElement(w,{name:"Dashboard"}),r.a.createElement(w,{name:"Settings"}))}function k(){var e=Object(i.a)(["\n    margin: 10px;\n    text-transform: capitalize;\n"]);return k=function(){return e},e}var T=u.b.div(k());function R(e){var n=r.a.useContext(d.a).state;return r.a.createElement(T,null,n.firstVisit&&r.a.createElement("h3",null,"Welcome to CryptoBoard!, it's your first visit, you can see a specific chart in dashboard and change your settings in settings page."))}var F=t(6);function I(){var e=Object(i.a)(["\n    background-color: transparent;\n    margin: 20px;\n    padding: 5px;\n    ",";\n    color: ",";\n    cursor: pointer;\n    &:hover {\n        ","\n    }\n"]);return I=function(){return e},e}function P(){var e=Object(i.a)(["\n    display: grid;\n    place-items: center;\n"]);return P=function(){return e},e}var _=u.b.div(P()),L=u.b.div(I(),F.c,F.a,F.b);function B(){var e=r.a.useContext(d.a),n=e.state,t=e.dispatch;return r.a.createElement(_,null,r.a.createElement(L,{onClick:function(){var e={favorites:n.favorites,page:"Dashboard",firstVisit:!1};t({type:E.j,payload:e}),localStorage.setItem("cryptoBoard",JSON.stringify(e))}},"Confirm Favorites"))}function A(){var e=Object(i.a)(["\n    background-color: rgba(255, 255, 255, 0.5);\n    width: 1vw;\n    height: 6vh;\n    border-radius: 30px;\n    border-color: #00edf9;\n    border-width: 0;\n    padding-left: 25px;\n    transition: all 1s;\n    &:focus {\n        width: 30vw;\n        border-radius: 5px;\n    }\n"]);return A=function(){return e},e}function D(){var e=Object(i.a)(["\n    position: relative;\n    display: flex;\n    margin-bottom: 50px;\n    width: 1vw;\n"]);return D=function(){return e},e}function H(){var e=Object(i.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: #00edf9;\n    margin: 3px;\n    z-index: -1;\n"]);return H=function(){return e},e}var N=u.b.div(H()),U=u.b.form(D()),M=u.b.input(A());function z(){var e=r.a.useContext(d.a),n=e.dispatch,t=e.state;return r.a.createElement("div",null,r.a.createElement(U,null,r.a.createElement(M,{type:"text",name:"search",value:t.query,onChange:function(e){var t=e.target.value.toLowerCase();n({type:E.e,payload:t}),setTimeout((function(){n({type:E.g})}),500)}}),r.a.createElement(N,null,r.a.createElement("i",{className:"material-icons"},"search"))))}t(36);function q(){var e=Object(i.a)(["\n    display: flex;\n    \n"]);return q=function(){return e},e}function G(){var e=Object(i.a)(["\n    margin-right: 10px;\n    select ,\n        option {\n            font-size: calc(10px + 0.5vw);\n            cursor: pointer;\n            background-color: #010010;\n            color: #fff;\n        \n    }\n"]);return G=function(){return e},e}var V=u.b.div(G()),W=u.b.div(q()),J=function(){var e=r.a.useContext(d.a),n=e.state,t=e.dispatch;return r.a.createElement(V,null,r.a.createElement("label",{for:"toCurrency"},"Currency: "),r.a.createElement("select",{id:"toCurrency",name:"toCurrency",value:n.toCurrency,onChange:function(e){return function(e){var n=e.target.value;t({type:E.h,payload:n})}(e)}},r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"BTC"},"BTC")))},K=function(){var e=r.a.useContext(d.a),n=e.state,t=e.dispatch;return r.a.createElement(V,null,r.a.createElement("label",{for:"timePoints"},"Time: "),r.a.createElement("select",{id:"timePoints",name:"timePoints",value:n.timePoints,onChange:function(e){return function(e){var n=e.target.value;t({type:E.k,payload:n})}(e)}},r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"12"},"12")))},Y=function(){var e=r.a.useContext(d.a),n=e.state,t=e.dispatch;return r.a.createElement(V,null,r.a.createElement("select",{name:"timeRange",value:n.timeRange,onChange:function(e){return function(e){var n=e.target.value;t({type:E.l,payload:n})}(e)}},r.a.createElement("option",{value:"months"},"months"),r.a.createElement("option",{value:"days"},"days"),r.a.createElement("option",{value:"hours"},"hours")))},Q=function(){return r.a.createElement(W,null,r.a.createElement(J,null),r.a.createElement(K,null),r.a.createElement(Y,null))},$=t(58),X=t.n($);function Z(){var e=Object(i.a)(["\n    width: 70vw;\n    height: 30vw;\n    margin: 0 auto;\n    display: grid;\n    grid-template-rows: 10% 1fr;\n"]);return Z=function(){return e},e}function ee(){var e=Object(i.a)(["\n    height: 5vw;\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\n    display: grid;\n    place-items: center;\n    grid-column: 3;\n"]);return ne=function(){return e},e}var te=r.a.lazy((function(){return t.e(3).then(t.bind(null,170))})),ae=u.b.div(ne()),re=function(){return r.a.createElement(ae,null,r.a.createElement("img",{src:X.a,alt:"loading"}))},ce=u.b.div(ee()),oe=u.b.div(Z());function ie(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(re,null)},r.a.createElement(te,{favored:!0,dashboard:!0})),r.a.createElement("hr",null),r.a.createElement(ce,null),r.a.createElement(oe,null,r.a.createElement(Q,null),r.a.createElement(se,null)))}function ue(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(re,null)},r.a.createElement(te,{favored:!0})),r.a.createElement(B,null),r.a.createElement("hr",null),r.a.createElement(z,null),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(re,null)},r.a.createElement(te,null)))}var le=t(59);function se(){var e=r.a.useContext(d.a).state,n=e.showStar,t=e.historical,a=e.timeLabels,c=e.toCurrency,o=[];for(var i in t)o.push(t[i][c]);return r.a.createElement(le.Line,{data:function(e){var t=e.getContext("2d").createLinearGradient(0,204,255,.3);return t.addColorStop(0,"rgba(0, 204, 255, 0.5)"),t.addColorStop(.5,"rgba(0, 204, 255, 0.7)"),t.addColorStop(1,"rgba(131, 0, 255, 0.91)"),{labels:a,datasets:[{label:"".concat(n+" to "+c," Price"),data:o,backgroundColor:t,borderColor:["rgba(0, 204, 255, 0.94)","rgba(0, 204, 255, 0.94)","rgba(0, 204, 255, 0.94)","rgba(0, 204, 255, 0.94)","rgba(0, 204, 255, 0.94)","rgba(0, 204, 255, 0.94)","rgba(0, 204, 255, 0.94)"],borderWidth:1,lineTension:.2}]}}})}t(168);var de=t(14),fe=t.n(de);fe.a.setApiKey("ce863a115f37457c7746646a6d4c7a29fc1c247e4a6cebebfb0ad9dd59d71539");var me=function(){var e=r.a.useContext(d.a),n=e.state,t=n.page,a=n.favorites,c=n.showStar,o=n.toCurrency,i=n.allCurrency,u=n.timeRange,l=n.timeForm,s=n.timePoints,f=e.dispatch,b=r.a.useCallback(Object(v.a)(m.a.mark((function e(){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.a.coinList();case 2:return n=e.sent,e.next=5,n.Data;case 5:t=e.sent,f({type:E.b,payload:t});case 7:case"end":return e.stop()}}),e)}))),[f]),g=r.a.useCallback(Object(v.a)(m.a.mark((function e(){var n,t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},e.t0=m.a.keys(a);case 2:if((e.t1=e.t0()).done){e.next=10;break}return t=e.t1.value,e.next=6,fe.a.priceFull(a[t],i);case 6:r=e.sent,n[a[t]]=r,e.next=2;break;case 10:f({type:E.d,payload:n});case 11:case"end":return e.stop()}}),e)}))),[f,a,i]),h=r.a.useCallback(Object(v.a)(m.a.mark((function e(){var n,t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t=[],a=s;case 3:if(!(a>=0)){e.next=12;break}return e.next=6,fe.a.priceHistorical(c,[o],p()().subtract(a,u).toDate());case 6:r=e.sent,n.push(r),t.push(p()().subtract(a,u).format(l));case 9:a--,e.next=3;break;case 12:f({type:E.c,payload:{historical:n,timeLabels:t}});case 13:case"end":return e.stop()}}),e)}))),[f,c,s,o,u]);return r.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("cryptoBoard"));b(),g(),h(),e&&f({type:E.f,payload:e})}),[c,o,s,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(R,null),"Settings"===t?r.a.createElement(ue,null):r.a.createElement(ie,null))};var ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null,r.a.createElement(d.b,null,r.a.createElement(me,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"f",(function(){return r})),t.d(n,"j",(function(){return c})),t.d(n,"i",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"g",(function(){return u})),t.d(n,"e",(function(){return l})),t.d(n,"m",(function(){return s})),t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return f})),t.d(n,"h",(function(){return m})),t.d(n,"l",(function(){return v})),t.d(n,"k",(function(){return b}));var a="FETCH_COINS",r="RETRIEVE_STORAGE",c="SET_STORAGE",o="SET_PAGE",i="ADD_FAVORITES",u="SEARCH",l="QUERY",s="SHOW_STAR",d="FETCH_PRICES",f="FETCH_HISTORICAL",m="SET_CURRENCY",v="SET_TIMERANGE",b="SET_TIMEPOINTS"},36:function(e,n,t){"use strict";t.d(n,"a",(function(){return C}));var a=t(1),r=t(0),c=t.n(r),o=t(2),i=t(6);function u(){var e=Object(a.a)(["\n    opacity: 0.7;\n    pointer-events: none;\n"]);return u=function(){return e},e}function l(){var e=Object(a.a)(["\n    &:hover {\n        ","\n    }\n"]);return l=function(){return e},e}function s(){var e=Object(a.a)(["\n    ",";\n    transform: scale(1.1, 1.1);\n"]);return s=function(){return e},e}function d(){var e=Object(a.a)(["\n    &:hover {\n        ","\n    }\n"]);return d=function(){return e},e}function f(){var e=Object(a.a)(["\n    ",";\n    ",";\n    transition: all 0.5s;\n    padding: 10px;\n"]);return f=function(){return e},e}var m=o.b.div(f(),i.f,i.d),v=Object(o.b)(m)(d(),i.b),b=Object(o.b)(m)(s(),i.b),p=Object(o.b)(v)(l(),i.e),E=Object(o.b)(v)(u());function g(){var e=Object(a.a)(["\n    width: 20%;\n    min-width: 25px;\n    height: 20%;\n    min-height: 25px;\n    padding: 1%;\n"]);return g=function(){return e},e}function h(){var e=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-size: ",";\n"]);return h=function(){return e},e}function y(){var e=Object(a.a)(["\n    display: flex;\n    justify-content: space-around;\n    overflow: hidden;\n    padding: 1%;\n"]);return y=function(){return e},e}var x=o.b.div(y()),O=o.b.div(h(),(function(e){return e.showStar?"calc(.5em + 1vw)":"100%"})),j=o.b.img(g());function C(e){var n=e.coin,t=e.coinKey,a=e.toggelFavorit,r=void 0!==a&&a,o=e.favored,i=void 0!==o&&o,u=e.price,l=void 0===u?null:u,s=e.disabled,d=void 0!==s&&s,f=e.showStar,m=void 0!==f&&f,g=e.dashboard,h=void 0!==g&&g,y=e.toCurrencey,C=void 0===y?null:y,w=v;return i&&!h?w=p:!i&&d?w=E:t===m&&(w=b),c.a.createElement(w,{onClick:r?function(){return r(t)}:void 0},c.a.createElement(x,null,c.a.createElement(O,{showStar:m},c.a.createElement("div",null,n&&n.CoinName),c.a.createElement("div",null,n&&n.Symbol),l?c.a.createElement("div",null,C&&l[t][C].PRICE," ",C):null),i&&c.a.createElement(j,{src:"https://www.cryptocompare.com".concat(n&&n.ImageUrl),alt:n&&n.CoinName})))}},5:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var a=t(60),r=t(61),c=t(4),o=t(0),i=t.n(o),u=t(3),l={page:"Dashboard",firstVisit:!0,coins:{},favorites:["BTC","ETH"],prices:{},toCurrency:"EUR",allCurrency:"USD, EUR, BTC",historical:[],timeLabels:[],timeRange:"months",timeForm:"MMM",timePoints:12,showStar:"BTC",query:"",found:[]},s=i.a.createContext();function d(e,n){var t=n.type,a=n.payload;switch(t){case u.b:return Object(c.a)(Object(c.a)({},e),{},{coins:a});case u.d:return Object(c.a)(Object(c.a)({},e),{},{prices:a});case u.c:return Object(c.a)(Object(c.a)({},e),{},{historical:a.historical,timeLabels:a.timeLabels});case u.f:return Object(c.a)(Object(c.a)({},e),a);case u.i:return Object(c.a)(Object(c.a)({},e),{},{page:a});case u.h:return Object(c.a)(Object(c.a)({},e),{},{toCurrency:a});case u.k:return Object(c.a)(Object(c.a)({},e),{},{timePoints:a});case u.l:var o="MMM";return"days"===a?o="dd":"hours"===a&&(o="HH"),Object(c.a)(Object(c.a)({},e),{},{timeRange:a,timeForm:o});case u.e:return Object(c.a)(Object(c.a)({},e),{},{query:a});case u.g:var i=Object.keys(e.coins),l=e.query?i.filter((function(n){return e.coins[n].CoinName.toLowerCase().includes(e.query)||e.coins[n].Symbol.toLowerCase().includes(e.query)})):[];return Object(c.a)(Object(c.a)({},e),{},{found:l});case u.a:var s=[];return s=function(n){return e.favorites.includes(n)}(a)?e.favorites.filter((function(e){return e!==a})):[].concat(Object(r.a)(e.favorites),[a]),Object(c.a)(Object(c.a)({},e),{},{favorites:s});case u.m:return Object(c.a)(Object(c.a)({},e),{},{showStar:a});default:return e}}var f=function(e){var n=i.a.useReducer(d,l),t=Object(a.a)(n,2),r=t[0],c=t[1];return i.a.createElement(s.Provider,{value:{state:r,dispatch:c}},e.children)}},58:function(e,n,t){e.exports=t.p+"static/media/loading.d4587895.gif"},6:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return r})),t.d(n,"f",(function(){return c})),t.d(n,"b",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"c",(function(){return u}));var a="#00ccff";var r="background-color: ".concat("#061a44"),c=("background-color: ".concat("#010e2c",";"),"background-color: ".concat(a,";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),o="box-shadow: 0px 0px 4px 2px #00ccff",i="box-shadow: 0px 0px 2px 2px #e41111",u="font-size: 1.5em;"},62:function(e,n,t){e.exports=t(169)},67:function(e,n,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.7e0a0891.chunk.js.map