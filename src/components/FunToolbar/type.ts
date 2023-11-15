export interface HeaderFilterType {
    label?: string;
    prop: string;
    searchType: SearchEnum;
    value: string | number;
    width?: number;
    placeholder?: string;
    dateRangeStartPlaceholder?: string;
    dateRangeEndPlaceholder?: string;
    options?: any; // 如果是select的时候必传
    optionsLabel?: string;
    optionsValue?: string;
    clearable?: boolean;
    filterable?: boolean;
}

export enum SearchEnum {
    SearchInput = 'input',
    SearchSelect = 'select',
    SearchDateRange = 'dateRange',
    SearchDate = 'date'
}
