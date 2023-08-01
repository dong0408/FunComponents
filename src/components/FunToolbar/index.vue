<template>
    <div ref="toolbarFilterRef" class="toolbar">
        <!-- 左侧的筛选项 -->
        <div v-for="searchItem in formList" :key="searchItem.prop" class="toolbarItem">
            <!-- 筛选框标题 -->
            <span v-if="searchItem?.label" class="search-title">{{ searchItem.label }}</span>
            <el-input
                v-if="searchItem.searchType === SearchEnum.SearchInput"
                v-model="form[searchItem.prop]"
                :placeholder="searchItem?.placeholder"
                :clearable="searchItem.clearable ? searchItem.clearable : true"
                :style="{ width: `${searchItem.width || 200}px !important` }"
            />
            <!-- 下拉框 -->
            <el-select
                v-if="searchItem.searchType === SearchEnum.SearchSelect"
                v-model="form[searchItem.prop]"
                :placeholder="searchItem?.placeholder"
                :clearable="searchItem.clearable ? searchItem.clearable : true"
                :filterable="searchItem.filterable"
                :style="{ width: `${searchItem.width || 200}px !important` }"
            >
                <el-option
                    v-for="item in searchItem.options"
                    :label="item[`${searchItem.optionsLabel || 'label'}`]"
                    :value="item[`${searchItem.optionsValue || 'value'}`]"
                ></el-option>
            </el-select>
            <!-- 日期选择器 -->
            <el-date-picker
                v-if="searchItem.searchType === SearchEnum.SearchDate"
                v-model="form[searchItem.prop]"
                type="date"
                :placeholder="searchItem?.placeholder"
                :clearable="searchItem.clearable ? searchItem.clearable : true"
                :style="{ width: `${searchItem.width || 200}px !important` }"
            ></el-date-picker>
            <!-- 时间范围选择器 -->
            <el-date-picker
                v-if="searchItem.searchType === SearchEnum.SearchDateRange"
                v-model="form[searchItem.prop]"
                :style="{ width: `${searchItem.width || 240}px !important` }"
                type="daterange"
                range-separator="-"
                :start-placeholder="searchItem?.dateRangeStartPlaceholder"
                :end-placeholder="searchItem?.dateRangeEndPlaceholder"
                :clearable="searchItem.clearable ? searchItem.clearable : true"
            ></el-date-picker>
        </div>
        <!-- 右侧按钮 -->
    </div>
</template>
<script lang="ts" setup>
    import { ref, reactive, defineEmits, watchEffect } from 'vue';
    import { HeaderFilterType, SearchEnum } from './type';
    const emit = defineEmits(['search']);

    const props = defineProps({
        formList: {
            type: [Object, Array],
            default: () => []
        },
        formData: {
            type: Object,
            require: true
        }
    });
    //查询参数
    const form = reactive({});
    //监听传参数据，设置参数
    watchEffect(() => {
        props.formList.map((item) => {
            form[item.prop] = item.value || '';
        });
    });

    const toolbarFilterRef = ref<HTMLDivElement | null>();
    const getOffsetHeight = () => {
        return toolbarFilterRef.value ? toolbarFilterRef.value : 0;
    };
    const onSearch = () => {
        emit('Search', form);
    };
    // 导出外部可用的方法
    defineExpose({
        getOffsetHeight
    });
</script>
<style lang="scss" scoped>
    .toolbar {
        display: flex;
    }
    .search-title {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #8690a1;
        margin-right: 5px;
        width: 70px;
    }
    .toolbarItem {
        margin: 0 20px;
        display: flex;
    }
</style>
