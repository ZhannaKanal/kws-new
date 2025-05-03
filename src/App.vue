<template>
  <div>
    <FixedHeader/>
    <RouterView/>
  </div>
</template>

<script>
import FixedHeader from './components/Header.vue'
import { RouterView } from "vue-router";
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>