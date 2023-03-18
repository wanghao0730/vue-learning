export default [
  {
    path:'/',
    redirect:'/layouts/home'
  },
  {
    path:'/layouts',
    name:'Layouts',
    component: () => import('@/layouts/index.vue'),
    children:[
      {
        path:"home",
        name:"Home",
        component:() => import("@/views/Home.vue"),
        meta:{
          keepAlive:true
        }
      },
      {
        path:"other",
        name:"Other",
        component:() => import("@/views/Other.vue"),
        meta:{
          keepAlive:true
        }
      }
    ]
  },
]