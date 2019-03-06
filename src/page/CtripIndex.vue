<template>
  <div class="ctripbox">
    <ctrip-index-header></ctrip-index-header>
    <ctrip-index-section :data = "pageInfo"></ctrip-index-section>
    <!--<ctrip-index-footer></ctrip-index-footer>-->
  </div>
</template>

<script>
    import CtripIndexHeader from "../components/CtripIndex/CtripIndexHeader";
    import CtripIndexSection from "../components/CtripIndex/CtripIndexSection";
    import CtripIndexFooter from "../components/common/CtripIndexFooter";
    import page from "../page"
    export default {

      name: "CtripIndex",
      components:{
        CtripIndexFooter,
        CtripIndexSection,
        CtripIndexHeader
      },
      data(){
        return{
          pageInfo:page
        }
      }
    }
</script>

<style>
  @import "../assets/css/index.css";
  @import "../assets/css/swiper.min.css";
  html,body{
    height: 100%;
  }
  body{
    display: flex;
    flex-direction: column;
  }
  .ctripbox{
    display: flex;
    flex-direction: column;
    flex: 1;
  }

</style>
