<template>

  <div>
    <ctrip-strategy-header></ctrip-strategy-header>
    <ctrip-strategy-section></ctrip-strategy-section>
  </div>

</template>

<script>
    import CtripStrategyHeader from "../components/CtripStrategy/CtripStrategyHeader";
    import CtripStrategySection from "../components/CtripStrategy/CtripStrategySection";
    export default {
      name: "CtripStrategy",
      components: {
        CtripStrategySection,
        CtripStrategyHeader
      }
    }
</script>

<style>
  @import "../assets/css/strategy.css";
  @import "../assets/css/swiper.min.css";
</style>
