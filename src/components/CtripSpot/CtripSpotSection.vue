<template>
  <div>
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,i) in data.swiperLists" :key="i">
            <img :src="item.img">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="rim_portals_item">
        <div class="react_swipeable_view_container">
          <div>
            <div class="rim_entry_list">
              <a href="javascript:;" class="color_seven">
                <div class="expose_dom">
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_17.png"></span>
                    <span class="rim_ov_span">自驾游</span>
                  </p>
                </div>
              </a>
              <a href="javascript:;" class="color_seven">
                <div class="expose_dom">
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_7.png"></span>
                    <span class="rim_ov_span">温泉度假</span>
                  </p>
                </div>
              </a>
              <a href="javascript:;" class="color_seven">
                <div class="expose_dom">
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_2.png"></span>
                    <span class="rim_ov_span">周边跟团</span>
                  </p>
                </div>
              </a>
              <a href="javascript:;" class="color_seven">
                <div class="expose_dom">
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_3.png" ></span>
                    <span class="rim_ov_span">一日游</span>
                  </p>
                </div>
              </a>
              <a href="javascript:;" class="color_seven">
                <div class="expose_dom">
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_4.png"></span>
                    <span class="rim_ov_span">景点门票</span>
                  </p>
                </div>
              </a>
              <a href="javascript:;" class="color_seven" >
                <div class="expose_dom" >
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_5.png"></span>
                    <span class="rim_ov_span">亲子游</span>
                  </p>
                </div>
              </a>
              <a href="javascript:;" class="color_seven">
                <div class="expose_dom">
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_14.png"></span>
                    <span class="rim_ov_span">古镇古村</span>
                  </p>
                </div>
              </a>
              <a href="javascript:;" class="color_seven">
                <div class="expose_dom">
                  <p>
                    <span class="index_rim_box"><img src="../../assets/img/zby_8.png"></span>
                    <span class="rim_ov_span">酒店+美食</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <p class="rim_focus_box">
          <i class="cur"></i>
          <i></i>
        </p>
    </div>

    <div class="guide_anv">
      <h3>景点人气榜</h3>
      <div class="preference_box_tit">
        <div class="preference_box_span">
          <span>西安城墙</span>
          <p>2019灯会</p>
        </div>
        <div class="preference_box_span">
          <span>西安城墙</span>
          <p>2019灯会</p>
        </div>
        <div class="preference_box_span">
          <span>西安城墙</span>
          <p>2019灯会</p>
        </div>

      </div>
    </div>

    <div class="nav">
      <ul>
        <li>
          <span class="nav_tit">温泉</span>
          <img src="../../assets/img/wenquan06.jpg" alt="">
        </li>
        <li>
          <span>全部商圈</span>
          <img src="../../assets/img/wenquan07.jpg" alt="">
        </li>
        <li>
          <span>智能排序</span>
          <img src="../../assets/img/wenquan07.jpg" alt="">
        </li>
        <li>
          <span class="nav_f4"></span>
          <span>可订今日</span>
        </li>
      </ul>
    </div>

    <div class="modlist_item content">
      <a href="#">
        <div class="listinnerwrap">
          <div class="imgbox">
            <img src="../../assets/img/wenquan08.jpg">
          </div>
          <div class="textview">
            <div class="textview_title ">
              <div class="textview_title_text">
                <span>帝王公</span>
              </div>
            </div>
            <div class="textview_comment">
              <div class="textview__comment_score">4.7分</div>
              <div class="textview__comment_count">2.6万条点评</div>
            </div>
            <div class="textview_tagbox">
              <div class="tagelltext">
                <i class="ifanli">温泉</i>
                <i>帝王宫</i>
              </div>
            </div>
            <div class="textview_bottom">
              <div class="textview_bottom_distance">
                <div class="landmark_outbox">距您1.3km
                  <span class="landmark_dot"></span>
                  <span class="landmark">.外滩地区</span>
                </div>
              </div>
              <div class="textview_bottom_freeprice">￥288
                <span>起</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="modlist_item">
      <a href="#">
        <div class="listinnerwrap">
          <div class="imgbox">
            <img src="../../assets/img/wenquan08.jpg">
          </div>
          <div class="textview">
            <div class="textview_title ">
              <div class="textview_title_text">
                <span>帝王公</span>
              </div>
            </div>
            <div class="textview_comment">
              <div class="textview__comment_score">4.7分</div>
              <div class="textview__comment_count">2.6万条点评</div>
            </div>
            <div class="textview_tagbox">
              <div class="tagelltext">
                <i class="ifanli">温泉</i>
                <i>帝王宫</i>
              </div>
            </div>
            <div class="textview_bottom">
              <div class="textview_bottom_distance">
                <div class="landmark_outbox">距您1.3km
                  <span class="landmark_dot"></span>
                  <span class="landmark">.外滩地区</span>
                </div>
              </div>
              <div class="textview_bottom_freeprice">￥288
                <span>起</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>



  </div>


