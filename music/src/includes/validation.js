import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('password_missmatched', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `${ctx.field} is required`,
          min: `${ctx.field} must be at least ... characters`,
          max: `${ctx.field} cannot exceed ... characters`,
          alpha_spaces: `${ctx.field} may only contain alphabetic characters and spaces`,
          email: `${ctx.field} must be a valid email`,
          min_value: `${ctx.field} must be at least ...`,
          max_value: `${ctx.field} cannot exceed ...`,
          confirmed: `${ctx.field} confirmation does not match`,
          excluded: `${ctx.field} is not a valid option`,
          country_excluded: `Due 2 restrictions, we can't accept users from this country`,
          password_missmatched: `Password don't match`,
          tos: `You must accept the terms and conditions`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The ${ctx.field} field is invalid`
        return message
      },

      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
