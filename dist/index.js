"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=q(function(F,p){
var a=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist'),b=require('@stdlib/math-base-special-absf/dist');function _(e,r,u,R){var i,t,n,v,s,f;if(e<=0)return 0;if(t=R,u===0)return c(r[t])?0:a(e*r[t]);for(i=0,s=0,f=0;f<e;f++)n=r[t],c(n)===!1&&(v=i+n,b(i)>=b(n)?s=a(s+a(a(i-v)+n)):s=a(s+a(a(n-v)+i)),i=v),t+=u;return a(i+s)}p.exports=_
});var d=q(function(G,y){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=o();function g(e,r,u){return O(e,r,u,E(e,u))}y.exports=g
});var j=q(function(H,l){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),w=o();h(k,"ndarray",w);l.exports=k
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=j(),m,x=A(z(__dirname,"./native.js"));B(x)?m=C:m=x;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