</template>

<script>
    import Swiper from 'swiper'
    // import
    export default {
      name: "CtripSpotSection",
      props:["data"],
      // data(){
      //   return {
      //   swiperList:[
      //     {
      //       id:"01",
      //       img:"static/img/zby01.jpg"
      //     },
      //     {
      //       id:"02",
      //       img:"static/img/zby01.jpg"
      //     }
      //   ]
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

<style scoped>
  @import "../../assets/css/swiper.min.css";
  @import "../../assets/css/hotspring.css";
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-container .swiper-slide img{
    width: 100%;
    height: 100%;
  }

  /*rim_portals_item*/
  .rim_portals_item {
    padding: 10px 0 .19rem;
    margin-bottom: 10px;
    background: #fff;
    position: relative;
  }
  .react_swipeable_view_container{
    flex-direction: row;
    transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
    direction: ltr;
    display: flex;
    will-change: transform;
    transform: translate(0%, 0px);
  }
  .rim_entry_list {
    zoom: 1;
    overflow: hidden;
    box-sizing: border-box;
    background: #fff;
    position: relative;
  }
  .rim_entry_list a {
    float: left;
    width: 25%;
    position: relative;
    color: #000;
    z-index: 2;
    font-size: 12px;
  }
  .rim_entry_list a p {
    margin-right: 6px;
    height: .76rem;
    text-align: center;
  }
  .index_rim_box {
    width: .48rem;
    border-radius: 100%;
    display: inline-block;
    margin-top: 7px;
    position: relative;
    text-align: center;
  }
  .index_rim_box img {
    width: .3rem;
    height: .3rem;
    margin:0 auto;
    margin-top: 9px;
  }
  .rim_ov_span {
    display: block;
    width: 100%;
    height: .18rem;
    line-height:.18rem;
    color: #333;
  }
  .rim_focus_box {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    line-height: 7px;
    text-align: center;
  }

  .rim_focus_box i {
    background: #e5e5e5;
    width: 7px;
    height: 7px;
    display: inline-block;
    border-radius: 100%;
    margin: 0 3px;
  }
  .rim_focus_box i.cur {
    background: #ccc;
  }
  .guide_anv{
    background: #ffffff;
  }
  .guide_anv h3{
    text-align: center;
    padding-top: .21rem;
  }
  .preference_box_tit{
    display: flex;
    justify-content: space-between;
    padding-bottom: .17rem;
  }
  .preference_box_span{
    width: 1.15rem;
    height: .57rem;
    border-radius: 5px;
    border: 1px solid #f1f1f1;
    text-align: center;
    margin-right: .1rem;
    margin-left: .1rem;
    margin-top: .19rem;
  }
  .preference_box_span span{
    color: #222222;
    font-size: 14px;
    margin-top: .12rem;
    display: block;
  }
  .preference_box_span p{
    color: #bbbbbb;
    font-size: .1rem;
  }


  .sticky {
    /*滚过初始位置时自动吸顶*/
    position: -webkit-sticky;
    position: sticky;
    /*吸顶时的定位*/
    top: 0;
    left: 0;
    /*z比下方所有z高*/
    z-index: 9999;
  }
  .fixed-top {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
  }
</style>
