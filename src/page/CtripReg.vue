<template>
  <div>
    <header>
      <div class="header">
        <img src="../assets/img/login_01.jpg" alt="">
        <a href="">登录</a>
      </div>
    </header>
    <section>
      <h3>携程账号注册</h3>
      <div class="log">
        <input class="input_01" type="text" placeholder="国内手机号/用户名/邮箱/卡号">
        <input class="input_02" type="text" placeholder="注册密码">
        <a href=""><span>注册</span></a>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "CtripReg"
    }
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    padding: .28rem .23rem 0 .16rem;
  }
  .header img{
    width: .08rem;
    height: .14rem;
  }
  .header a{
    color: #4c4c4c;
    font-size: .12rem;
  }
  section h3{
    color: #313131;
    font-size: .19rem;
    text-align: center;
    margin-top: .55rem;
  }
  .log{
    margin-right: .2rem;
    margin-left: .2rem;
  }
  .input_01{
    width: 100%;
    height: 100%;
    border: 0;
    border-bottom: 1px solid #999;
    /*text-indent:.3rem;*/
    display: block;
    color: #666;
    font-size: 12px;
    outline: none;
    margin: .65rem auto 0;
    padding-bottom: .15rem;

  }
  .input_02{
    width: 100%;
    height: 100%;
    border: 0;
    border-bottom: 1px solid #999;
    /*text-indent:.3rem;*/
    display: block;
    color: #666;
    font-size: 12px;
    outline: none;
    margin: .65rem auto 0;
    padding-bottom: .15rem;

  }
  .log a{
    display: block;
    color: #fff6ea;
    font-size: .15rem;
    background: #ff9a14;
    width: 2.5rem;
    height: .38rem;
    text-align: center;
    line-height: .38rem;
    border-radius: 5px;
    margin: .3rem auto 0;
  }
</style>
