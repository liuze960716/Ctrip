<template>
  <section>
    <div class="section_tit">
      <img src="../../assets/img/pic10.gif" alt="">
      <h3>寻找路程灵感</h3>
      <img src="../../assets/img/pic10.gif" alt="">
    </div>
    <div class=section_tit_02>
      <img src="../../assets/img/pic11.gif" alt="">
      <span>下一站去哪儿</span>
    </div>

    <ctrip-trip-advert></ctrip-trip-advert>
  </section>

</template>

<script>
    import CtripTripAdvert from "./CtripTripAdvert";
    export default {
        name: "CtripTripSection",
        components: {
            CtripTripAdvert
          }
    }
</script>

<style scoped>

</style>
