import{C as P}from"./codemirror.es-1fcc7409.js";import{x as B,y as H,A as J,D as U,X}from"./index-498e9656.js";var z=Object.defineProperty,t=(e,r)=>z(e,"name",{value:r,configurable:!0});function G(e){d=e,w=e.length,o=c=N=-1,i(),x();const r=F();return p("EOF"),r}t(G,"jsonParse");let d,w,o,c,N,n,l;function F(){const e=o,r=[];if(p("{"),!E("}")){do r.push(Q());while(E(","));p("}")}return{kind:"Object",start:e,end:N,members:r}}t(F,"parseObj");function Q(){const e=o,r=l==="String"?v():null;p("String"),p(":");const a=V();return{kind:"Member",start:e,end:N,key:r,value:a}}t(Q,"parseMember");function _(){const e=o,r=[];if(p("["),!E("]")){do r.push(V());while(E(","));p("]")}return{kind:"Array",start:e,end:N,values:r}}t(_,"parseArr");function V(){switch(l){case"[":return _();case"{":return F();case"String":case"Number":case"Boolean":case"Null":const e=v();return x(),e}p("Value")}t(V,"parseVal");function v(){return{kind:l,start:o,end:c,value:JSON.parse(d.slice(o,c))}}t(v,"curToken");function p(e){if(l===e){x();return}let r;if(l==="EOF")r="[end of file]";else if(c-o>1)r="`"+d.slice(o,c)+"`";else{const a=d.slice(o).match(/^.+?\b/);r="`"+(a?a[0]:d[o])+"`"}throw h(`Expected ${e} but found ${r}.`)}t(p,"expect");class L extends Error{constructor(r,a){super(r),this.position=a}}t(L,"JSONSyntaxError");function h(e){return new L(e,{start:o,end:c})}t(h,"syntaxError");function E(e){if(l===e)return x(),!0}t(E,"skip");function i(){return c<w&&(c++,n=c===w?0:d.charCodeAt(c)),n}t(i,"ch");function x(){for(N=c;n===9||n===10||n===13||n===32;)i();if(n===0){l="EOF";return}switch(o=c,n){case 34:return l="String",C();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l="Number",I();case 102:if(d.slice(o,o+5)!=="false")break;c+=4,i(),l="Boolean";return;case 110:if(d.slice(o,o+4)!=="null")break;c+=3,i(),l="Null";return;case 116:if(d.slice(o,o+4)!=="true")break;c+=3,i(),l="Boolean";return}l=d[o],i()}t(x,"lex");function C(){for(i();n!==34&&n>31;)if(n===92)switch(n=i(),n){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:i();break;case 117:i(),g(),g(),g(),g();break;default:throw h("Bad character escape sequence.")}else{if(c===w)throw h("Unterminated string.");i()}if(n===34){i();return}throw h("Unterminated string.")}t(C,"readString");function g(){if(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102)return i();throw h("Expected hexadecimal digit.")}t(g,"readHex");function I(){n===45&&i(),n===48?i():y(),n===46&&(i(),y()),(n===69||n===101)&&(n=i(),(n===43||n===45)&&i(),y())}t(I,"readNumber");function y(){if(n<48||n>57)throw h("Expected decimal digit.");do i();while(n>=48&&n<=57)}t(y,"readDigits");P.registerHelper("lint","graphql-variables",(e,r,a)=>{if(!e)return[];let f;try{f=G(e)}catch(u){if(u instanceof L)return[O(a,u.position,u.message)];throw u}const{variableToType:s}=r;return s?q(a,s,f):[]});function q(e,r,a){const f=[];return a.members.forEach(s=>{var u;if(s){const b=(u=s.key)===null||u===void 0?void 0:u.value,k=r[b];k?m(k,s.value).forEach(([j,M])=>{f.push(O(e,j,M))}):f.push(O(e,s.key,`Variable "$${b}" does not appear in any GraphQL query.`))}}),f}t(q,"validateVariables");function m(e,r){if(!e||!r)return[];if(e instanceof B)return r.kind==="Null"?[[r,`Type "${e}" is non-nullable and cannot be null.`]]:m(e.ofType,r);if(r.kind==="Null")return[];if(e instanceof H){const a=e.ofType;if(r.kind==="Array"){const f=r.values||[];return $(f,s=>m(a,s))}return m(a,r)}if(e instanceof J){if(r.kind!=="Object")return[[r,`Type "${e}" must be an Object.`]];const a=Object.create(null),f=$(r.members,s=>{var u;const b=(u=s==null?void 0:s.key)===null||u===void 0?void 0:u.value;a[b]=!0;const k=e.getFields()[b];if(!k)return[[s.key,`Type "${e}" does not have a field "${b}".`]];const j=k?k.type:void 0;return m(j,s.value)});return Object.keys(e.getFields()).forEach(s=>{const u=e.getFields()[s];!a[s]&&u.type instanceof B&&!u.defaultValue&&f.push([r,`Object of type "${e}" is missing required field "${s}".`])}),f}return e.name==="Boolean"&&r.kind!=="Boolean"||e.name==="String"&&r.kind!=="String"||e.name==="ID"&&r.kind!=="Number"&&r.kind!=="String"||e.name==="Float"&&r.kind!=="Number"||e.name==="Int"&&(r.kind!=="Number"||(r.value|0)!==r.value)?[[r,`Expected value of type "${e}".`]]:(e instanceof U||e instanceof X)&&(r.kind!=="String"&&r.kind!=="Number"&&r.kind!=="Boolean"&&r.kind!=="Null"||D(e.parseValue(r.value)))?[[r,`Expected value of type "${e}".`]]:[]}t(m,"validateValue");function O(e,r,a){return{message:a,severity:"error",type:"validation",from:e.posFromIndex(r.start),to:e.posFromIndex(r.end)}}t(O,"lintError");function D(e){return e==null||e!==e}t(D,"isNullish");function $(e,r){return Array.prototype.concat.apply([],e.map(r))}t($,"mapCat");