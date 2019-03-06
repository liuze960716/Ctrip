<template>
  <header>
    <div class="rim_search_box">
      <span class="rim_back"><i></i></span>
      <div class="search_rim_heard">
        <div class="search_rim_col">
          <div class="search_rim_starting">上海站</div>
          <div class="search_rim_mod search_rim_grey"><i></i>主题/目的地/景点</div>
        </div>
      </div>
      <span class="rim_back"><i></i></span>
    </div>

  </header>
</template>

<script>
    export default {
        name: "CtripSpotHeader"
    }
</script>

<style scoped>
  .rim_search_box {
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    text-align: center;
    display: table;
  }
  .rim_back {
    width: .44rem;
    line-height: .44rem;
    display: table-cell;
    cursor: pointer;
    text-align: center;
  }
  .rim_back i{
    display: inline-block;
    width: .12rem;
    height: .12rem;
    vertical-align: middle;
    border-left: 2px solid #333;
    border-bottom: 2px solid #333;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    box-sizing: border-box;
  }
  .search_rim_heard .search_rim_col {
    display: table;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0;
    height: 32px;
    color: #009fde;
  }
  .search_rim_heard .search_rim_starting {
    display: table-cell;
    width: .9rem;
    color: #448aff;
    text-align: center;
    border-right: 1px solid #ddd;
    background: #eaeaea;
    border-radius: .5rem 0 0 .5rem;
  }
  .search_rim_heard .search_rim_mod {
    display: table-cell;
    color: #999;
    background: #eaeaea;
    padding-left: .30rem;
    position: relative;
    white-space: nowrap;
    border-radius: 0 .5rem .5rem 0;
    line-height: .32rem;
    text-align: left;
  }
  .search_rim_heard .search_rim_grey {
    color: #cecece;
  }
  .search_rim_mod i{
    width: 13px;
    height: 13px;
    background: url(../../assets/img/spe_sou.png) no-repeat;
    background-size: 13px auto;
    position: absolute;
    top: 10px;
    left: 10px;
  }

</style>
