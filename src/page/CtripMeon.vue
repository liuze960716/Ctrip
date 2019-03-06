<template>
  <div class="ctripmeonbox">
    <ctrip-meon-header class="ctripmeonheader"></ctrip-meon-header>
    <ctrip-meon-section></ctrip-meon-section>
    <!--<ctrip-index-footer></ctrip-index-footer>-->
  </div>

</template>

<script>
    import CtripMeonHeader from "../components/CtripMeon/CtripMeonHeader";
    import CtripMeonSection from "../components/CtripMeon/CtripMeonSection";
    // import CtripIndexFooter from "../components/common/CtripIndexFooter";
    export default {
      name: "CtripMeon",
      components: {
        // CtripIndexFooter,
        CtripMeonSection,
        CtripMeonHeader
      }
    }
</script>

<style>
@import "../assets/css/me.css";
html,body{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
}
.ctripmeonbox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ctripmeonheader{
  width: 100%;
  height: 1.56rem;
}
</style>
