<template>
    <div>
        <p>{{mag}}</p>
        <p>{{hello}}</p>
        <button @click="test">hell</button>
        <slot name = 'qwe'></slot>
    </div>
</template>

<script>

export default {
    name:'Dome',
    props:['mag','hello'],
    emits:['hell'],
    setup(props,context){
        // console.log(props,context.attrs);
        console.log(context.slots);
        function test(){
            context.emit('hell',666);//触发自定义事件
        }
        return {
            test
        }
    }
}
</script>