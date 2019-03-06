<template>
  <div>
    <ctrip-hot-header></ctrip-hot-header>
    <ctrip-hot-section :data = "pageInfo"></ctrip-hot-section>
  </div>
</template>

<script>
    import page from "../page"
    import CtripHotHeader from "../components/CtripHot/CtripHotHeader";
    import CtripHotSection from "../components/CtripHot/CtripHotSection";
    export default {
      name: "CtripHot",
      components: {
        CtripHotSection,
        CtripHotHeader
      },
      data(){
        return{
          pageInfo:page
        }
      }
    }
</script>

<style>
  @import "../assets/css/hotspring.css";
</style>
