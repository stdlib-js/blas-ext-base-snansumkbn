// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";function n(r,n,i){var a,d,m,o,f,l;if(r<=0)return 0;if(1===r||0===i)return e(n[0])?0:n[0];for(d=i<0?(1-r)*i:0,a=0,f=0,l=0;l<r;l++)m=n[d],!1===e(m)&&(o=a+m,f=s(a)>=s(m)?t(f+t(t(a-o)+m)):t(f+t(t(m-o)+a)),a=o),d+=i;return t(a+f)}function i(r,n,i,a){var d,m,o,f,l,j;if(r<=0)return 0;if(1===r||0===i)return e(n[a])?0:n[a];for(m=a,d=0,l=0,j=0;j<r;j++)o=n[m],!1===e(o)&&(f=d+o,l=s(d)>=s(o)?t(l+t(t(d-f)+o)):t(l+t(t(o-f)+d)),d=f),m+=i;return t(d+l)}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
