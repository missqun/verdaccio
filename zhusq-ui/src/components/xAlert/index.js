import xAlert from './x-alert.vue'

const componentName = 'xAlert'

const install = Vue => {
  Vue.component(componentName, xAlert)
}

export default {
  install,
  name: componentName
}
