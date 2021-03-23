import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.lang = {
  ['EN']: {
    ['CONTACT INFORMATION']: 'CONTACT INFORMATION',
    ['INQUIRY DATA']: 'INQUIRY DATA',
    ['WITNESS']: 'WITNESS',
    ['ATTORNEY']: 'ATTORNEY',
    ['Inquiry Form']: 'Inquiry Form',
    ['First Name']: 'First Name',
    ['Last Name']: 'Last Name',
    ['Address']: 'Address',
    ['State']: 'State',
    ['City']: 'City',
    ['Zip Code']: 'Zip Code',
    ['Phone Number']: 'Phone Number',
    ['Email']: 'Email',
    ['Salutation']: 'Salutation',
    ['Who?']: 'Who?',
    ['What?']: 'What?',
    ['When?']: 'When?',
    ['Do you have a witness?']: 'Do you have a witness?',
    ['Do you have an attorney?']: 'Do you have an attorney?',
    ['Language']: 'Language',
    ['Submit Form']: 'Submit Form',
    ['Witness First Name']: 'Witness First Name',
    ['Witness Last Name']: 'Witness Last Name',
    ['Witness Phone Number']: 'Witness Phone Number',
    ['Attorney First Name']: 'Attorney First Name',
    ['Attorney Last Name']: 'Attorney Last Name',
    ['Attorney Practice Name']: 'Attorney Practice Name',
    ['Attorney Website']: 'Attorney Website',
    ['This field is required.']: 'This field is required.',
    ['Yes']: 'Yes',
    ['Please enter a valid email address.']:
      'Please enter a valid email address.',
    ['Please enter a valid phone number.']:
      'Please enter a valid phone number.',
    ['Please enter a valid zip code.']: 'Please enter a valid zip code.'
  },
  ['ES']: {
    ['CONTACT INFORMATION']: 'INFORMACIÓN DEL CONTACTO',
    ['INQUIRY DATA']: 'DATOS DE CONSULTA',
    ['WITNESS']: 'TESTIGO',
    ['ATTORNEY']: 'ABOGADO',
    ['Inquiry Form']: 'Formulario De Consulta',
    ['First Name']: 'Nombre de pila',
    ['Last Name']: 'Apellido',
    ['Address']: 'Dirección',
    ['State']: 'Expresar',
    ['City']: 'Ciudad',
    ['Zip Code']: 'Código postal',
    ['Phone Number']: 'Número de teléfono',
    ['Email']: 'Correo electrónico',
    ['Salutation']: 'Saludo',
    ['Who?']: '¿Quién?',
    ['What?']: '¿Qué?',
    ['When?']: '¿Cuándo??',
    ['Do you have a witness?']: '¿Tienes un testigo?',
    ['Do you have an attorney?']: '¿Tiene un abogado?',
    ['Language']: 'Idioma',
    ['Submit Form']: 'Enviar formulario',
    ['Witness First Name']: 'Nombre del testigo',
    ['Witness Last Name']: 'Apellido del testigo',
    ['Witness Phone Number']: 'Número de teléfono del testigo',
    ['Attorney First Name']: 'Nombre del abogado',
    ['Attorney Last Name']: 'Apellido del abogado',
    ['Attorney Practice Name']: 'Nombre de la práctica del abogado',
    ['Attorney Website']: 'Sitio web del abogado',
    ['This field is required.']: 'Este campo es requerido.',
    ['Yes']: 'Sí',
    ['Please enter a valid email address.']:
      'Por favor, introduce una dirección de correo electrónico válida.',
    ['Please enter a valid phone number.']:
      'Por favor ingrese un número de teléfono válido.',
    ['Please enter a valid zip code.']:
      'Por favor ingrese un código postal válido.'
  }
}

app.mount('#app')
