<template>
  <div class="footer">
    <router-view></router-view>
    <footer class="ctripfooter">

      <router-link to="/CtripIndex">
        <a href="javascript:;"><img src="../../assets/img/pic01.gif" alt=""><span>首页</span></a>
      </router-link>

      <router-link to="/CtripTrip">
        <a href="javascript:;"><img src="../../assets/img/pic01.gif" alt=""><span>行程</span></a>
      </router-link>

      <router-link to="/CtripTravel">
        <a href="javascript:;"><img src="../../assets/img/pic01.gif" alt=""><span>旅拍</span></a>
      </router-link>


      <router-link to="/CtripServer">
        <a href="javascript:;"><img src="../../assets/img/pic01.gif" alt=""><span>客服</span></a>
      </router-link>

      <router-link to="/CtripMeon">
        <a href="javascript:;"><img src="../../assets/img/pic01.gif" alt=""><span>我的</span></a>
      </router-link>
    </footer>
  </div>

</template>

<script>
  export default {
    name: "CtripIndexFooter"
  }
</script>

<style>
  /*.ctripfooter{*/
    /*height: .5rem;*/
  /*}*/
  .footer{
    display: flex;
    flex-direction: column;
  }

  /*footer*/
  footer{
    width: 100%;
    height: .5rem;
    /*border-top:1px solid #b2b2b2;*/
    display: -webkit-flex;
    -webkit-align-items:center;
    background: #f9f9f9;
  }
  footer a{
    flex:1;
    text-align: center;
  }
  footer img{
    width: .2rem;
    height: .2rem;
    margin: 10px auto 7px;
  }
  footer span{
    display: block;
    color: #666666;
    font-size: 10px;
  }

</style>
