(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-000a2bbb":"7d0c98e0","chunk-205b45f1":"c2ec4006","chunk-3c909a19":"0d826566","chunk-5daa8ebb":"7863ba16"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-000a2bbb":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-000a2bbb":"5eef57ca","chunk-205b45f1":"31d6cfe0","chunk-3c909a19":"31d6cfe0","chunk-5daa8ebb":"31d6cfe0"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],b.parentNode.removeChild(b),n(a)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue2022week6/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2877:function(e,t,n){"use strict";n("ac94")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("bc3a"),o=n.n(c),a=n("130e"),u=n("7bb1"),i=n("3aa8"),l=n("cbdf"),s=n("9457");function d(e,t,n,c,o,a){var u=Object(r["E"])("router-view");return Object(r["w"])(),Object(r["d"])(u)}var b={data:function(){return{url:"https://vue3-course-api.hexschool.io",path:"kevinhesapi"}},mounted:function(){console.log(this.url,this.path)}},f=(n("2877"),n("6b0d")),h=n.n(f);const p=h()(b,[["render",d]]);var v=p,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),g={id:"nav",class:"mb-4 navbar-dark bg-dark"},O={class:"container d-flex justify-content-between py-3"},j=Object(r["g"])("Home"),y={class:"d-flex"},k=Object(r["g"])("Products"),w=Object(r["g"])("購物車"),x=Object(r["g"])(" 管理員登入 "),P=Object(r["f"])("p",{class:"h4 text-center"},"這是第六週作業",-1);function _(e,t,n,c,o,a){var u=Object(r["E"])("router-link"),i=Object(r["E"])("router-view");return Object(r["w"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",g,[Object(r["f"])("div",O,[Object(r["h"])(u,{to:"/",class:"nav-link text-light"},{default:Object(r["P"])((function(){return[j]})),_:1}),Object(r["f"])("div",y,[Object(r["h"])(u,{to:"/products",class:"nav-link text-light"},{default:Object(r["P"])((function(){return[k]})),_:1}),Object(r["h"])(u,{to:"/carts",class:"nav-link text-light"},{default:Object(r["P"])((function(){return[w]})),_:1}),Object(r["h"])(u,{to:"/dashboardlogin",class:"nav-link text-light"},{default:Object(r["P"])((function(){return[x]})),_:1})])])]),P,Object(r["h"])(i)],64)}var E={};const S=h()(E,[["render",_]]);var T=S,C=[{path:"/",name:"Home",component:T,children:[{path:"/products",component:function(){return n.e("chunk-3c909a19").then(n.bind(null,"fd15"))}},{path:"/product/:id",component:function(){return n.e("chunk-205b45f1").then(n.bind(null,"7901"))}},{path:"/carts",component:function(){return n.e("chunk-5daa8ebb").then(n.bind(null,"1961"))}}]},{path:"/dashboardlogin",component:function(){return n.e("chunk-000a2bbb").then(n.bind(null,"050c"))}}],A=Object(m["a"])({history:Object(m["b"])(),routes:C}),M=A;Object(u["e"])("required",i["c"]),Object(u["e"])("email",i["a"]),Object(u["e"])("min",i["b"]),Object(u["d"])({generateMessage:Object(l["a"])({zh_TW:s}),validateOnInput:!0}),Object(l["b"])("zh_TW");var L=Object(r["c"])(v);L.component("Form",u["c"]),L.component("Field",u["b"]),L.component("ErrorMessage",u["a"]),L.use(M),L.use(a["a"],o.a),L.mount("#app")},ac94:function(e,t,n){}});
//# sourceMappingURL=app.a3b5d96e.js.map