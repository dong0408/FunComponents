<template>
    <h2> 这里是登录页面 </h2>
    <br />
    <router-link to="/">点击跳转至首页</router-link>
    <br /><br />
    <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
    <my-component v-model="form"></my-component>
</template>
<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import MyComponent from './myComponent.vue';

    export default defineComponent({
        name: 'LoginPage',
        components: { MyComponent },
        // 声明单个输入框
        // setup() {
        //     const msg = ref('hello');
        //     return {
        //         msg
        //     };
        // }
        setup() {
            const form = ref({
                name: '张三',
                age: 18,
                sex: 'man'
            });
            return {
                form
            };
        }
    });
</script>
