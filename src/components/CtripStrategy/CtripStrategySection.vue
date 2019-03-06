<template>
  <div class="Strategy">

    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
            <img :src="item.img"/>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>

    </div>
    <ctrip-strategy-local></ctrip-strategy-local>
    <ctrip-strategy-guide></ctrip-strategy-guide>
  </div>

</template>

<script>
    import Swiper from 'swiper'
    import CtripStrategyLocal from "./CtripStrategyLocal";
    import CtripStrategyGuide from "./CtripStrategyGuide";
    export default {
      name: "CtripStrategySection",
      components: {
        CtripStrategyGuide,
        CtripStrategyLocal
      },
      data(){
        return {
          swiperList:[
            {
              id:"01",
              img:"static/img/zby01.jpg"
            },
            {
              id:"02",
              img:"static/img/220.jpg"
            },
            {
              id:"03",
              img:"static/img/zby01.jpg"
            },
            {
              id:"04",
              img:"static/img/221.jpg"
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

<style>
/*.Strategy{*/
  /*width: 100%;*/
  /*height: 100%;*/
/*}*/
</style>
