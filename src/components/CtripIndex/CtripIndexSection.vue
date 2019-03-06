<template>
  <div class="ctripsection">
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in data.swiperList" :key="item.id">
            <img :src="item.img"/>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <ctrip-index-localnav :data="data"></ctrip-index-localnav>
    <ctrip-index-nav></ctrip-index-nav>
    <ctrip-index-subnav></ctrip-index-subnav>
    <ctrip-index-sale-wrapper></ctrip-index-sale-wrapper>

  </div>

</template>

<script>
    import CtripIndexLocalnav from "./CtripIndexLocalnav";
    import CtripIndexNav from "./CtripIndexNav";
    import CtripIndexSubnav from "./CtripIndexSubnav";
    import CtripIndexSaleWrapper from "./CtripIndexSaleWrapper";
    import Swiper from 'swiper'
    export default {
      name: "CtripIndexSection",
      components: {
        CtripIndexSaleWrapper,
        CtripIndexSubnav,
        CtripIndexNav,
        CtripIndexLocalnav
      },
      props:["data"],
      // data(){
      //   return {
      //     swiperList:[
      //       {
      //         id:"01",
      //         img:"static/img/220.jpg"
      //       },
      //       {
      //         id:"02",
      //         img:"static/img/221.jpg"
      //       }
      //     ]
      //   }
      // },
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
.ctripsection{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
