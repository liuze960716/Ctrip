<template>
  <ul class="subnav">
    <li v-for="(item,i) in nav" :key="i">
      <a href="#" title="WiFi电话卡">
        <span class="subnav_info" :class="'subnav_icon_0'+(i+1)/1"></span>
        <span>{{item}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "CtripIndexSubnav",
        data(){
          return{
            nav:[
              "攻略 景点",
              "保险·签证",
              "外币兑换",
              "购物·信用卡",
              "当地向导",
              "自由行",
              "境外玩乐",
              "礼品卡",
              "信用卡",
              "更多"
            ]
          }
        }
    }
</script>

<style scoped>

</style>
