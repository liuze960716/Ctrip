<template>
  
  <section class="ctripmeonsection">
    <ctrip-meon-list></ctrip-meon-list>
    <ctrip-meon-listwo></ctrip-meon-listwo>
    <ctrip-meon-listhree></ctrip-meon-listhree>
  </section>

</template>

<script>

    import CtripMeonListwo from "./CtripMeonListwo";
    import CtripMeonListhree from "./CtripMeonListhree";
    import CtripMeonList from "./CtripMeonList";
    export default {
      name: "CtripMeonSection",
      components: {
        CtripMeonList,
          CtripMeonListhree,
          CtripMeonListwo,
        }
    }
</script>

<style scoped>
.ctripmeonsection{
  display: block;
}
</style>
