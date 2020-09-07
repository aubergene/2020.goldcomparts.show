import{S as s,i as t,s as a,e,a as r,t as c,c as o,d as l,b as i,f as n,g as h,h as m,j as f,k as v,l as d,q as u,n as p,z as g}from"./client.93d454b6.js";import{t as E}from"./tsv.6a7ced64.js";import{s as b}from"./helpers.ce81ccb7.js";function j(s,t,a){const e=s.slice();return e[2]=t[a],e}function k(s){let t,a,u,p,g,E,j,k,A,I,w,x=s[2].name+"",$=s[2].otherName?`  (${s[2].otherName})`:"";return{c(){t=e("div"),a=e("a"),u=e("img"),E=r(),j=c(x),k=r(),A=c($),w=r(),this.h()},l(s){t=o(s,"DIV",{class:!0});var e=l(t);a=o(e,"A",{href:!0,class:!0});var r=l(a);u=o(r,"IMG",{class:!0,src:!0,alt:!0}),E=i(r),j=n(r,x),k=i(r),A=n(r,$),r.forEach(h),w=i(e),e.forEach(h),this.h()},h(){m(u,"class","bio-photo svelte-1eqkjkz"),u.src!==(p="img/bios/"+s[2].username+".jpeg")&&m(u,"src",p),m(u,"alt",g=s[2].name),m(a,"href",I="artists/"+b(s[2].name)),m(a,"class","svelte-1eqkjkz"),m(t,"class","bio-box svelte-1eqkjkz")},m(s,e){f(s,t,e),v(t,a),v(a,u),v(a,E),v(a,j),v(a,k),v(a,A),v(t,w)},p(s,t){1&t&&u.src!==(p="img/bios/"+s[2].username+".jpeg")&&m(u,"src",p),1&t&&g!==(g=s[2].name)&&m(u,"alt",g),1&t&&x!==(x=s[2].name+"")&&d(j,x),1&t&&$!==($=s[2].otherName?`  (${s[2].otherName})`:"")&&d(A,$),1&t&&I!==(I="artists/"+b(s[2].name))&&m(a,"href",I)},d(s){s&&h(t)}}}function A(s){let t,a,d,E,b,A,I,w,x,$,z,D,N,V,q=s[0],M=[];for(let t=0;t<q.length;t+=1)M[t]=k(j(s,q,t));return{c(){t=r(),a=e("section"),d=e("div"),E=e("div"),b=e("h1"),A=c("Artists"),I=r(),w=e("h2"),x=c("MA/MFA Computational Arts 2020 - Goldsmiths"),$=r(),z=e("section"),D=e("div"),N=e("div"),V=e("div");for(let s=0;s<M.length;s+=1)M[s].c();this.h()},l(s){u('[data-svelte="svelte-1xemdmz"]',document.head).forEach(h),t=i(s),a=o(s,"SECTION",{class:!0});var e=l(a);d=o(e,"DIV",{class:!0});var r=l(d);E=o(r,"DIV",{class:!0});var c=l(E);b=o(c,"H1",{class:!0});var m=l(b);A=n(m,"Artists"),m.forEach(h),I=i(c),w=o(c,"H2",{class:!0});var f=l(w);x=n(f,"MA/MFA Computational Arts 2020 - Goldsmiths"),f.forEach(h),c.forEach(h),r.forEach(h),e.forEach(h),$=i(s),z=o(s,"SECTION",{class:!0});var v=l(z);D=o(v,"DIV",{class:!0});var p=l(D);N=o(p,"DIV",{class:!0});var g=l(N);V=o(g,"DIV",{class:!0});var j=l(V);for(let s=0;s<M.length;s+=1)M[s].l(j);j.forEach(h),g.forEach(h),p.forEach(h),v.forEach(h),this.h()},h(){document.title="Final Show - 2020",m(b,"class","title"),m(w,"class","subtitle"),m(E,"class","container"),m(d,"class","hero-body"),m(a,"class","hero is-primary"),m(V,"class","bio-boxes svelte-1eqkjkz"),m(N,"class","content"),m(D,"class","container"),m(z,"class","section")},m(s,e){f(s,t,e),f(s,a,e),v(a,d),v(d,E),v(E,b),v(b,A),v(E,I),v(E,w),v(w,x),f(s,$,e),f(s,z,e),v(z,D),v(D,N),v(N,V);for(let s=0;s<M.length;s+=1)M[s].m(V,null)},p(s,[t]){if(1&t){let a;for(q=s[0],a=0;a<q.length;a+=1){const e=j(s,q,a);M[a]?M[a].p(e,t):(M[a]=k(e),M[a].c(),M[a].m(V,null))}for(;a<M.length;a+=1)M[a].d(1);M.length=q.length}},i:p,o:p,d(s){s&&h(t),s&&h(a),s&&h($),s&&h(z),g(M,s)}}}async function I({params:s}){return{artistsRows:await this.fetch("artists.tsv").then(s=>s.text())}}function w(s,t,a){let e,{artistsRows:r}=t;return s.$set=s=>{"artistsRows"in s&&a(1,r=s.artistsRows)},s.$$.update=()=>{2&s.$$.dirty&&a(0,e=E(r))},[e,r]}export default class extends s{constructor(s){super(),t(this,s,w,A,a,{artistsRows:1})}}export{I as preload};
