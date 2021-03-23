<template>
  <div class="container-main">
    <form-header :active-lang="activeLang" />
    <div class="lang-container">
      <form-select
        id="lang-select"
        :input="{ title: 'Language', options: ['EN', 'ES'] }"
        :active-lang="activeLang"
        @formUpdate="updateLang"
      />
    </div>
    <form-section
      v-for="(formSection, index) in formStructure"
      :key="index"
      :title="index"
      :rows="formSection"
      :active-lang="activeLang"
      :form-data="formData"
      @formUpdate="formFieldChanged"
    />
    <div
      class="submit-button"
      @click="submitForm"
    >
      <label class="submit-button-text">
        {{ lang[activeLang]['Submit Form'] }}
      </label>
    </div>
    <pre v-if="JSONData"> 
      <code>{{ JSONData }}</code>
    </pre>
  </div>
</template>

<script>
import FormSection from './FormSection.vue'
import FormSelect from './FormSelect.vue'
import FormHeader from './FormHeader.vue'

const states = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
]
export default {
  name: 'InquiryForm',
  components: {
    FormSection,
    FormHeader,
    FormSelect
  },
  data() {
    return {
      activeLang: 'EN',
      formData: {},
      JSONData: null,
      formStructure: {
        'CONTACT INFORMATION': [
          {
            ['contact_salutation']: {
              title: 'Salutation',
              type: 'select',
              options: ['Dr.', 'Miss', 'Mr.', 'Mrs.', 'Ms.', 'Mx.']
            }
          },
          {
            ['contact_firstname']: { title: 'First Name', type: 'text' },
            ['contact_lastname']: { title: 'Last Name', type: 'text' }
          },
          {
            ['contact_city']: { title: 'City', type: 'text' },
            ['contact_state']: {
              title: 'State',
              type: 'select',
              options: states
            },
            ['contact_zip']: {
              title: 'Zip Code',
              type: 'text',
              isValid(zipCode) {
                const re = /^\d{5}(?:[-\s]\d{4})?$/
                if (!re.test(zipCode)) {
                  return 'Please enter a valid zip code.'
                }
              }
            }
          },
          {
            ['contact_phone']: {
              title: 'Phone Number',
              type: 'text',
              isValid(phoneNumber) {
                const re = /^(\+\d+)?\s*\(?\d+\)?[\s.-]?\d*[\s.-]?\d*$/
                if (!re.test(phoneNumber)) {
                  return 'Please enter a valid phone number.'
                }
              }
            },
            ['contact_email']: {
              title: 'Email',
              type: 'text',
              isValid(email) {
                // Regular expression taken from: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                if (!re.test(email)) {
                  return 'Please enter a valid email address.'
                }
              }
            }
          }
        ],
        'INQUIRY DATA': [
          {
            ['inquiry_who']: { title: 'Who?', type: 'text' },
            ['inquiry_when']: { title: 'When?', type: 'datepicker' }
          },
          {
            ['inquiry_city']: { title: 'City', type: 'text' },
            ['inquiry_state']: {
              title: 'State',
              type: 'select',
              options: states
            }
          },
          { ['inquiry_what']: { title: 'What?', type: 'textarea' } }
        ],
        WITNESS: [
          {
            inquiry_witness: {
              title: 'Do you have a witness?',
              type: 'select',
              options: ['Yes', 'No']
            },
            inquiry_witness_firstname: {
              title: 'Witness First Name',
              type: 'text',
              shouldShow: () => {
                if (
                  this.formData['inquiry_witness'] &&
                  this.formData['inquiry_witness'] === 'Yes'
                ) {
                  return true
                }
                return false
              }
            },
            inquiry_witness_lastname: {
              title: 'Witness Last Name',
              type: 'text',
              shouldShow: () => {
                if (
                  this.formData['inquiry_witness'] &&
                  this.formData['inquiry_witness'] === 'Yes'
                ) {
                  return true
                }
                return false
              }
            },
            inquiry_witness_phonenumber: {
              title: 'Witness Phone Number',
              type: 'text',
              shouldShow: () => {
                if (
                  this.formData['inquiry_witness'] &&
                  this.formData['inquiry_witness'] === 'Yes'
                ) {
                  return true
                }
                return false
              }
            }
          }
        ],
        ATTORNEY: [
          {
            inquiry_attorney: {
              title: 'Do you have an attorney?',
              type: 'select',
              options: ['Yes', 'No']
            },
            inquiry_attorney_practicename: {
              title: 'Attorney Practice Name',
              type: 'text',
              shouldShow: () => {
                if (
                  this.formData['inquiry_attorney'] &&
                  this.formData['inquiry_attorney'] === 'Yes'
                ) {
                  return true
                }
                return false
              }
            },
            inquiry_attorney_firstname: {
              title: 'Attorney First Name',
              type: 'text',
              shouldShow: () => {
                if (
                  this.formData['inquiry_attorney'] &&
                  this.formData['inquiry_attorney'] === 'Yes'
                ) {
                  return true
                }
                return false
              }
            },
            inquiry_attorney_lastname: {
              title: 'Attorney Last Name',
              type: 'text',
              shouldShow: () => {
                if (
                  this.formData['inquiry_attorney'] &&
                  this.formData['inquiry_attorney'] === 'Yes'
                ) {
                  return true
                }
                return false
              }
            },

            inquiry_attorney_website: {
              title: 'Attorney Website',
              type: 'text',
              shouldShow: () => {
                if (
                  this.formData['inquiry_attorney'] &&
                  this.formData['inquiry_attorney'] === 'Yes'
                ) {
                  return true
                }
                return false
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    // console.log('LANG:', this.activeLang)
  },
  methods: {
    updateLang(val) {
      this.activeLang = val
    },
    formFieldChanged(fieldID, val) {
      this.formData[fieldID] = val
      // console.log(fieldID, val)
    },
    submitForm() {
      const isValid = this.isFormValid()
      if (!isValid) {
        // console.log('Form Data is not valid!')
        return
      }
      this.JSONData = JSON.stringify(this.formData, null, 2)
    },
    isFormValid() {
      // TODO: Refactor formStructure with a better data structure.
      let isValid = true
      // eslint-disable-next-line no-unused-vars
      for (let [title, rows] of Object.entries(this.formStructure)) {
        for (let inputs of rows) {
          for (let [inputIndex, input] of Object.entries(inputs)) {
            input.hasError = false
            if (
              typeof input.shouldShow != 'undefined' &&
              input.shouldShow() === false
            ) {
              continue
            }
            if (!this.formData[inputIndex]) {
              input.hasError = true
              isValid = false
              // console.log("MISSING: ", inputIndex)
            } else if (input.isValid) {
              let errorMsg = input.isValid(this.formData[inputIndex])
              if (errorMsg) {
                input.hasError = true
                input.errorMsg = errorMsg
                isValid = false
              }
            }
          }
        }
      }
      return isValid
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lang-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#lang-select {
  width: 128px;
}

.container {
  display: flex;
  justify-content: center;
  align-content: flex-start;
}

.submit-button {
  background-color: #64b281;
  color: #fff;
  padding: 10px 0;
  border-radius: 5px;
  margin: 30px 25%;
  cursor: pointer;
}

.submit-button-text {
  pointer-events: none;
}

h1 {
  color: #9cbaf2;
}

label {
  color: #fff;
}
</style>
