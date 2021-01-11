(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{17:function(e,t,a){e.exports={container:"Cards_container__sl4Ta",card:"Cards_card__IykRH",infected:"Cards_infected__3gxU1",recovered:"Cards_recovered__2iGTx",deaths:"Cards_deaths__2Yd2k"}},204:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a(69),o=a.n(c),s=a(6),u=a.n(s),i=a(11),d=a(16),l=a(70),f=a.n(l),p=a(71),j=a.n(p),b=a(222),v=a(226),h=a(223),m=a(224),x=a(17),O=a.n(x),g=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;if(!a)return Object(n.jsx)("p",{children:'"loading..."'});var s=[{title:"Infected",description:"Number of active cases of COVID-19",class:O.a.infected,value:a.value},{title:"Recovered",description:"Number of recoveries from COVID-19",class:O.a.recovered,value:r.value},{title:"Deaths",description:"Number of deaths caused by COVID-19",class:O.a.deaths,value:c.value}];return Object(n.jsx)("div",{className:O.a.container,children:Object(n.jsx)(b.a,{container:!0,spacing:3,justify:"center",children:s.map((function(e){return Object(n.jsx)(b.a,{item:!0,component:v.a,xs:12,md:3,className:j()(O.a.card,e.class),children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:e.title}),Object(n.jsx)(m.a,{variant:"h5",children:Object(n.jsx)(f.a,{start:0,end:e.value,duration:2.5,separator:","})}),Object(n.jsx)(m.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(m.a,{variant:"body2",children:e.description})]})},e.title)}))})})},_=a(43),C=a(31),y=a.n(C),w="https://covid19.mathdro.id/api",k=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w,t&&(a="".concat(w,"/countries/").concat(t)),e.prev=2,e.next=5,y.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(w,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(w,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=a(76),S=a.n(N),V=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(r.useState)(),f=Object(d.a)(l,2),p=f[0],j=f[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=p?Object(n.jsx)(_.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?Object(n.jsx)(_.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return Object(n.jsx)("div",{className:S.a.container,children:s?v:b})},E=a(227),U=a(225),B=a(77),J=a.n(B),R=function(e){var t=e.handleCountryChange,a=Object(r.useState)(),c=Object(d.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(n.jsx)(E.a,{className:J.a.formControl,children:Object(n.jsxs)(U.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Global"}),o?o.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)})):null]})})},A=a.p+"static/media/image.9e5d4fc7.png",G=a(44),P=a.n(G),T=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(""),s=Object(d.a)(o,2),l=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:a=e.sent,c(a),f(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:P.a.container,children:[Object(n.jsx)("img",{src:A,alt:"COVID-19",className:P.a.image}),a?Object(n.jsx)(g,{data:a}):null,Object(n.jsx)(R,{handleCountryChange:p}),a?Object(n.jsx)(V,{data:a,country:l}):null]})};o.a.render(Object(n.jsx)(T,{}),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__wgd7X",image:"App_image__3IpjJ"}},76:function(e,t,a){e.exports={container:"Chart_container__27bIj"}},77:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__qXurz"}}},[[204,1,2]]]);
//# sourceMappingURL=main.4a851f60.chunk.js.map