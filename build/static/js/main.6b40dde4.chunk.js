(this["webpackJsonptodo-saga-ramda"]=this["webpackJsonptodo-saga-ramda"]||[]).push([[0],{47:function(e,t,a){e.exports=a(65)},57:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return Pe}));var n=a(43),r=a(21),c=a(11),o=a(1),l=a.n(o),s=a(26),u=a.n(s),i=a(15),d=a(45),m=(a(57),a(23)),f=a(32),p=a(9),g=a.n(p),b=a(42),y=a.n(b),v=a(66),x=a(67),E=a(74),h=a(68),k=a(69),w=a(76),O=a(70),N=new RegExp(/#(\S+)/,"g"),j=new RegExp(/~(\S+)/,"g"),T=new RegExp(/@(\d{1,2}[-/]\d{1,2}[-/]?(\d{2})*)/,"g"),S=v.a(N),D=v.a(j),B=v.a(T),C=x.a((function(e,t,a,n){return E.a(S(e),D(t),B(a),h.a)(n)})),A=function(e,t){return E.a(k.a(e),w.a(v.a(t,"")))},$=E.a(A(N,"#"),O.a),_=A(j,"~"),F=E.a(A(T,"@"),O.a),Y=function(e){return(new DOMParser).parseFromString(e,"text/html").body.textContent};a(60);function I(e){var t=e.onAddTask,a=Object(o.useState)(""),n=Object(f.a)(a,2),r=n[0],c=n[1],s=Object(o.useCallback)((function(e){if(13===e.which){if(e.preventDefault(),!r)return;var a=(o=Y(r),{title:C("","","",o),category:$(o),tags:_(o),completeBy:F(o)}),n=a.completeBy;t(Object(m.a)(Object(m.a)({},a),{},{completeBy:n?g()(n,"DD-MM-YYYY").valueOf():void 0})),c("")}var o}),[r,t]);Object(o.useEffect)((function(){return document.addEventListener("keydown",s),function(){document.removeEventListener("keydown",s)}}));return l.a.createElement("div",{className:"relative"},l.a.createElement(y.a,{html:r,onChange:function(e){var t=e.target.value;console.log(C('<span style="color: blue">#$1</span>','<span style="color: gray">~$1</span>','<span style="color: green">@$1</span>',Y(t))),c(C('<span style="color: blue">#$1</span>','<span style="color: gray">~$1</span>','<span style="color: green">@$1</span>',Y(t)))},onKeyPress:s,placeholder:"Enter a new task (#category, ~tags, @date)",className:"".concat("outline-none border border-gray-500 focus:border-gray-600 rounded py-2 px-3 mb-2"," m-5")}))}var K=Object(i.b)(null,(function(e){return{addTask:function(t){e({type:"ADD_TASK_EXTENDED",task:t})}}}))((function(e){var t=e.addTask;return l.a.createElement(I,{onAddTask:t})})),L=a(31),M="focus:outline-none cursor-pointer text-left flex items-center box-content w-full text-white px-3 h-10 bg-gray-600 hover:bg-blue-700";function P(e){var t=e.menuItems,a=e.selected,n=e.onAddNewItem,r=e.onSelect,c=function(){var e=Object(o.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1],r=function(){var e=Object(o.useCallback)((function(e){(13===e.which||27===e.which)&&n(!1)}),[]);Object(o.useEffect)((function(){return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e,!1)}}));return l.a.createElement("input",{className:"flex flex-1 bg-transparent outline-none",type:"text",autoFocus:!0,placeholder:"start typing, press enter to add",onKeyPress:function(e){13===e.keyCode&&e.preventDefault()}})};return l.a.createElement("li",{className:"box-content flex m-0 border-gray-700 border-b"},l.a.createElement("button",{className:M,onClick:function(e){e.preventDefault(),n(!0)}},a?l.a.createElement(r,null):l.a.createElement(L.b,null)))},s=function(e){var t=e.title,a=e.count,n=e.isSelected,c="bg-blue-600 px-2 text-xs rounded-md text-gray-300 font-semibold border-blue-700 border"+(n?" border-blue-800":""),o=void 0===a?"":l.a.createElement("span",{className:c},a),s=M+(n?" bg-blue-800":"");return l.a.createElement("li",{className:"box-content flex m-0 border-gray-700 border-b"},l.a.createElement("button",{className:s,onClick:function(){return r(t)}},l.a.createElement("span",{className:"flex-1"},t),o))};return l.a.createElement("ul",{className:"flex flex-col p-0 text-white"},t.map((function(e){return l.a.createElement(s,Object.assign({key:e.title,isSelected:e.title===a},e))})),n?l.a.createElement(c,null):"")}var R=a(21).createSlice,J=["All","Overdue","Uncategorized"],W=J[0],X=J[1],z=J[2],G=R({name:"menu",initialState:{items:J,selected:W},reducers:{add:function(e,t){e.items.find((function(e){return e===t.payload}))||e.items.push(t.payload)},remove:function(e,t){e.items.filter((function(e){return e!==t.payload}))},select:function(e,t){e.selected=t.payload}}}),U=G.actions,q=U.add,H=(U.remove,U.select),Q=G.reducer,V=a(10),Z=function(e){return e.tasks},ee=function(e,t){switch(e){case W:return t;case X:return t.filter((function(e){var t=e.completeBy;return g()().isAfter(t)}));case z:return t.filter((function(e){return!e.category}));default:return t.filter((function(t){return t.category===e}))}},te=Object(V.a)([function(e){return e.menu.items},Z],(function(e,t){return e.map((function(e){return{title:e,count:ee(e,t).length}}))})),ae=Object(V.a)([function(e){return e.menu.selected},Z],(function(e,t){return ee(e,t)})),ne=Object(i.b)((function(e){return{menuItems:te(e),selected:e.menu.selected}}),{onSelect:H})((function(e){return l.a.createElement(P,e)})),re=a(71),ce=a(73),oe=a(44),le=a(77),se=a(72),ue=a(75),ie=a(38);function de(e){var t=e.date;return l.a.createElement("span",null,g()(t).fromNow())}g()().format();a(61);var me="".concat("outline-none flex-1 bg-transparent w-full p-0"," text-gray-900"),fe="".concat("outline-none flex-1 bg-transparent w-full p-0"," line-through text-gray-500"),pe="".concat("text-xs"," text-gray-600 font-hairline"),ge="".concat("text-xs"," text-red-700 font-semibold");function be(e){var t=e.task,a=t.id,n=t.title,r=t.completed,c=t.category,o=t.tags,s=void 0===o?[]:o,u=t.completeBy,i=e.onToggleTask,d=e.filterCategory,m=e.className,f=g()().isAfter(u),p=c?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return d(c)}},"#",c),(null===s||void 0===s?void 0:s.length)?l.a.createElement(L.a,{className:"text-gray-500"}):""):"",b=u?l.a.createElement("span",{className:f&&!r?ge:pe},l.a.createElement(de,{date:u})):"";return l.a.createElement("div",{className:"bg-gray-100 p-2 flex items-center ".concat(m)},l.a.createElement("div",{className:""},l.a.createElement("input",{className:"task__check hidden",type:"checkbox",defaultChecked:r,disabled:!0}),l.a.createElement("span",{className:"p-2 flex justify-center text-blue-500 text-xl",onClick:function(){return i(a)}},r?l.a.createElement(ie.a,null):l.a.createElement(ie.b,null))),l.a.createElement("div",{className:"flex-1 pr-4"},l.a.createElement("input",{className:r?fe:me,type:"text",value:n,readOnly:!0}),l.a.createElement("div",{className:"flex items-center text-sm text-gray-600"},p,s.map((function(e){return l.a.createElement("span",{key:e,className:"mr-1 italic"},"~",e)})))),b)}var ye=re.a({completed:ce.a(!0)}),ve=oe.a(ye),xe=le.a(ye),Ee=se.a(ue.a("completeBy")),he=function(e,t){return e<t-1?"border-b border-gray-300":""};function ke(e){var t=e.tasks,a=void 0===t?[]:t,n=e.empty,r={onToggleTask:e.onToggleTask,filterCategory:e.filterCategory},c=ve(a),o=Ee(xe(a));if(!a.length)return l.a.createElement("div",null,n);var s=function(e){var t=e.tasks;return l.a.createElement(l.a.Fragment,null,t.map((function(e,a){return l.a.createElement(be,Object.assign({key:e.id,className:he(a,t.length),task:e},r))})))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{tasks:o}),c.length?l.a.createElement("h4",{className:"px-4 py-1 bg-gray-400 text-white uppercase text-xs font-bold"},"completed"):"",l.a.createElement(s,{tasks:c}))}var we=1,Oe=Object(r.createSlice)({name:"tasks",initialState:[],reducers:{addTask:{reducer:function(e,t){e.push(t.payload)},prepare:function(e){var t;return{payload:Object(m.a)(Object(m.a)({},e),{},{id:we++,completeBy:null===(t=e.completeBy)||void 0===t?void 0:t.valueOf(),completed:!1})}}},toggleTask:function(e,t){var a=t.payload,n=e.find((function(e){return e.id===a}));n&&(n.completed=!n.completed)}}}),Ne=Oe.actions,je=Ne.addTask,Te=Ne.toggleTask,Se=Oe.reducer,De=Object(i.b)((function(e){return{tasks:ae(e)}}),{onToggleTask:Te,filterCategory:H})((function(e){return l.a.createElement(ke,e)}));a(62);var Be=function(){var e=function(){return l.a.createElement("span",{className:"flex m-5 text-blue-600 text-2xl italic font-light"},"No tasks found.")};return l.a.createElement("div",{className:"flex flex-row h-screen"},l.a.createElement("div",{className:"w-48 bg-gray-600"},l.a.createElement(ne,null)),l.a.createElement("div",{className:"flex-1"},l.a.createElement(De,{empty:l.a.createElement(e,null)}),l.a.createElement(K,null),l.a.createElement("div",{className:"m-5"})))},Ce=a(17),Ae=a.n(Ce),$e=a(25),_e=Ae.a.mark(Ie),Fe=Ae.a.mark(Ke),Ye=Ae.a.mark(Le);function Ie(e){var t;return Ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.task,a.next=3,Object($e.b)(je(t));case 3:if(!t.category){a.next=6;break}return a.next=6,Object($e.b)(q(t.category));case 6:case"end":return a.stop()}}),_e)}function Ke(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.c)("ADD_TASK_EXTENDED",Ie);case 2:case"end":return e.stop()}}),Fe)}function Le(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.a)(Ke);case 2:case"end":return e.stop()}}),Ye)}a(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=Object(d.a)(),Pe=Object(r.configureStore)({reducer:Object(c.d)({tasks:Se,menu:Q}),middleware:[].concat(Object(n.a)(Object(r.getDefaultMiddleware)()),[Me])});Me.run(Le),Pe.dispatch(q("tutorial")),Pe.dispatch(je({title:"You should have done this yesterday!",completeBy:g()().subtract(1,"d"),category:"tutorial"})),Pe.dispatch(je({title:"Get started by adding your own todos",completeBy:g()().add(30,"m"),category:"tutorial"})),Pe.dispatch(je({title:"Then tick them off.",completeBy:g()().add(1,"d"),category:"tutorial"})),Pe.dispatch(je({title:"And feel accomplished.",completeBy:g()().add(7,"d"),category:"tutorial"})),u.a.render(l.a.createElement(i.a,{store:Pe},l.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.6b40dde4.chunk.js.map