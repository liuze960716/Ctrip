<template>
  <div class="wifi_header">

      <div class="header_left_box">
        <div class="header_left">
          <span><img src="../../assets/img/login_01.jpg" alt=""></span>
        </div>
        <div class="header_right">
          <span><img src="../../assets/img/pic18.gif" alt=""></span>
        </div>
      </div>

  </div>

</template>

<script>
    export default {
        name: "CtripWifiHeader"
    }
</script>

<style scoped>
  .wifi_header{
    /*position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    height: .44rem;
    padding: 6px 0;
    box-sizing: border-box;
    line-height: 44px;
    z-index: 50;
    color: #222222;
    background: #ffffff;
  }
  .header_left_box{
    width: .1rem;
    height: .44rem;
    color: #222222;
    /*background: #ffffff;*/
    overflow: hidden;
  }
  .header_left{
    display: inline-block;
    width: .44rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
  }

</style>
