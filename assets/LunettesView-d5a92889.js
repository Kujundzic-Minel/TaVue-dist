import{C as l}from"./pocketbase.es-2eb1282e.js";import{_ as i,c as s,a as t,F as d,e as u,b as o,t as c}from"./index-0ca18ffa.js";const _={data(){return{lunettesList:[]}},async mounted(){const r=new l("http://tavue.kujundzic.fr:80",{token:"1209600"});try{this.lunettesList=await r.collection("lunettes").getFullList({})}catch(n){console.error("Erreur lors de la récupération des lunettes:",n)}}},h={class:"container mx-auto px-4 pb-64"},p=t("h1",{class:"text-2xl font-bold mb-6"},"Retrouvez nos différentes paires de lunettes !",-1),f={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},g=["src"],m={class:"p-4"},x={class:"text-xl font-bold"},b={class:"text-gray-700 mt-2"};function v(r,n,w,L,a,k){return o(),s("div",h,[p,t("div",f,[(o(!0),s(d,null,u(a.lunettesList,e=>(o(),s("div",{key:e.id,class:"card bg-white shadow-lg rounded-lg overflow-hidden"},[t("img",{src:e.LunettesPhotos,alt:"Photo des lunettes",class:"w-full h-48 object-cover object-center"},null,8,g),t("div",m,[t("h2",x,c(e.Nom),1),t("p",b,c(e.Prix),1)])]))),128))])])}const B=i(_,[["render",v]]);export{B as default};
