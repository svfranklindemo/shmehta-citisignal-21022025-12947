import*as t from"@dropins/tools/preact-compat.js";import{useState as m,useEffect as f}from"@dropins/tools/preact-compat.js";import{events as u}from"@dropins/tools/event-bus.js";import{AlertBanner as a,Icon as g}from"@dropins/tools/components.js";import{jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import{useText as p}from"@dropins/tools/i18n.js";const h=r=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),x=r=>{const[c,s]=m(!1);f(()=>{const n=u.on("error",e=>{(e==null?void 0:e.source)==="checkout"&&(e==null?void 0:e.type)==="network"&&s(!0)});return()=>{n==null||n.off()}},[]);const i=()=>{s(!1)},l=p({message:"Checkout.ErrorBanner.genericMessage"});return c?o(a,{...r,className:"checkout__banner","data-testid":"error-banner",icon:o(g,{source:h}),message:o("span",{children:l.message}),onDismiss:i,variant:"warning"}):null};export{x as E};
//# sourceMappingURL=ErrorBanner.js.map
