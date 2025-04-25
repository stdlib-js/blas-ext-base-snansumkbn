"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(C,b){
var a=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-special-absf/dist');function _(e,r,u,R){var i,t,n,v,s,f;if(e<=0)return 0;if(t=R,u===0)return c(r[t])?0:a(e*r[t]);for(i=0,s=0,f=0;f<e;f++)n=r[t],c(n)===!1&&(v=i+n,l(i)>=l(n)?s=a(s+a(a(i-v)+n)):s=a(s+a(a(n-v)+i)),i=v),t+=u;return a(i+s)}b.exports=_
});var y=o(function(D,p){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=q();function O(e,r,u){return F(e,r,u,E(e,u))}p.exports=O
});var j=o(function(G,k){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),g=q();T(d,"ndarray",g);k.exports=d
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),m,x=w(h(__dirname,"./native.js"));z(x)?m=A:m=x;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
