(function(){"use strict";var t={2354:function(t,i,n){var e=n(9242),o=n(3396),r=n(7139);const l={class:"wrapper"},s={class:"groups"},a={class:"group"},d={class:"group"},u={class:"group"},c={class:"group"},g=(0,o._)("div",null,[(0,o._)("img",{src:"",alt:""})],-1),h={key:0,class:"modal"},m=(0,o._)("p",null,"Вы победили",-1),f=[m],p={key:1,class:"overlay"};function v(t,i,n,e,m,v){const w=(0,o.up)("Draggable"),y=(0,o.up)("Container"),b=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",l,[(0,o._)("div",s,[(0,o._)("div",a,[(0,o.Wm)(y,{"group-name":"1","get-child-payload":v.getChildPayload1,onDrop:i[0]||(i[0]=t=>v.onDrop("items1",t)),orientation:"horizontal"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.items1,(t=>((0,o.wg)(),(0,o.j4)(w,{key:t.id},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"draggable-item",style:(0,r.j5)({backgroundPositionX:11*t.id[1]+"%",backgroundPositionY:33*t.id[0]+"%"})},null,4)])),_:2},1024)))),128))])),_:1},8,["get-child-payload"])]),(0,o._)("div",d,[(0,o.Wm)(y,{"group-name":"1","get-child-payload":v.getChildPayload2,onDrop:i[1]||(i[1]=t=>v.onDrop("items2",t)),orientation:"horizontal"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.items2,(t=>((0,o.wg)(),(0,o.j4)(w,{key:t.id},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"draggable-item",style:(0,r.j5)({backgroundPositionX:11*t.id[1]+"%",backgroundPositionY:33*t.id[0]+"%"})},null,4)])),_:2},1024)))),128))])),_:1},8,["get-child-payload"])]),(0,o._)("div",u,[(0,o.Wm)(y,{"group-name":"1","get-child-payload":v.getChildPayload3,onDrop:i[2]||(i[2]=t=>v.onDrop("items3",t)),orientation:"horizontal"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.items3,(t=>((0,o.wg)(),(0,o.j4)(w,{key:t.id},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"draggable-item",style:(0,r.j5)({backgroundPositionX:11*t.id[1]+"%",backgroundPositionY:33*t.id[0]+"%"})},null,4)])),_:2},1024)))),128))])),_:1},8,["get-child-payload"])]),(0,o._)("div",c,[(0,o.Wm)(y,{"group-name":"1","get-child-payload":v.getChildPayload4,onDrop:i[3]||(i[3]=t=>v.onDrop("items4",t)),orientation:"horizontal"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.items4,(t=>((0,o.wg)(),(0,o.j4)(w,{key:t.id},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"draggable-item",style:(0,r.j5)({backgroundPositionX:11*t.id[1]+"%",backgroundPositionY:33*t.id[0]+"%"})},null,4)])),_:2},1024)))),128))])),_:1},8,["get-child-payload"])])]),g]),(0,o._)("button",{onClick:i[4]||(i[4]=t=>v.getGame())},"Начать играть"),m.winner?((0,o.wg)(),(0,o.iD)("div",h,f)):(0,o.kq)("",!0),m.winner?((0,o.wg)(),(0,o.iD)("div",p)):(0,o.kq)("",!0),(0,o.Wm)(b)],64)}var w=n(9767);n(7658);const y=(t,i)=>{const{removedIndex:n,addedIndex:e,payload:o}=i;if(null===n&&null===e)return t;const r=[...t];let l=o;return null!==n&&(l=r.splice(n,1)[0]),null!==e&&r.splice(e,0,l),r},b=(t,i)=>{const n=[];for(let e=0;e<t;e++)n.push(i(e));return n},_=(t,i)=>{const n=[];for(let e=0;e<t;e++)e<10&&(e="0"+e),n.push(i(e));return n};function k(t){for(let i=t.length-1;i>0;i--){const n=Math.floor(Math.random()*(i+1));[t[i],t[n]]=[t[n],t[i]]}}var D={name:"Groups",components:{Container:w.W2,Draggable:w._l},data(){return{items1:b(10,(t=>({id:"0"+t}))),items2:b(10,(t=>({id:"1"+t}))),items3:b(10,(t=>({id:"2"+t}))),items4:b(10,(t=>({id:"3"+t}))),innerItems:_(40,(t=>({id:t}))),winItems:[],winner:!1}},methods:{async onDrop(t,i){await(this[t]=y(this[t],i)),await(this.winItems=[...this.items1,...this.items2,...this.items3,...this.items4]),this.win()},getChildPayload1(t){return this.items1[t]},getChildPayload2(t){return this.items2[t]},getChildPayload3(t){return this.items3[t]},getChildPayload4(t){return this.items4[t]},getGame(){k(this.innerItems);for(let t=0;t<10;t++)this.items1[t]={id:this.innerItems[t]["id"]+""};for(let t=10;t<20;t++)this.items2[t-10]={id:this.innerItems[t]["id"]+""};for(let t=20;t<30;t++)this.items3[t-20]={id:this.innerItems[t]["id"]+""};for(let t=30;t<40;t++)this.items4[t-30]={id:this.innerItems[t]["id"]+""}},win(){let t=0;for(let i=0;i<this.innerItems.length;i++)this.winItems[i]["id"]==this.innerItems[i]["id"]&&t++;t!=this.innerItems.length?this.winner=!1:this.winner=!0}},beforeMount(){}},P=n(89);const j=(0,P.Z)(D,[["render",v]]);var I=j;(0,e.ri)(I).mount("#app")}},i={};function n(e){var o=i[e];if(void 0!==o)return o.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(i,e,o,r){if(!e){var l=1/0;for(u=0;u<t.length;u++){e=t[u][0],o=t[u][1],r=t[u][2];for(var s=!0,a=0;a<e.length;a++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](e[a])}))?e.splice(a--,1):(s=!1,r<l&&(l=r));if(s){t.splice(u--,1);var d=o();void 0!==d&&(i=d)}}return i}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,o,r]}}(),function(){n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,{a:i}),i}}(),function(){n.d=function(t,i){for(var e in i)n.o(i,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};n.O.j=function(i){return 0===t[i]};var i=function(i,e){var o,r,l=e[0],s=e[1],a=e[2],d=0;if(l.some((function(i){return 0!==t[i]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(a)var u=a(n)}for(i&&i(e);d<l.length;d++)r=l[d],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},e=self["webpackChunkvuepuzzle"]=self["webpackChunkvuepuzzle"]||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(2354)}));e=n.O(e)})();
//# sourceMappingURL=app.89d1498e.js.map
