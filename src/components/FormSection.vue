<template>
  <div class="section-container">
    <div class="section-header">
      <label class="section-title"> {{ lang[activeLang][title] }}</label>
    </div>
    <div class="section-content">
      <div
        v-for="(row, index) in rows"
        :key="index"
        class="row-container"
      >
        <slot
          v-for="(input, inputIndex) in row"
          :key="inputIndex"
        >
          <FormText
            v-if="(input.type === 'text') && typeof(input.shouldShow) === 'undefined' || typeof(input.shouldShow) != 'undefined' && input.shouldShow() === true"
            :input-key="inputIndex"
            :input="input"
            :active-lang="activeLang"
            @formUpdate="$emit('formUpdate', inputIndex, $event)"
          />
          <FormTextArea
            v-else-if="input.type === 'textarea'"
            :input="input"
            :input-key="inputIndex"
            :active-lang="activeLang"
            @formUpdate="$emit('formUpdate', inputIndex, $event)"
          />
          <FormSelect
            v-else-if="input.type === 'select'"
            :input="input"
            :input-key="inputIndex"
            :active-lang="activeLang"
            :form-data="formData"
            @formUpdate="$emit('formUpdate', inputIndex, $event)"
          />
          <FormDatePicker
            v-else-if="input.type === 'datepicker'"
            :input="input"
            :input-key="inputIndex"
            :active-lang="activeLang"
            @formUpdate="$emit('formUpdate', inputIndex, $event)"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import FormText from './FormText.vue'
import FormSelect from './FormSelect.vue'
import FormDatePicker from './FormDatePicker.vue'
import FormTextArea from './FormTextArea.vue'

export default {
  name: 'FormSection',
  components: {
      FormSelect,
      FormText,
      FormTextArea,
      FormDatePicker,
  },
  props: {
    formData: {
      type: Object,
      default: new Object,
    },
    activeLang: {
      type: String,
      default: "EN",
    },
    title: {
      type: String,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 0;
}

.section-container {
  padding-top: 1em;
}

.section-content {
  display: block;
  
}
.section-header {
  background-color: #9cbaf2;
  display: flex;
  padding: 15px 10px;
  border-radius: 5px;
}

.section-title {
  color: #fff;
  margin: 0;
}

</style>
