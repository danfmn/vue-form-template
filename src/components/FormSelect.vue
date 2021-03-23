<template>
  <div
    class="select-field"
  >
    <div class="select-container"> 
      <select
        :id="inputKey"
        v-model="currentVal"
        required
        :class="{selected: selectedIndex >= 0, hasError: input.hasError}"
        @change="formUpdated"
      >
        <option
          v-for="(option, index) in input.options"
          :key="index"
          :selected="formData[inputKey] === option"
          :default="formData[inputKey] === option"
          :value="option"
        >
          {{ lang[activeLang][option] && lang[activeLang][option] || option }}
        </option>
      </select>
      <label
        class="floating__label"
        :for="inputKey"
        :data-content="input.title"
      >{{ lang[activeLang][input.title] }}</label>
      <img
        class="select-arrow"
        src="@/assets/arrow.svg"
      > 
    </div>
    <label
      v-if="input.hasError && !input.errorMsg"
      class="error-text"
    > {{ lang[activeLang]['This field is required.'] }}</label>
    <label
      v-else-if="input.hasError && input.errorMsg"
      class="error-text"
    >{{ lang[activeLang][input.errorMsg] }}</label>
  </div>
</template>

<script>


export default {
  name: 'FormSelect',
  props: {
    formData: {
      type: Object,
      default: new Object,
    },
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
      currentVal: this.formData[this.inputKey] || this.input.title,
      selectedTitle: '',
      selectedIndex: -1,
    }
  },
  watch: {
    activeLang: function(){
      // console.log(document.getElementById(this.inputKey))
      // document.getElementById(this.inputKey).selectedIndex = 0
    }
  },
  created() {
    this.selectedTitle = this.lang[this.activeLang][this.input.title]
  },
  methods: {
    formUpdated(event) {
      this.selectedIndex = event.target.selectedIndex
      this.$emit('formUpdate', this.input.options[event.target.selectedIndex]) 
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

select {
  border-radius: 5px;
  border: 1px;
  border-style: solid;
  border-color: #d4d6de;
  padding: 14px 0 14px 0;
  width: 100%;
  color: rgb(102, 102, 102);
  font-size: 1em;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 1em;
}

select:-webkit-autofill + .floating__label,
select:-webkit-autofill:hover + .floating__label, 
select:-webkit-autofill:focus + .floating__label,
select.selected + .floating__label,
select:focus + .floating__label {
  color: rgb(88, 147, 214);
  font-size: 0.88em;
  top: 0;
  transform: translateY(0%);
  margin-top: 0;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60.5%, transparent 61%, transparent 100%)
}

.select-field {
  width: 100%;
}

@media screen and (min-width: 900px) {
  .select-field {
    width: 45%;
  }
}

.select-container {
  position: relative;
  margin-top: 1em;
  padding-top: .5em;
  position: relative;
  font-size: 1rem;
}



.select-arrow {
  top: calc(40% + 4px);
  right: 1em;
  position: absolute;
  width: 12px;
  height: 12px;
  color: #d4d6de;
  pointer-events: none;
}

select:focus {
  border-color: #9cbaf2;
}

.hasError{
  border-color: rgb(214, 88, 88);
}

</style>
