<template>
  <fade-in>
    <div
      class="header-container"
    >
      <img
        class="header-logo"
        src="@/assets/logo.svg"
      >
      <div class="spacer" />
      <h1> {{ lang[activeLang]['Inquiry Form'] }} </h1>
    </div>
  </fade-in>
</template>

<script>
import FadeIn from './FadeIn.vue'

export default {
  name: 'FormHeader',
  components: {
    FadeIn,
  },
  props: {
    activeLang: {
      type: String,
      default: "EN",
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spacer {
  width: 2%;
}

.header-logo {
  width: 64px;
  height: 64px;
  color: black;
}

h1{
  font-size: 46px;
}

</style>
