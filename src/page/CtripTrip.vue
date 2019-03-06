<template>
  <div>
    <ctrip-trip-header></ctrip-trip-header>
    <ctrip-trip-section></ctrip-trip-section>
    <!--<ctrip-index-footer></ctrip-index-footer>-->
  </div>
</template>

<script>
    import CtripIndexFooter from "../components/common/CtripIndexFooter";
    import CtripTripSection from "../components/CtripTrip/CtripTripSection";
    import CtripTripHeader from "../components/CtripTrip/CtripTripHeader";
    export default {
        name: "CtripTrip",
        components: {
            CtripTripHeader,
            CtripTripSection,
            CtripIndexFooter
          }
    }
</script>

<style>
  @import "../assets/css/trip.css";
</style>
