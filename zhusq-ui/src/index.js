import xAlert from './components/xAlert'

const components = [
  xAlert
]

const install = Vue => {
   components.map((component) => Vue.component(component.name, component))
}
export {
    install,
    xAlert
}