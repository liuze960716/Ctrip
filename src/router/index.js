import Vue from 'vue'
import Router from 'vue-router'
import CtripIndex from '../page/CtripIndex'
import CtripMeon from '../page/CtripMeon'
import CtripTrip from '../page/CtripTrip'
import CtripServer from '../page/CtripServer'
import CtripTravel from '../page/CtripTravel'
import CtripHot from '../page/CtripHot'
import CtripSwim from '../page/CtripSwim'
import CtripWifi from '../page/CtripWifi'
import CtripStrategy from '../page/CtripStrategy'
import CtripSpot from '../page/CtripSpot'
import CtripLogin from '../page/CtripLogin'
import CtripReg from '../page/CtripReg'


import CtripIndexFooter from '../components/common/CtripIndexFooter'
Vue.use(Router);

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'CtripIndex',
  //     component: CtripIndex
  //   },
  //   {
  //     path: '/CtripIndex',
  //     name: 'CtripIndex',
  //     component: CtripIndex
  //   },
  //   {
  //     path: '/CtripMeon',
  //     name: 'CtripMeon',
  //     component: CtripMeon,
  //   },
  //   {
  //     path: '/CtripTrip',
  //     name: 'CtripTrip',
  //     component: CtripTrip,
  //   },
  //   {
  //     path: '/CtripServer',
  //     name: 'CtripServer',
  //     component: CtripServer,
  //
  //   },
  //   {
  //     path: '/CtripTravel',
  //     name: 'CtripTravel',
  //     component: CtripTravel,
  //   },
  //   {
  //     path: '/CtripHot',
  //     name: 'CtripHot',
  //     component: CtripHot,
  //   },
  //   {
  //     path: '/CtripSwim',
  //     name: 'CtripSwim',
  //     component: CtripSwim,
  //   },
  //   {
  //     path: '/CtripStrategy',
  //     name: 'CtripStrategy',
  //     component: CtripStrategy,
  //   },
  //   {
  //     path: '/CtripLogin',
  //     name: 'CtripLogin',
  //     component: CtripLogin,
  //   },
  //   {
  //     path: '/CtripReg',
  //     name: 'CtripReg',
  //     component: CtripReg,
  //   },
  //   {
  //     path: '/CtripSpot',
  //     name: 'CtripSpot',
  //     component: CtripSpot,
  //   },
  //     path: '/CtripWifi',
  //     name: 'CtripWifi',
  //     component: CtripWifi,
  // ],

  routes:[
    {
      path:"/",
      component:CtripIndexFooter,
      children:[
        {
          path:"",
          component:CtripIndex
        },
        {
          path:"CtripIndex",
          component:CtripIndex
        },
        {
          path:"CtripMeon",
          component:CtripMeon
        },
        {
          path:"CtripTrip",
          component:CtripTrip
        },
        {
          path:"CtripServer",
          component:CtripServer
        },
        {
          path:"CtripTravel",
          component:CtripTravel
        },
      ]
    },
    {
      path: '/CtripHot',
      name: 'CtripHot',
      component: CtripHot,
    },
    {
      path: '/CtripSpot',
      name: 'CtripSpot',
      component: CtripSpot,
    },
    {
      path: '/CtripSwim',
      name: 'CtripSwim',
      component: CtripSwim,
    },

    {
      path: '/CtripStrategy',
      name: 'CtripStrategy',
      component: CtripStrategy,
    },
    {
      path: '/CtripWifi',
      name: 'CtripWifi',
      component: CtripWifi,
    },
    {
      path: '/CtripLogin',
      name: 'CtripLogin',
      component: CtripLogin,
    },
    {
      path: '/CtripReg',
      name: 'CtripReg',
      component: CtripReg,
    },
  ],
  mode: "history" //作用是为了消除url中后面的/#/
})
