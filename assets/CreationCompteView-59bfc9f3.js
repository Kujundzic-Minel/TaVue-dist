import{_ as k,b as n,d as C,c as a,a as e,t as w,w as b,v as f,o as r,p as S,e as E}from"./index-4cfbc1b9.js";import{C as N}from"./pocketbase.es-2eb1282e.js";const v=u=>(S("data-v-b3f0b63a"),u=u(),E(),u),V={class:"flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] animate-gradient"},U={class:"flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl"},A={class:"w-full max-w-md space-y-8"},I={key:0},L={key:1},D={class:"text-white font-bold"},M={class:"sm:col-span-2 sm:col-start-1 mt-4"},j=v(()=>e("label",{for:"username",class:"block text-sm font-medium leading-6 text-white"},"Email Address",-1)),B={class:"mt-2"},T={class:"sm:col-span-2 sm:col-start-1 mt-2"},$=v(()=>e("label",{for:"password",class:"block text-sm font-medium leading-6 text-white"},"Mot de passe",-1)),O={class:"mt-2"},P={key:0},W={class:"sm:col-span-2 sm:col-start-1 mt-2"},z={key:1},F={class:"sm:col-span-2 sm:col-start-1 mt-2"},G=v(()=>e("label",{for:"fullName",class:"block text-sm font-medium leading-6 text-white"},"Nom",-1)),R={class:"mt-2"},q={class:"sm:col-span-2 sm:col-start-1 mt-2"},H={__name:"CreationCompteView",setup(u){const d=n(),c=n(""),l=n(""),p=n(""),m=n(!0);var g="";g="https://tavue.kujundzic.fr/";const s=new N(g);C(async()=>{s.authStore.onChange(()=>{d.value=s.authStore.model},!0)});const x=()=>{s.authStore.clear(),d.value=null},h=async()=>{try{const o=await s.collection("users").authWithPassword(c.value,l.value);console.log(s.authStore.isValid),console.log(s.authStore.token),console.log(s.authStore.model)}catch(o){alert(o.message)}},y=async()=>{try{const o={username:`user_${self.crypto.randomUUID().split("-")[0]}`,email:c.value,emailVisibility:!0,password:l.value,passwordConfirm:l.value,name:p.value},t=await s.collection("users").create(o);await h()}catch(o){alert(o.message)}};return(o,t)=>{var _;return r(),a("div",V,[e("div",U,[e("div",A,[d.value?(r(),a("div",I,[e("h1",null,"Welcome "+w((_=d.value)==null?void 0:_.name),1),e("div",null,[e("button",{type:"button",onClick:x,class:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Logout")])])):(r(),a("div",L,[e("h1",D,w(m.value?"LOGIN":"CREATE ACCOUNT"),1),e("div",M,[j,e("div",B,[b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>c.value=i),type:"text",name:"username",id:"username",autocomplete:"none",placeholder:"Enter Email Address ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,c.value]])])]),e("div",T,[$,e("div",O,[b(e("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),type:"password",name:"password",id:"password",autocomplete:"none",placeholder:"Enter Password ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,l.value]])])]),m.value?(r(),a("div",P,[e("div",W,[e("button",{type:"button",onClick:h,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Login"),e("button",{type:"button",onClick:t[2]||(t[2]=i=>m.value=!1),class:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Créer Compte")])])):(r(),a("div",z,[e("div",F,[G,e("div",R,[b(e("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>p.value=i),type:"text",name:"fullName",id:"fullName",autocomplete:"none",placeholder:"Enter Full Name ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,p.value]])])]),e("div",q,[e("button",{type:"button",onClick:y,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Enregistrer nouvel utilisateur"),e("button",{type:"button",onClick:t[4]||(t[4]=i=>m.value=!0),class:"rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"},"Annuler ")])]))]))])])])}}},Q=k(H,[["__scopeId","data-v-b3f0b63a"]]);export{Q as default};
