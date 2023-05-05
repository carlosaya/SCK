import{C as h}from"./codemirror.es-a2e234e9.js";import{p as C,b as S,G as T,v as E,C as I,s as Q,N as U,E as q,K as G,c as V,d as k,o as A,L as W,U as _,e as x,f as K,h as H,k as O,m as Y,n as $,q as M,P as F,t as j,w as z}from"./index-7c9f4f83.js";import{R as w,P as f}from"./Range.es-3e45690c.js";var B=Object.defineProperty,d=(t,a)=>B(t,"name",{value:a,configurable:!0});const J=[W,_,x,K,H,O,Y,$,M,F,j,z];function N(t,a,i,r,s){const n=Q.filter(e=>!(e===U||e===q||r&&e===G));return i&&Array.prototype.push.apply(n,i),s&&Array.prototype.push.apply(n,J),E(t,a,n).filter(e=>{if(e.message.includes("Unknown directive")&&e.nodes){const l=e.nodes[0];if(l&&l.kind===V.DIRECTIVE){const u=l.name.value;if(u==="arguments"||u==="argumentDefinitions")return!1}}return!0})}d(N,"validateWithCustomRules");const p={Error:"Error",Warning:"Warning",Information:"Information",Hint:"Hint"},v={[p.Error]:1,[p.Warning]:2,[p.Information]:3,[p.Hint]:4},m=d((t,a)=>{if(!t)throw new Error(a)},"invariant");function D(t,a=null,i,r,s){var n,o;let e=null,l="";s&&(l=typeof s=="string"?s:s.reduce((c,g)=>c+C(g)+`

`,""));const u=l?`${t}

${l}`:t;try{e=S(u)}catch(c){if(c instanceof T){const g=b((o=(n=c.locations)===null||n===void 0?void 0:n[0])!==null&&o!==void 0?o:{line:0,column:0},u);return[{severity:v.Error,message:c.message,source:"GraphQL: Syntax",range:g}]}throw c}return L(e,a,i,r)}d(D,"getDiagnostics");function L(t,a=null,i,r){if(!a)return[];const s=N(a,t,i,r).flatMap(o=>R(o,v.Error,"Validation")),n=E(a,t,[k]).flatMap(o=>R(o,v.Warning,"Deprecation"));return s.concat(n)}d(L,"validateQuery");function R(t,a,i){if(!t.nodes)return[];const r=[];for(const[s,n]of t.nodes.entries()){const o=n.kind!=="Variable"&&"name"in n&&n.name!==void 0?n.name:"variable"in n&&n.variable!==void 0?n.variable:n;if(o){m(t.locations,"GraphQL validation error requires locations.");const e=t.locations[s],l=P(o),u=e.column+(l.end-l.start);r.push({source:`GraphQL: ${i}`,message:t.message,severity:a,range:new w(new f(e.line-1,e.column-1),new f(e.line-1,u))})}}return r}d(R,"annotations");function b(t,a){const i=A(),r=i.startState(),s=a.split(`
`);m(s.length>=t.line,"Query text must have more lines than where the error happened");let n=null;for(let u=0;u<t.line;u++)for(n=new I(s[u]);!n.eol()&&i.token(n,r)!=="invalidchar";);m(n,"Expected Parser stream to be available.");const o=t.line-1,e=n.getStartOfToken(),l=n.getCurrentPosition();return new w(new f(o,e),new f(o,l))}d(b,"getRange");function P(t){const i=t.loc;return m(i,"Expected ASTNode to have a location."),i}d(P,"getLocation");const y=["error","warning","information","hint"],X={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};h.registerHelper("lint","graphql",(t,a)=>{const{schema:i,validationRules:r,externalFragments:s}=a;return D(t,i,r,void 0,s).map(e=>({message:e.message,severity:e.severity?y[e.severity-1]:y[0],type:e.source?X[e.source]:void 0,from:h.Pos(e.range.start.line,e.range.start.character),to:h.Pos(e.range.end.line,e.range.end.character)}))});
