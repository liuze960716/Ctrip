<template>
    <div>
      <ctrip-swim-header></ctrip-swim-header>
      <ctrip-swim-section></ctrip-swim-section>
    </div>
</template>

<script>
    import CtripSwimHeader from "../components/CtripSwim/CtripSwimHeader";
    import CtripSwimSection from "../components/CtripSwim/CtripSwimSection";
    export default {
      name: "CtripSwim",
      components: {
          CtripSwimSection,
          CtripSwimHeader
        }
    }
</script>

<style>
@import "../assets/css/swim.css";
@import "../assets/css/swiper.min.css";
</style>
