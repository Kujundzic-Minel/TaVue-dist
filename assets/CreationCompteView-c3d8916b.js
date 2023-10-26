import{_ as x,b as c,d as y,c as n,a as e,t as h,w as p,v as b,o as a,p as k,e as C}from"./index-6df74533.js";import{C as S}from"./pocketbase.es-2eb1282e.js";const f=u=>(k("data-v-d8f553a4"),u=u(),C(),u),E={class:"flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] animate-gradient"},N={class:"flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl"},V={class:"w-full max-w-md space-y-8"},A={key:0},I={key:1},L={class:"text-white font-bold"},U={class:"sm:col-span-2 sm:col-start-1 mt-4"},M=f(()=>e("label",{for:"username",class:"block text-sm font-medium leading-6 text-white"},"Email Address",-1)),j={class:"mt-2"},B={class:"sm:col-span-2 sm:col-start-1 mt-2"},D=f(()=>e("label",{for:"password",class:"block text-sm font-medium leading-6 text-white"},"Mot de passe",-1)),T={class:"mt-2"},O={key:0},P={class:"sm:col-span-2 sm:col-start-1 mt-2"},W={key:1},$={class:"sm:col-span-2 sm:col-start-1 mt-2"},z=f(()=>e("label",{for:"fullName",class:"block text-sm font-medium leading-6 text-white"},"Nom",-1)),F={class:"mt-2"},G={class:"sm:col-span-2 sm:col-start-1 mt-2"},R={__name:"CreationCompteView",setup(u){let s=null;const r=c(),l=c(""),m=c(""),d=c(!0);y(async()=>{s=new S("http://tavue.kujundzic.fr"),s.authStore.onChange(()=>{r.value=s.authStore.model},!0)});const w=()=>{s.authStore.clear(),r.value=null},v=async()=>{try{const o=await s.collection("users").authWithPassword(username.value,l.value);console.log(s.authStore.isValid),console.log(s.authStore.token),console.log(s.authStore.model)}catch(o){alert(o.message)}},_=async()=>{try{const o={email:username.value,emailVisibility:!0,password:l.value,passwordConfirm:l.value,name:m.value},t=await s.collection("users").create(o);await v()}catch(o){alert(o.message)}};return(o,t)=>{var g;return a(),n("div",E,[e("div",N,[e("div",V,[r.value?(a(),n("div",A,[e("h1",null,"Welcome "+h((g=r.value)==null?void 0:g.name),1),e("div",null,[e("button",{type:"button",onClick:w,class:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Logout")])])):(a(),n("div",I,[e("h1",L,h(d.value?"LOGIN":"CREATE ACCOUNT"),1),e("div",U,[M,e("div",j,[p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>o.username=i),type:"text",name:"username",id:"username",autocomplete:"none",placeholder:"Enter Email Address ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[b,o.username]])])]),e("div",B,[D,e("div",T,[p(e("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),type:"password",name:"password",id:"password",autocomplete:"none",placeholder:"Enter Password ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[b,l.value]])])]),d.value?(a(),n("div",O,[e("div",P,[e("button",{type:"button",onClick:v,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Login"),e("button",{type:"button",onClick:t[2]||(t[2]=i=>d.value=!1),class:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"CrÃ©er Compte")])])):(a(),n("div",W,[e("div",$,[z,e("div",F,[p(e("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>m.value=i),type:"text",name:"fullName",id:"fullName",autocomplete:"none",placeholder:"Enter Full Name ",class:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 bg-white bg-opacity-10 backdrop-blur-md"},null,512),[[b,m.value]])])]),e("div",G,[e("button",{type:"button",onClick:_,class:"mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"},"Enregistrer nouvel utilisateur"),e("button",{type:"button",onClick:t[4]||(t[4]=i=>d.value=!0),class:"rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"},"Annuler ")])]))]))])])])}}},J=x(R,[["__scopeId","data-v-d8f553a4"]]);export{J as default};
