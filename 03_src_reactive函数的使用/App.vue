<template>
  <h1>个人信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>职业：{{person.job.type}}</h2>
  <h2>{{person.job.a.b.c}}</h2>
  <h2>工作薪水：{{person.job.salary}}</h2>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import {reactive} from 'vue';
export default {
  name: 'App',
  setup(){
    // let name = ref('刘永奇');
    // let age = ref(21);
    // let job = reactive({
    //   type:'前端工程师',
    //   salary:'30',
    //   a:{
    //     b:{
    //       c:666,
    //     }
    //   }
    // })

    let person = reactive({
        name :'刘永奇',
        age : 21,
        job : {
          type:'前端工程师',
          salary:'30',
          a:{
            b:{
              c:666,
            }
          }
        }
      })
    // 方法
    function changeInfo(){
        // name.value = '李四';
        // age.value = 18 ;
        // job.a.b.c = 999;

        person.name = '李四';
        person.age = 18 ;
        person.job.a.b.c = 999;
        console.log(person.job);
    }
    return {
      person,
      changeInfo
    }
  }

}
</script>
