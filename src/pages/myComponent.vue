<template>
    <div style="width: 300px; display: flex">
        <!-- <div>子组件</div>
        <el-input v-model="msg"></el-input> -->
        <el-input v-model="form.name"></el-input>
        <el-input v-model="form.age"></el-input>
        <el-input v-model="form.sex"></el-input>
    </div>
</template>

<script lang="ts">
    import { useVModel } from '@vueuse/core';
    import { computed, defineComponent, defineProps, defineEmits } from 'vue';

    export default defineComponent({
        name: 'my-component',
        props: {
            modelValue: {
                type: Object,
                default: () => {}
            }
        },
        // 监听多个对象
        // setup(props, { emit }) {
        //     const name = computed({
        //         // getter
        //         get() {
        //             return props.modelValue.name;
        //         },
        //         // setter
        //         set(newValue) {
        //             console.log(newValue, 'name');

        //             emit('update:modelValue', { ...props.modelValue, name: newValue });
        //         }
        //     });
        //     const age = computed({
        //         // getter
        //         get() {
        //             return props.modelValue.age;
        //         },
        //         // setter
        //         set(newValue) {
        //             console.log(newValue, 'age');

        //             emit('update:modelValue', { ...props.modelValue, age: newValue });
        //         }
        //     });
        //     const sex = computed({
        //         // getter
        //         get() {
        //             return props.modelValue.sex;
        //         },
        //         // setter
        //         set(newValue) {
        //             console.log(newValue, 'sex');

        //             emit('update:modelValue', { ...props.modelValue, sex: newValue });
        //         }
        //     });
        //     return {
        //         name,
        //         age,
        //         sex
        //     };
        // }
        setup(props, { emit }) {
            // const form = computed({
            //     get() {
            //         return new Proxy(props.modelValue, {
            //             get(target, key) {
            //                 return Reflect.get(target, key);
            //             },
            //             set(target, key, value, receiver) {
            //                 emit('update:modelValue', {
            //                     ...target,
            //                     [key]: value
            //                 });
            //                 return true;
            //             }
            //         });
            //     },
            //     set(newValue) {
            //         emit('update:modelValue', newValue);
            //     }
            // });
            const form = useVModel(props, 'modelValue', emit);
            return { form };
        }
    });
</script>
