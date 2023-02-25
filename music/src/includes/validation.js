import { Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate'
import { required, email, min, max, confirmed, length } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)

    defineRule('required', required)
  }
}
