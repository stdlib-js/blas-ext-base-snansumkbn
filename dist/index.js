"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=q(function(F,p){
var a=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist'),b=require('@stdlib/math-base-special-absf/dist');function _(e,r,i,R){var n,t,s,v,u,f;if(e<=0)return 0;if(t=R,i===0)return c(r[t])?0:a(e*r[t]);for(n=0,u=0,f=0;f<e;f++)s=r[t],c(s)===!1&&(v=n+s,b(n)>=b(s)?u=a(u+a(a(n-v)+s)):u=a(u+a(a(s-v)+n)),n=v),t+=i;return a(n+u)}p.exports=_
});var d=q(function(G,y){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=o();function g(e,r,i){return O(e,r,i,E(e,i))}y.exports=g
});var j=q(function(H,l){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),w=o();h(k,"ndarray",w);l.exports=k
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=j(),m,x=A(z(__dirname,"./native.js"));B(x)?m=C:m=x;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
