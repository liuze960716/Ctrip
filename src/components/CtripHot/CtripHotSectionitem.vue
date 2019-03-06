<template>
  <div>
    <div class="modlist_item" v-for="(item,i) in data.lists" :key="i">
      <a href="#">
        <div class="listinnerwrap">
          <div class="imgbox">
            <img :src="item.img">
          </div>
          <div class="textview">
            <div class="textview_title ">
              <div class="textview_title_text">
                <span>{{item.title}}</span>
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
              <div class="textview_bottom_freeprice">￥288<span>起</span></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CtripHotSectionitem",
      props:["data"],
        // data(){
        //   return{
        //     navs:[
        //       {
        //         title:"帝王公",
        //         img:"static/img/wenquan08.jpg"
        //       },
        //       {
        //         title:"帝王公",
        //         img:"static/img/wenquan08.jpg"
        //       },
        //       {
        //         title:"帝王公",
        //         img:"static/img/wenquan08.jpg"
        //       },
        //       {
        //         title:"帝王公",
        //         img:"static/img/wenquan08.jpg"
        //       },
        //       {
        //         title:"帝王公",
        //         img:"static/img/wenquan08.jpg"
        //       },
        //       {
        //         title:"帝王公",
        //         img:"static/img/wenquan08.jpg"
        //       }
        //     ]
        //   }
        // }
    }
</script>

<style scoped>

</style>
