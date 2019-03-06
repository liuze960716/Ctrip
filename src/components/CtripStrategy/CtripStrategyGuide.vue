<template>
  <div class="guide_title">
    <div class="guide_tit" >
      <h3>特色指南</h3>
      <a href="#" v-for="(item,i) in nav" :key="i">
        <span>{{item.title}}</span>
        <p>{{item.banner}}</p>
      </a>
    </div>
    <div class="guide_anv">
      <h3>景点玩法</h3>
      <div class="preference_box_tit">
        <p class="preference_box_text">景点人气榜</p>
        <span>查看榜单></span>
      </div>
      <ul>
        <li v-for="(item,i) in nav" :key="i">
          <a href=""><img :src="item.img"></a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "CtripStrategyGuide",
        data(){
          return{
            nav:[
              {
                title:"梦回大唐",
                banner:"一眼千年梦回盛唐",
                img:"static/img/gl_01.jpg"
              },
              {
                title:"梦回大唐",
                banner:"一眼千年梦回盛唐",
                img:"static/img/gl_01.jpg"
              },
              {
                title:"梦回大唐",
                banner:"一眼千年梦回盛唐",
                img:"static/img/gl_01.jpg"
              },
              {
                title:"梦回大唐",
                banner:"一眼千年梦回盛唐",
                img:"static/img/gl_01.jpg"
              },
              {
                title:"梦回大唐",
                banner:"一眼千年梦回盛唐",
                img:"static/img/gl_01.jpg"
              },
              {
                title:"梦回大唐",
                banner:"一眼千年梦回盛唐",
                img:"static/img/gl_01.jpg"
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .guide_title{
    background: #f0f3f6;
  }
  .guide_tit{
    padding:.27rem .11rem .11rem .11rem;
    background: #ffffff;
    margin-bottom: .1rem;
  }
  .guide_tit h3{
    color: #222222;
    font-size: .21rem;
    text-align: center;
    margin-bottom: .16rem;
  }
  .guide_tit a{
    display: inline-block;
    text-align: center;
    color: #666666;
    font-size: .11rem;
    border: 1px solid #f0f3f6;
    padding: .13rem;
  }
  .guide_tit a span{
    font-weight: 600;
    color: #000;
    font-size: .13rem;
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
  .preference_box_text{
    padding-left: .12rem;
    color: #222222;
    font-size: .18rem;
    font-weight: 600;
  }
  .preference_box_tit span{
    padding-right: .12rem;
    font-size: .12rem;
    color: #6b6b6b;
  }
  .guide_anv ul{
    display: flex;
    overflow-y: auto;
    margin-left: .12rem;
  }
  .guide_anv ul li a{
    display: block;
    width: 1.5rem;
    height: 1.53rem;
    margin-right: .1rem;
  }
  .guide_anv ul li a img{
    width: 100%;
    height: 100%;
  }
</style>
