import{_ as C,r as a,o as S,c as u,a as e,t as _,w as v,v as f,b as r,p as V,d as E}from"./index-3320deeb.js";import{C as N}from"./pocketbase.es-2eb1282e.js";const p=c=>(V("data-v-1e478b52"),c=c(),E(),c),A={class:"flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] animate-gradient"},I={class:"flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl"},L={key:0},M={key:1},U={class:"text-white font-bold"},j={class:"sm:col-span-2 sm:col-start-1 mt-4"},B=p(()=>e("label",{for:"username",class:"block text-sm font-medium leading-6 text-white"},"Email Address",-1)),T={class:"mt-2"},D={class:"sm:col-span-2 sm:col-start-1 mt-2"},G=p(()=>e("label",{for:"password",class:"block text-sm font-medium leading-6 text-white"},"Password",-1)),O=p(()=>e("p",{class:"text-red-600 text-xs"},"Minimum 10 charactères",-1)),P={class:"mt-2"},W={key:0},$={class:"sm:col-span-2 sm:col-start-1 mt-2"},z={key:1},F={class:"sm:col-span-2 sm:col-start-1 mt-2"},H=p(()=>e("label",{for:"fullName",class:"block text-sm font-medium leading-6 text-white"},"Nom",-1)),R={class:"mt-2"},Y={class:"sm:col-span-2 sm:col-start-1 mt-2"},q={__name:"CreationCompteView",setup(c){var g="";g="http://tavue.kujundzic.fr/";const o=new N(g),n=a(),d=a(""),l=a(""),b=a(""),m=a(!0);S(async()=>{o.authStore.onChange(()=>{n.value=o.authStore.model},!0)});const w=()=>{o.authStore.clear(),n.value=null},h=async()=>{try{const i=await o.collection("users").authWithPassword(d.value,l.value);console.log(o.authStore.isValid),console.log(o.authStore.token),console.log(o.authStore.model)}catch(i){alert(i.message)}},y=async()=>{try{const i={email:d.value,emailVisibility:!0,password:l.value,passwordConfirm:l.value,name:b.value},t=await o.collection("users").create(i);await h()}catch(i){alert(i.message)}},k=async()=>{await o.collection("users").authWithOAuth2({provider:"github"}),o.authStore.isValid&&(document.getElementById("status").innerHTML="YVous etes maintenant connecté avec Github",connected=!0,n=o.authStore.model)};return(i,t)=>{var x;return r(),u("div",A,[e("div",I,[n.value?(r(),u("div",L,[e("h1",null,"Welcome "+_((x=n.value)==null?void 0:x.name),1),e("div",null,[e("button",{type:"button",onClick:w,class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Logout")])])):(r(),u("div",M,[e("h1",U,_(m.value?"LOGIN":"CREATE ACCOUNT"),1),e("div",j,[B,e("div",T,[v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),type:"text",name:"username",id:"username",autocomplete:"none",placeholder:"Enter Email Address ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,d.value]])])]),e("div",D,[G,O,e("div",P,[v(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>l.value=s),type:"password",name:"password",id:"password",autocomplete:"none",placeholder:"Enter Password ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,l.value]])])]),m.value?(r(),u("div",W,[e("div",$,[e("button",{type:"button",onClick:h,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Login"),e("button",{type:"button",onClick:t[2]||(t[2]=s=>m.value=!1),class:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Créer Compte")]),e("div",null,[e("button",{onClick:t[3]||(t[3]=s=>k()),class:"flex items-center justify-center space-x-2 ml-[282.5px] mt-8"}," Se connecter avec Github ")])])):(r(),u("div",z,[e("div",F,[H,e("div",R,[v(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>b.value=s),type:"text",name:"fullName",id:"fullName",autocomplete:"none",placeholder:"Enter Full Name ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[f,b.value]])])]),e("div",Y,[e("button",{type:"button",onClick:y,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Enregistrer nouvel utilisateur"),e("button",{type:"button",onClick:t[5]||(t[5]=s=>m.value=!0),class:"rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"},"Annuler ")])]))]))])])}}},Q=C(q,[["__scopeId","data-v-1e478b52"]]);export{Q as default};
