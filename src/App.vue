<template>
  <div>
    <FixedHeader/>
    <MainBody/>
    <RouterView/>
  </div>
</template>

<script>
import FixedHeader from './components/ChangedHeader.vue'
import MainBody from './components/MainBody.vue'
import { RouterView } from "vue-router";
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>