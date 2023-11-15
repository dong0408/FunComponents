<template>
    <div class="wangeditor">
        <Toolbar
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
            style="border-bottom: 1px solid #ccc"
        />
        <Editor
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="mode"
            style="height: 500px; overflow-y: hidden"
            @onCreated="handleCreated"
            @onChange="handleChange"
        />
    </div>
</template>

<script setup lang="ts">
    import '@wangeditor/editor/dist/css/style.css';
    import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
    import { onBeforeUnmount, ref, shallowRef, onMounted, defineEmits, watchEffect } from 'vue';
    // defineOptions({
    //     name: 'GsEditor'
    // });

    // 参数
    const props = defineProps({
        modelValue: {
            type: String,
            default: ''
        }
    });
    // 事件
    const emit = defineEmits(['update:modelValue']);
    // 默认的editor 工具栏
    const mode = 'default';
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();
    // 内容 HTML
    const valueHtml = ref('');

    watchEffect(() => {
        valueHtml.value = props.value;
    });

    const toolbarConfig: any = { excludeKeys: 'fullScreen' };
    const editorConfig = { placeholder: '请输入内容...' };

    const handleCreated = (editor) => {
        // 记录 editor 实例，重要！
        editorRef.value = editor;
    };

    const handleChange = (editor) => {
        emit('update:modelValue', editor.getHtml());
    };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value;
        if (editor == null) return;
        editor.destroy();
    });
</script>

<style lang="scss" scoped></style>
