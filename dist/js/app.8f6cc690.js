(function(t){function a(a){for(var r,s,i=a[0],o=a[1],l=a[2],h=0,d=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,i=1;i<e.length;i++){var o=e[i];0!==c[o]&&(r=!1)}r&&(n.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},c={app:0},n=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/rick-and-morty-vue/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2926:function(t,a,e){},"2dc7":function(t,a,e){t.exports=e.p+"img/header.707a82f2.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("router-view"),t._m(0)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"space"}},[e("div",{staticClass:"stars"}),e("div",{staticClass:"stars"}),e("div",{staticClass:"stars"}),e("div",{staticClass:"stars"}),e("div",{staticClass:"stars"})])}],s=(e("5c0b"),e("2877")),i={},o=Object(s["a"])(i,c,n,!1,null,null,null),l=o.exports,u=e("8c4f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t._m(0),e("div",{staticClass:"charactersList"},t._l(t.characters,(function(t){return e("character-block",{key:t.id,attrs:{character:t}})})),1),e("paginate",{attrs:{"page-count":t.pagesCount,"page-range":3,"margin-pages":2,"click-handler":t.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1)},d=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"header"},[r("img",{attrs:{src:e("2dc7")}})])}],p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"characterBlock",on:{click:function(a){return t.detailedInfo()}}},[e("div",{staticClass:"characterBlockImage"},[e("img",{attrs:{src:t.character.image,alt:t.character.name}})]),e("div",{staticClass:"characterBlockInfo"},[e("div",{staticClass:"characterName"},[t._v(" "+t._s(t.character.name)+" ")]),e("div",[e("span",{staticClass:"characterStatus",class:["Alive"===t.character.status?"alive":"dead","unknown"===t.character.status?"unknown":""]},[t._v(t._s(t.character.status))]),e("span",[t._v("- "+t._s(t.character.species))])]),e("div",[e("div",{staticClass:"label"},[t._v("Last known location:")]),e("span",{staticClass:"characterLocation"},[t._v(t._s(t.character.location.name))])])])])},v=[],f={name:"CharacterBlock",props:{character:{type:Object,required:!0}},methods:{detailedInfo:function(){this.$router.push({name:"CharacterDetails",params:{id:this.character.id}})}}},m=f,g=Object(s["a"])(m,p,v,!1,null,"8e7f68b4",null),_=g.exports,C=e("8832"),b=e.n(C),k=e("bc3a"),y=e.n(k),w={name:"RickAndMortyList",components:{CharacterBlock:_,Paginate:b.a},data:function(){return{characters:null,currentPage:1,pagesCount:0}},watch:{currentPage:{handler:function(t){var a=this;y.a.get("https://rickandmortyapi.com/api/character/?page="+t).then((function(t){var e=t.data;a.pagesCount=e.info.pages,a.characters=e.results})).catch((function(t){return console.log(t)}))},immediate:!0}},methods:{clickCallback:function(t){console.log({pageNum:t})}}},O=w,x=Object(s["a"])(O,h,d,!1,null,null,null),j=x.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"characterDetailedInfo"},[t.character?e("character-info-block",{attrs:{character:t.character}}):t._e(),e("button",{staticClass:"goBack",on:{click:function(a){return t.goBack()}}},[t._v("Go back")])],1)])},B=[],$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"characterBlock",on:{click:function(a){return t.detailedInfo()}}},[e("div",{staticClass:"characterBlockImage"},[e("img",{attrs:{src:t.character.image,alt:t.character.name}})]),e("div",{staticClass:"characterBlockInfo"},[e("div",{staticClass:"characterName"},[t._v(" "+t._s(t.character.name)+" ")]),e("div",[e("div",{staticClass:"label"},[t._v("Gender:")]),e("span",{staticClass:"characterLocation"},[t._v(t._s(t.character.gender))])]),e("div",[e("span",{staticClass:"characterStatus",class:["Alive"===t.character.status?"alive":"dead","unknown"===t.character.status?"unknown":""]},[t._v(t._s(t.character.status))]),e("span",[t._v("- "+t._s(t.character.species))])]),e("div",[e("div",{staticClass:"label"},[t._v("Type:")]),e("span",{staticClass:"characterLocation"},[t._v(t._s(t.character.type))])]),e("div",[e("div",{staticClass:"label"},[t._v("Origin:")]),e("span",{staticClass:"characterLocation"},[t._v(t._s(t.character.origin.name))])]),e("div",[e("div",{staticClass:"label"},[t._v("Last known location:")]),e("span",{staticClass:"characterLocation"},[t._v(t._s(t.character.location.name))])])])])},L=[],I={name:"CharacterBlock",props:{character:{type:Object,required:!0}},methods:{detailedInfo:function(){this.$router.push({name:"CharacterDetails",params:{id:this.character.id}})}}},M=I,S=Object(s["a"])(M,$,L,!1,null,"2e85666d",null),E=S.exports,A={name:"RickAndMortyCharacter",components:{CharacterInfoBlock:E},data:function(){return{character:null}},created:function(){var t=this;try{var a=this.$route.params.id;a&&y.a.get("https://rickandmortyapi.com/api/character/"+a).then((function(a){var e=a.data;t.character=e})).catch((function(t){return console.log(t)}))}catch(e){console.log(e)}},methods:{goBack:function(){this.$router.push({name:"RickAndMortyList"})}}},D=A,N=Object(s["a"])(D,P,B,!1,null,"0a526805",null),R=N.exports;r["a"].use(u["a"]);var T=[{path:"/",name:"RickAndMortyList",component:j},{path:"/character/:id",name:"CharacterDetails",component:R}],q=new u["a"]({mode:"history",base:"/rick-and-morty-vue/dist/",routes:T}),G=q,J=e("2f62");r["a"].use(J["a"]);var z=new J["a"].Store({state:{characters:{},pages:0},mutations:{},actions:{},getters:{}});e("2926");r["a"].config.productionTip=!1,new r["a"]({router:G,store:z,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var r=e("9c0c"),c=e.n(r);c.a},"9c0c":function(t,a,e){}});
//# sourceMappingURL=app.8f6cc690.js.map