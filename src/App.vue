<template>
  <InquiryForm v-if="lang" />
</template>

<script>
import InquiryForm from './components/InquiryForm.vue'


export default {
  name: 'App',
  components: {
    InquiryForm
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  margin: 60px auto;
}

*:-webkit-autofill,
*:-webkit-autofill:hover, 
*:-webkit-autofill:focus, 
*:-webkit-autofill:active {
 -webkit-box-shadow: 0 0 0px 1000px #e5eaf3 inset;
}


@media screen and (min-width: 600px) {
  #app {
    width: 60%;
  }
}

@media screen and (min-width: 1400px) {
  #app {
    width: 40%;
  }
}


</style>
