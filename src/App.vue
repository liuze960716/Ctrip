<template>
  <div id="app">
    <!--<ctrip></ctrip>-->
    <router-view></router-view>
  </div>

</template>

<script>
  import ctrip from './page/CtripIndex';
  import CtripMeon from './page/CtripMeon';
  import CtripTrip from './page/CtripTrip'
  export default {
    name: "App",
    components:{
      ctrip,
      CtripMeon,
      CtripTrip
    }
  }
</script>

<style scoped>
  html,body{
    height:100%;
    width:100%;
  }
  #app{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
