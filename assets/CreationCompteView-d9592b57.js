import{_ as y,b as n,d as k,c as a,a as e,t as _,w as b,v as f,o as u,p as C,e as S}from"./index-6ad8022a.js";import{C as E}from"./pocketbase.es-2eb1282e.js";const v=c=>(C("data-v-6cc67a9f"),c=c(),S(),c),N={class:"flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] animate-gradient"},V={class:"flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl"},A={class:"w-full max-w-md space-y-8"},I={key:0},L={key:1},U={class:"text-white font-bold"},M={class:"sm:col-span-2 sm:col-start-1 mt-4"},j=v(()=>e("label",{for:"username",class:"block text-sm font-medium leading-6 text-white"},"Email Address",-1)),B={class:"mt-2"},D={class:"sm:col-span-2 sm:col-start-1 mt-2"},T=v(()=>e("label",{for:"password",class:"block text-sm font-medium leading-6 text-white"},"Mot de passe",-1)),O={class:"mt-2"},P={key:0},W={class:"sm:col-span-2 sm:col-start-1 mt-2"},$={key:1},z={class:"sm:col-span-2 sm:col-start-1 mt-2"},F=v(()=>e("label",{for:"fullName",class:"block text-sm font-medium leading-6 text-white"},"Nom",-1)),G={class:"mt-2"},R={class:"sm:col-span-2 sm:col-start-1 mt-2"},q={__name:"CreationCompteView",setup(c){let s=null;const r=n(),d=n(""),l=n(""),p=n(""),m=n(!0);k(async()=>{s=new E("http://tavue.kujundzic.fr"),s.authStore.onChange(()=>{r.value=s.authStore.model},!0)});const w=()=>{s.authStore.clear(),r.value=null},g=async()=>{try{const o=await s.collection("users").authWithPassword(d.value,l.value);console.log(s.authStore.isValid),console.log(s.authStore.token),console.log(s.authStore.model)}catch(o){alert(o.message)}},x=async()=>{try{const o={email:d.value,emailVisibility:!0,password:l.value,passwordConfirm:l.value,name:p.value},t=await s.collection("users").create(o);await g()}catch(o){alert(o.message)}};return(o,t)=>{var h;return u(),a("div",N,[e("div",V,[e("div",A,[r.value?(u(),a("div",I,[e("h1",null,"Welcome "+_((h=r.value)==null?void 0:h.name),1),e("div",null,[e("button",{type:"button",onClick:w,class:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Logout")])])):(u(),a("div",L,[e("h1",U,_(m.value?"LOGIN":"CREATE ACCOUNT"),1),e("div",M,[j,e("div",B,[b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>d.value=i),type:"text",name:"username",id:"username",autocomplete:"none",placeholder:"Enter Email Address ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,d.value]])])]),e("div",D,[T,e("div",O,[b(e("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),type:"password",name:"password",id:"password",autocomplete:"none",placeholder:"Enter Password ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,l.value]])])]),m.value?(u(),a("div",P,[e("div",W,[e("button",{type:"button",onClick:g,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Login"),e("button",{type:"button",onClick:t[2]||(t[2]=i=>m.value=!1),class:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Créer Compte")])])):(u(),a("div",$,[e("div",z,[F,e("div",G,[b(e("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>p.value=i),type:"text",name:"fullName",id:"fullName",autocomplete:"none",placeholder:"Enter Full Name ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,p.value]])])]),e("div",R,[e("button",{type:"button",onClick:x,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Enregistrer nouvel utilisateur"),e("button",{type:"button",onClick:t[4]||(t[4]=i=>m.value=!0),class:"rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"},"Annuler ")])]))]))])])])}}},K=y(q,[["__scopeId","data-v-6cc67a9f"]]);export{K as default};
