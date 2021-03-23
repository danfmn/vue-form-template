<template>
  <div class="form-field">
    <div class="input-container">
      <input
        :id="inputKey"
        type="text"
        :placeholder="input.title"
        class="floating__input"
        :class="{hasError: input.hasError}"
        @change="$emit('formUpdate', $event.target.value)"
      >
      <label
        class="floating__label"
        :for="inputKey"
        :data-content="input.title"
      >{{ lang[activeLang][input.title] }}</label>
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
  name: 'FormText',
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
      required: true,
    }
  }
}
</script>


<style >

.input-container.input-field {
  padding-top: 0;
}

.form-field {
  width: 100%;
  margin-top: .5em;
}

@media screen and (min-width: 900px) {
  .form-field {
    width: 45%;
  }
}

.input-container {
  padding-top: .5em;
  position: relative;
  font-size: 1rem;

}

.floating__input {
  border-radius: 5px;
  border: 1px;
  outline-width: 1px;
  border-style: solid;
  border-color: #d4d6de;
  padding: 14px 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 1em;
  caret-color: #9cbaf2;
  width: 100%;
  text-indent: 1em;
}

.floating__input::placeholder {
  color: rgba(0, 0, 0, 0);
}

.floating__label {
  margin-top: .25em;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  position: absolute;

  margin-left: 1em;
  color: rgb(102, 102, 102);
  content: attr(data-content);
  filter: blur(0);
  backface-visibility: hidden;
  pointer-events: none;
  display: inline-block;
  background: #fff;
  transition: all 0.2s ease;
}

/*
.floating__label:-webkit-autofill,
.floating__label:-webkit-autofill:hover, 
.floating__label:-webkit-autofill:focus,
*/
.floating__input:-webkit-autofill + .floating__label,
.floating__input:-webkit-autofill:hover + .floating__label, 
.floating__input:-webkit-autofill:focus + .floating__label,
.floating__input:not(:placeholder-shown) + .floating__label,
.floating__input:focus + .floating__label {
  color: rgb(88, 147, 214);
  font-size: 0.88em;
  top: 0;
  transform: translateY(0%);
  margin-top: 0;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60.5%, transparent 61%, transparent 100%)
}

input:focus {
  border-color: #9cbaf2;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.error-text {
  color: rgb(214, 88, 88);
  text-align: left;
  font-size: 12px;
  padding-top: 4px;
  float: left;
}

.hasError{
  border-color: rgb(214, 88, 88);
}

</style>
