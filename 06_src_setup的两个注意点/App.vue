<template>
  <Dome @hell = "showHelloMsg" mag = "你好!" hello = "再见">
    <template v-slot:qwe>
      <span>你啊好啊</span>
    </template>
      <template v-slot:asb>
      <span>你啊好啊</span>
    </template>
  </Dome>
</template>

<script>

// import {reactive} from 'vue';
import Dome from './components/Dome'
export default {
  name: 'App',
  components:{Dome}
  // beforeCreate(){
  //   console.log("实例创建之前");
  // },,
  ,
  setup(){
    // console.log("setup执行之前")
    // let person = reactive({
    //     name :'刘永奇',
    //     age : 21,
    //   })

    function showHelloMsg(value){
      alert(`hell 参数${value}`);
    }
    return {
      showHelloMsg

    }
  }

}
</script>
