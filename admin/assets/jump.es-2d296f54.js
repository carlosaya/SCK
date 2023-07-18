import{C as u}from"./codemirror.es-52e8b92d.js";import{X as g,W as M,Z as k,K as v,e as y,n as D}from"./SchemaReference.es-dd99169e.js";import"./codemirror.es2-5884f31a.js";import"./forEachState.es-b2033c2b.js";import"./index-2ca732f8.js";var O=Object.defineProperty,s=(t,n)=>O(t,"name",{value:n,configurable:!0});u.defineOption("jump",!1,(t,n,i)=>{if(i&&i!==u.Init){const e=t.state.jump.onMouseOver;u.off(t.getWrapperElement(),"mouseover",e);const r=t.state.jump.onMouseOut;u.off(t.getWrapperElement(),"mouseout",r),u.off(document,"keydown",t.state.jump.onKeyDown),delete t.state.jump}if(n){const e=t.state.jump={options:n,onMouseOver:c.bind(null,t),onMouseOut:d.bind(null,t),onKeyDown:f.bind(null,t)};u.on(t.getWrapperElement(),"mouseover",e.onMouseOver),u.on(t.getWrapperElement(),"mouseout",e.onMouseOut),u.on(document,"keydown",e.onKeyDown)}});function c(t,n){const i=n.target||n.srcElement;if(!(i instanceof HTMLElement)||(i==null?void 0:i.nodeName)!=="SPAN")return;const e=i.getBoundingClientRect(),r={left:(e.left+e.right)/2,top:(e.top+e.bottom)/2};t.state.jump.cursor=r,t.state.jump.isHoldingModifier&&p(t)}s(c,"onMouseOver");function d(t){if(!t.state.jump.isHoldingModifier&&t.state.jump.cursor){t.state.jump.cursor=null;return}t.state.jump.isHoldingModifier&&t.state.jump.marker&&l(t)}s(d,"onMouseOut");function f(t,n){if(t.state.jump.isHoldingModifier||!j(n.key))return;t.state.jump.isHoldingModifier=!0,t.state.jump.cursor&&p(t);const i=s(o=>{o.code===n.code&&(t.state.jump.isHoldingModifier=!1,t.state.jump.marker&&l(t),u.off(document,"keyup",i),u.off(document,"click",e),t.off("mousedown",r))},"onKeyUp"),e=s(o=>{const{destination:a,options:m}=t.state.jump;a&&m.onClick(a,o)},"onClick"),r=s((o,a)=>{t.state.jump.destination&&(a.codemirrorIgnore=!0)},"onMouseDown");u.on(document,"keyup",i),u.on(document,"click",e),t.on("mousedown",r)}s(f,"onKeyDown");const w=typeof navigator<"u"&&navigator&&navigator.appVersion.includes("Mac");function j(t){return t===(w?"Meta":"Control")}s(j,"isJumpModifier");function p(t){if(t.state.jump.marker)return;const{cursor:n,options:i}=t.state.jump,e=t.coordsChar(n),r=t.getTokenAt(e,!0),o=i.getDestination||t.getHelper(e,"jump");if(o){const a=o(r,i,t);if(a){const m=t.markText({line:e.line,ch:r.start},{line:e.line,ch:r.end},{className:"CodeMirror-jump-token"});t.state.jump.marker=m,t.state.jump.destination=a}}}s(p,"enableJumpMode");function l(t){const{marker:n}=t.state.jump;t.state.jump.marker=null,t.state.jump.destination=null,n.clear()}s(l,"disableJumpMode");u.registerHelper("jump","graphql",(t,n)=>{if(!n.schema||!n.onClick||!t.state)return;const{state:i}=t,{kind:e,step:r}=i,o=g(n.schema,i);if(e==="Field"&&r===0&&o.fieldDef||e==="AliasedField"&&r===2&&o.fieldDef)return M(o);if(e==="Directive"&&r===1&&o.directiveDef)return k(o);if(e==="Argument"&&r===0&&o.argDef)return v(o);if(e==="EnumValue"&&o.enumValue)return y(o);if(e==="NamedType"&&o.type)return D(o)});
