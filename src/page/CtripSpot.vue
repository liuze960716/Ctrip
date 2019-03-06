<template>
  <div>
    <ctrip-spot-header></ctrip-spot-header>
    <ctrip-spot-section :data="pageInfo"></ctrip-spot-section>

  </div>

</template>

<script>
    import CtripSpotHeader from "../components/CtripSpot/CtripSpotHeader";
    import CtripSpotSection from "../components/CtripSpot/CtripSpotSection";
    import page from "../page"
    export default {
      name: "CtripSpot",
      components: {
        CtripSpotSection,
        CtripSpotHeader
      },
      data(){
        return{
          pageInfo:page
        }
      }
    }
</script>

<style scoped>

</style>
