import{s as b}from"./index-BXI9leTL.js";import{s as w}from"./index-CsLgYdZ_.js";import{s as V}from"./index-BbECyufl.js";import{aH as _,r as d,o as u,c as p,a,b as s,w as o,aL as k,f as r,H as I,I as C,h as D,t as E}from"./index-BQbI8S_V.js";import"./index-CYUocwmZ.js";const S={class:"flex flex-col md:flex-row gap-8"},$={class:"md:w-1/2"},B={class:"card"},T={class:"flex flex-wrap gap-2"},U={class:"flex flex-wrap mb-4 gap-2"},W={class:"flex flex-wrap gap-2"},N={class:"md:w-1/2"},H={class:"card"},L={class:"flex flex-col gap-4 mb-4"},K={__name:"MessagesDoc",setup(q){const i=_(),y=d([]),m=d(null),f=d(null);function g(){i.add({severity:"success",summary:"Success Message",detail:"Message Detail",life:3e3})}function x(){i.add({severity:"info",summary:"Info Message",detail:"Message Detail",life:3e3})}function c(){i.add({severity:"warn",summary:"Warn Message",detail:"Message Detail",life:3e3})}function M(){i.add({severity:"error",summary:"Error Message",detail:"Message Detail",life:3e3})}return(F,e)=>{const n=V,v=w,l=b;return u(),p("div",S,[a("div",$,[a("div",B,[e[7]||(e[7]=a("div",{class:"font-semibold text-xl mb-4"},"Toast",-1)),a("div",T,[s(n,{onClick:e[0]||(e[0]=t=>g()),label:"Success",severity:"success"}),s(n,{onClick:e[1]||(e[1]=t=>x()),label:"Info",severity:"info"}),s(n,{onClick:e[2]||(e[2]=t=>c()),label:"Warn",severity:"warn"}),s(n,{onClick:e[3]||(e[3]=t=>M()),label:"Error",severity:"danger"})]),e[8]||(e[8]=a("div",{class:"font-semibold text-xl mt-4 mb-4"},"Inline",-1)),a("div",U,[s(v,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=t=>m.value=t),placeholder:"Username","aria-label":"username",invalid:""},null,8,["modelValue"]),s(l,{severity:"error"},{default:o(()=>e[6]||(e[6]=[r("Username is required")])),_:1})]),a("div",W,[s(v,{modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=t=>f.value=t),placeholder:"Email","aria-label":"email",invalid:""},null,8,["modelValue"]),s(l,{severity:"error",icon:"pi pi-times-circle"})])])]),a("div",N,[a("div",H,[e[15]||(e[15]=a("div",{class:"font-semibold text-xl mb-4"},"Message",-1)),a("div",L,[s(l,{severity:"success"},{default:o(()=>e[9]||(e[9]=[r("Success Message")])),_:1}),s(l,{severity:"info"},{default:o(()=>e[10]||(e[10]=[r("Info Message")])),_:1}),s(l,{severity:"warn"},{default:o(()=>e[11]||(e[11]=[r("Warn Message")])),_:1}),s(l,{severity:"error"},{default:o(()=>e[12]||(e[12]=[r("Error Message")])),_:1}),s(l,{severity:"secondary"},{default:o(()=>e[13]||(e[13]=[r("Secondary Message")])),_:1}),s(l,{severity:"contrast"},{default:o(()=>e[14]||(e[14]=[r("Contrast Message")])),_:1})]),s(k,{name:"p-message",tag:"div"},{default:o(()=>[(u(!0),p(I,null,C(y.value,t=>(u(),D(l,{severity:t.severity,key:t.content},{default:o(()=>[r(E(t.content),1)]),_:2},1032,["severity"]))),128))]),_:1})])])])}}};export{K as default};
