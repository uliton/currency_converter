(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(9),r=c.n(s),i=c(10),o=c(2),u=c(7),j=c(4),l=c(8),b=function(){var e=Object(l.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://bank.gov.ua/NBUStatService/v1/statdirectory/","/exchange?json"));case 3:return t=e.sent,e.abrupt("return",t.json());case 7:throw e.prev=7,e.t0=e.catch(0),new Error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=(c(18),c(0)),p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),r=Object(o.a)(s,2),j=r[0],l=r[1],p=Object(n.useState)(0),m=Object(o.a)(p,2),h=m[0],O=m[1],x=Object(n.useState)(),v=Object(o.a)(x,2),_=v[0],f=v[1],N=Object(n.useState)(0),g=Object(o.a)(N,2),w=g[0],y=g[1];Object(n.useEffect)((function(){b().then((function(e){a(Object(i.a)(e))}))}),[]),Object(n.useEffect)((function(){!j&&_&&l((_*w/h).toFixed(2)),j&&w&&f((j*h/w).toFixed(2))}),[j,h]),Object(n.useEffect)((function(){!_&&j&&f((j*h/w).toFixed(2)),_&&h&&l((_*w/h).toFixed(2))}),[_,w]);var k=c.find((function(e){return 840===e.r030})),S=c.find((function(e){return 978===e.r030}));return Object(d.jsx)(d.Fragment,{children:c.length>0&&Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"convert__header",children:[Object(d.jsx)("div",{className:"convert__header--title",children:"\u0412\u0430\u043b\u044e\u0442\u043d\u0438\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),c.length>0&&Object(d.jsxs)("div",{className:"convert__header--info",children:[Object(d.jsx)("p",{children:"\u041d\u0430\u044f\u0432\u043d\u0438\u0439 \u043a\u0443\u0440\u0441 \u0434\u043e UAH"}),Object(d.jsxs)("div",{children:["USD - ".concat(k.rate.toFixed(4)),Object(d.jsx)("br",{}),"EUR - ".concat(S.rate.toFixed(4))]})]})]}),Object(d.jsxs)("div",{className:"convert__container",children:[Object(d.jsxs)("div",{className:"convert__item item",children:[Object(d.jsx)("div",{className:"item__query",children:0!==j&&j}),Object(d.jsxs)("div",{className:"item__wrapper",children:[h?Object(d.jsx)(u.DebounceInput,{type:"text",className:"item__input",value:j,debounceTimeout:1e3,onChange:function(e){l(e.target.value)}}):Object(d.jsx)("input",{disabled:!0,className:"item__input"}),Object(d.jsxs)("div",{className:"item__wrapper--buttons",children:[Object(d.jsx)("button",{type:"button",className:"item__wrapper--button",onClick:function(){void 0===j&&h?l(1):h&&l(Number(j)+1)},children:"+"}),Object(d.jsx)("button",{type:"button",className:"item__wrapper--button",onClick:function(){j-1>0&&l(Number(j)-1)},children:"-"})]})]}),Object(d.jsxs)("select",{className:"item__select",onChange:function(e){O(Math.round(100*e.target.value)/100)},children:[Object(d.jsx)("option",{value:0,disabled:!0,selected:!0,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0433\u0440\u043e\u0448\u043e\u0432\u0443 \u043e\u0434\u0438\u043d\u0438\u0446\u044e"}),Object(d.jsx)("option",{value:1,children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 \u0433\u0440\u0438\u0432\u043d\u044f"}),c.map((function(e){return Object(d.jsx)("option",{value:e.rate,children:e.txt},e.r030)}))]})]}),Object(d.jsxs)("div",{className:"convert__item item",children:[Object(d.jsx)("div",{className:"item__query",children:0!==_&&_}),Object(d.jsxs)("div",{className:"item__wrapper",children:[w?Object(d.jsx)(u.DebounceInput,{type:"text",className:"item__input",value:_,debounceTimeout:1e3,onChange:function(e){f(e.target.value)}}):Object(d.jsx)("input",{disabled:!0,className:"item__input"}),Object(d.jsxs)("div",{className:"item__wrapper--buttons",children:[Object(d.jsx)("button",{type:"button",className:"item__wrapper--button",onClick:function(){void 0===_&&w?f(1):w&&f(Number(_)+1)},children:"+"}),Object(d.jsx)("button",{type:"button",className:"item__wrapper--button",onClick:function(){_-1>0&&f(Number(_)-1)},children:"-"})]})]}),Object(d.jsxs)("select",{className:"item__select",onChange:function(e){y(Math.round(100*e.target.value)/100)},children:[Object(d.jsx)("option",{value:0,disabled:!0,selected:!0,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0433\u0440\u043e\u0448\u043e\u0432\u0443 \u043e\u0434\u0438\u043d\u0438\u0446\u044e"}),Object(d.jsx)("option",{value:1,children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 \u0433\u0440\u0438\u0432\u043d\u044f"}),c.map((function(e){return Object(d.jsx)("option",{value:e.rate,children:e.txt},e.r030)}))]})]})]})]})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c7c5227d.chunk.js.map