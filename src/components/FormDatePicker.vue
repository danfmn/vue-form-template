<template>
  <div class="form-field">
    <div class="input-container">
      <Datepicker
        :id="inputKey"
        v-model="picked"
        class="floating__input"
        :placeholder="input.title"
        @change="$emit('formUpdate', $event.target.value)"
      />
      <label
        class="floating__label"
        :for="inputKey"
        :data-content="input.title"
      >{{ lang[activeLang][input.title] }}</label>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'

export default {
  name: 'FormDatePicker',
  components: {
    Datepicker,
  },
  props: {
    activeLang: {
      type: String,
      default: "EN",
    },
    input: {
      type: Object,
      required: true,
    },
    inputKey: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      picked: null,
    }
  },
  created() {
    const picked = ref(new Date())
    this.picked = picked;
    this.$emit('formUpdate',picked)
  },
  methods: {
    formUpdated(event) {
      this.$emit('formUpdate', event.target.value) 
    },
  }
}
</script>

<style scoped>

.floating__label {
  color: rgb(88, 147, 214);
  font-size: 0.88em;
  top: 0;
  transform: translateY(0%);
  margin-top: 0;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 61%, transparent 62%, transparent 100%)
}
</style>