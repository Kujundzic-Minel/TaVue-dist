import{C as c}from"./pocketbase.es-2eb1282e.js";import{_ as s,c as o,o as a,g as n}from"./index-ad454dcb.js";const i={data(){return{usersList:[]}},async mounted(){const e=new c("http://tavue.kujundzic.fr:80",{token:"1209600"});try{this.usersList=await e.collection("users").getFullList({})}catch(t){console.error("Erreur lors de la récupération des lunettes:",t)}}},r={class:"flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] animate-gradient"},l=n('<div class="flex flex-col justify-center items-center p-12 bg-white bg-opacity-10 backdrop-blur-md rounded-xl" data-v-02ec6c39><h1 class="text-4xl font-bold text-white mb-8" data-v-02ec6c39>Minel</h1><div class="text-decoration-none" data-v-02ec6c39><h5 class="text-2xl font-semibold text-white m-0 pb-4" data-v-02ec6c39>9 Rue lamartine</h5><h5 class="text-2xl font-semibold text-white m-0 pb-4" data-v-02ec6c39>Montbéliard, 25200</h5><h5 class="text-2xl font-semibold text-white m-0 pb-4" data-v-02ec6c39>07.82.07.09.05</h5><h5 class="text-2xl font-semibold text-white m-0 pb-4" data-v-02ec6c39>fanta@gmail.com</h5></div></div>',1),d=[l];function m(e,t,_,x,h,p){return a(),o("div",r,d)}const b=s(i,[["render",m],["__scopeId","data-v-02ec6c39"]]);export{b as default};
