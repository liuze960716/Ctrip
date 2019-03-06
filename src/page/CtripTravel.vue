<template>

  <div class="travelbox">
    <ctrip-travel-header></ctrip-travel-header>
    <ctrip-travel-section class="travel"></ctrip-travel-section>
    <!--<ctrip-index-footer></ctrip-index-footer>-->
  </div>

</template>

<script>
    // import CtripIndexFooter from "../components/common/CtripIndexFooter";
    import CtripTravelHeader from "../components/CtripTravel/CtripTravelHeader";
    import CtripTravelSection from "../components/CtripTravel/CtripTravelSection";
    export default {
        name: "CtripTravel",
        components: {
            CtripTravelSection,
            CtripTravelHeader,
            // CtripIndexFooter
          }
    }
</script>

<style>
  @import "../assets/css/travel.css";
  html,body{
    height: 100%;
  }
  body{
    display: flex;
    flex-direction: column;
  }
  .travelbox{
    display: flex;
    flex-direction: column;
  }
  .travel{
    flex: 1;
    overflow-y: auto;
  }
</style>
