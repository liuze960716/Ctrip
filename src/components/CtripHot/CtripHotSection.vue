<template>
  <section>
    <ctrip-hot-sectionnav ></ctrip-hot-sectionnav>
    <ctrip-hot-sectionitem :data = "data"></ctrip-hot-sectionitem>
  </section>
</template>

<script>
    import CtripHotSectionnav from "./CtripHotSectionnav";
    import CtripHotSectionitem from "./CtripHotSectionitem";
    export default {
      name: "CtripHotSection",
      components: {
        CtripHotSectionitem,
        CtripHotSectionnav
      },
      props:["data"]
    }
</script>

<style scoped>

</style>
