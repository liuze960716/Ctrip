<template>
    <div>
      <ctrip-wifi-header></ctrip-wifi-header>
      <ctrip-wifi-section></ctrip-wifi-section>
    </div>
</template>

<script>
    import CtripWifiHeader from "../components/CtripWifi/CtripWifiHeader";
    import CtripWifiSection from "../components/CtripWifi/CtripWifiSection";
    export default {
      name: "CtripWifi",
      components: {
        CtripWifiSection,
        CtripWifiHeader
      }
    }
</script>

<style scoped>

</style>
