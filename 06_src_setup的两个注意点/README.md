2.ref函数的使用

3.reactive函数的使用

4.Vue3.0响应式
原理实现
    通过Proxy(代理)：拦截对象中任意属性的变化，包括：属性值的读写，属性的添加，属性的删除等
    通过Reflect(反射)：对原对象的属性进行操作。

6.setup的两点注意点
setup执行的时机
    在beforeCreate之前执行一次，this是undefined
setup的参数
    props:值为对象，包括：组件外部传递过来的，但是没有在props配置中声明的属性，相当于this.$attrs
    slots:收到的插槽内容，相当于this.$slots
    emit:分发自定义事件的函数，相当于this.$emit