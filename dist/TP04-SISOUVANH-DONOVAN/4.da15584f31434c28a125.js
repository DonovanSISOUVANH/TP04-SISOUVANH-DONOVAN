(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ss3y:function(t,e,n){"use strict";n.r(e),n.d(e,"ProduitsModule",function(){return u});var c=n("ofXK"),r=n("fXoL"),s=n("tyNb");let o=(()=>{class t{constructor(t){this.route=t,this.ref=""}ngOnInit(){this.ref=this.route.snapshot.paramMap.get("id")}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(s.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-detail"]],decls:3,vars:1,template:function(t,e){1&t&&(r.Ob(0,"p"),r.hc(1,"detail works!"),r.Nb(),r.hc(2)),2&t&&(r.Bb(2),r.ic("\nVous avez s\xe9lectionn\xe9 la ref\xe9rence : ",e.ref,""))},styles:[""]}),t})();var i=n("bthG"),a=n("AcyG");function l(t,e){if(1&t){const t=r.Pb();r.Ob(0,"div"),r.hc(1),r.Ob(2,"button",1),r.Vb("click",function(){r.dc(t);const n=e.$implicit;return r.Xb().addPanier(n.ref)}),r.hc(3,"Ajout Panier"),r.Nb(),r.Nb()}if(2&t){const t=e.$implicit;r.Bb(1),r.jc(" ",t.titre," / ",t.prix," - ")}}const p=[{path:"catalogue",component:(()=>{class t{constructor(t){this.store=t,this.observable5$=null}ngOnInit(){}addPanier(t){console.log(t),this.store.dispatch(new i.a({reference:t}))}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(a.e))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-catalogue"]],decls:2,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"click"]],template:function(t,e){1&t&&(r.gc(0,l,4,2,"div",0),r.Yb(1,"async")),2&t&&r.ac("ngForOf",r.Zb(1,1,e.observable5$))},directives:[c.i],pipes:[c.b],styles:[""]}),t})()},{path:"detail/:id",component:o}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({imports:[[c.c,s.c.forChild(p)]]}),t})()}}]);