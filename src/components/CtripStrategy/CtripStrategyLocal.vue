<template>
  <ul class="local_nav">
    <li v-for="(item,i) in nav" :key="i">
      <a>
        <span class="local_nav_icon icon_01" :class="'icon_0'+(i+1)/1"></span>
        <span>{{item}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
    export default {
      name: "CtripStrategyLocal",
      data(){
        return{
          nav:[
            "景点","酒店","美食林","行程路线","当地玩乐"
          ]
        }
      }
    }
</script>

<style scoped>

</style>
