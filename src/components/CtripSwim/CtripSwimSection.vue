<template>
  <div>
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in swiperList" :key="item.id">

            <img :src="item.img"></div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>

    </div>

    <ctrip-swim-portals></ctrip-swim-portals>
    <ctrip-swim-section></ctrip-swim-section>
    <ctrip-swim-hotrim></ctrip-swim-hotrim>
    <ctrip-swim-hotrq></ctrip-swim-hotrq>
    <ctrip-swim-advbox></ctrip-swim-advbox>
    <ctrip-swim-prefer></ctrip-swim-prefer>

  </div>


</template>

<script>
    import CtripSwimPortals from "./CtripSwimPortals";
    import CtripSwimHotrim from "./CtripSwimHotrim";
    import CtripSwimHotrq from "./CtripSwimHotrq";
    import CtripSwimAdvbox from "./CtripSwimAdvbox";
    import CtripSwimPrefer from "./CtripSwimPrefer";
    export default {
      name: "CtripSwimSection",
      components: {
        CtripSwimPrefer,
        CtripSwimAdvbox,
        CtripSwimHotrq,
        CtripSwimHotrim,
        CtripSwimPortals
      },
      data(){
        return {
          swiperList:[
            {
              id:"01",
              img:"static/img/220.jpg"
            },
            {
              id:"02",
              img:"static/img/221.jpg"
            },
            {
              id:"03",
              img:"static/img/zby01.jpg"
            }
          ]
        }
      },
      mounted(){
        new Swiper ('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        })
      }
    }
</script>

<style scoped>

</style>
