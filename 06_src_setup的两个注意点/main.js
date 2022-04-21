// 引入的不再是Vue的构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
// console.log(app);
app.mount('#app')

// setTimeout(()=>{
//     app.unmount('#app')
// },1000)

// vue2中挂载的步骤,在Vue3项目中不能使用Vue2的挂载方式。不兼容
// const vm = new Vue({
//     render: h => h(App)
// })
// vm.$mount('#app')