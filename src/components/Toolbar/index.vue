<template>
    <div style="width: 800px; height: 400px">
        <FunToolbar :form-list="formList" />
        <FunEditor v-model="ediitorValue" />
    </div>
</template>

<script setup lang="ts">
    import FunToolbar from '../FunToolbar/index.vue';
    import { HeaderFilterType, SearchEnum } from '@/components/FunToolbar/type';
    import { documentStatus, contentTypes, publishPlatforms } from './index';
    import FunEditor from '../FunEditor/index.vue';
    import { ref } from 'vue';
    // import { createApp } from 'vue';
    // const app = createApp({});

    // 筛选表单的数据
    const formList: HeaderFilterType[] = [
        {
            label: '发布平台',
            prop: 'publishPlatform',
            searchType: SearchEnum.SearchSelect,
            options: publishPlatforms,
            placeholder: '',
            width: 120,
            value: 4,
            optionsValue: 'code',
            optionsLabel: 'label'
        },
        {
            label: '类型',
            prop: 'types',
            searchType: SearchEnum.SearchSelect,
            options: contentTypes,
            placeholder: '类型',
            width: 120,
            value: 4,
            optionsValue: 'code',
            optionsLabel: 'label'
        },
        {
            label: '状态',
            prop: 'documentStatus',
            searchType: SearchEnum.SearchSelect,
            options: documentStatus,
            placeholder: '状态',
            width: 120,
            value: 4,
            optionsValue: 'code',
            optionsLabel: 'label'
        },
        {
            prop: 'title',
            searchType: SearchEnum.SearchInput,
            placeholder: '标题',
            width: 200,
            value: ''
        }
    ];
    const editorVal = ref('');
</script>

<style lang="scss" scoped></style>
