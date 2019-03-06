<template>
  <div class="serverbox">
    <ctrip-server-header></ctrip-server-header>
    <ctrip-server-section></ctrip-server-section>
    <!--<ctrip-index-footer></ctrip-index-footer>-->

  </div>

</template>

<script>
    import CtripServerHeader from "../components/CtripServer/CtripServerHeader";
    import CtripServerSection from "../components/CtripServer/CtripServerSection";
    // import CtripIndexFooter from "../components/common/CtripIndexFooter";
    export default {
        name: "CtripServer",
        components: {
          // CtripIndexFooter,
          CtripServerSection,
          CtripServerHeader
        }
    }
</script>

<style>
@import "../assets/css/server.css";
html,body{
  width: 100%;
  /*height: 100%;*/
}
body{
  /*height: 100%;*/
  display: flex;
  flex-direction: column;
}
.serverbox{
  display: flex;
  flex-direction: column;
}
</style>
