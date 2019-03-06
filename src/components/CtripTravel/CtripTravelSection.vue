<template>
  <div class="main_section">
    <!-- section -->
    <ctrip-travel-hotnow></ctrip-travel-hotnow>
    <!-- nav -->
    <ctrip-travel-nav></ctrip-travel-nav>
    <!-- main -->
    <ctrip-travel-main></ctrip-travel-main>
    <!--add-->
    <ctrip-travel-add></ctrip-travel-add>
  </div>

</template>

<script>
    import CtripTravelNav from "./CtripTravelNav";
    import CtripTravelMain from "./CtripTravelMain";
    import CtripTravelAdd from "./CtripTravelAdd";
    import CtripTravelHotnow from "./CtripTravelHotnow";
    export default {
      name: "CtripTravelSection",
      components: {
        CtripTravelHotnow,
        CtripTravelAdd,
        CtripTravelMain,
        CtripTravelNav
      }
    }
</script>

<style scoped>

</style>
