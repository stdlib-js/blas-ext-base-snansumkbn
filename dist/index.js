"use strict";var l=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var k=l(function(D,p){
var f=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist'),b=require('@stdlib/math-base-special-abs/dist');function O(u,r,t){var a,e,v,i,n,s;if(u<=0)return 0;if(u===1||t===0)return c(r[0])?0:r[0];for(t<0?e=(1-u)*t:e=0,a=0,n=0,s=0;s<u;s++)v=r[e],c(v)===!1&&(i=a+v,b(a)>=b(v)?n=f(n+f(f(a-i)+v)):n=f(n+f(f(v-i)+a)),a=i),e+=t;return f(a+n)}p.exports=O
});var F=l(function(G,x){
var o=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/math-base-assert-is-nanf/dist'),j=require('@stdlib/math-base-special-abs/dist');function d(u,r,t,a){var e,v,i,n,s,q;if(u<=0)return 0;if(u===1||t===0)return y(r[a])?0:r[a];for(v=a,e=0,s=0,q=0;q<u;q++)i=r[v],y(i)===!1&&(n=e+i,j(e)>=j(i)?s=o(s+o(o(e-n)+i)):s=o(s+o(o(i-n)+e)),e=n),v+=t;return o(e+s)}x.exports=d
});var _=l(function(H,T){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=k(),h=F();g(R,"ndarray",h);T.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=_(),m,E=z(w(__dirname,"./native.js"));A(E)?m=B:m=E;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
