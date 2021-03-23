<template>
  <transition
    name="fade"
  >
    <slot v-if="show" />
  </transition>
</template>

<script>

export default {
  name: 'FadeIn',
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.show = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

