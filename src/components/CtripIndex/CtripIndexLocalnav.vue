<template>
    <ul class="local_nav">
      <li v-for="(item,i) in data.nav" :key="i">
        <a title="攻略 景点">
          <span class="local_nav_icon" :class="'icon_0'+(i+1)/1"></span>
          <span>{{item}}</span>
        </a>
      </li>
    </ul>
</template>

<script>
    export default {
      name: "CtripIndexLocalnav",
      props:["data"],
      // data(){
      //     return{
      //       nav:[
      //          "攻略 景点","门票 玩乐","周边游","美食林","温泉"
      //       ]
      //     }
      // }
    }
</script>

<style scoped>

</style>
