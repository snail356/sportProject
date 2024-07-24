<script setup lang="ts">
import { defineProps, PropType, ref } from "vue";
import { Select } from "@arco-design/web-vue";

const props = defineProps({
  mode: {
    type: String as PropType<"month" | "year">,
  },
});

const value = ref();
const options = [
  {
    value: "beijing",
    label: "Beijing",
    other: "extra",
  },
  {
    value: "shanghai",
    label: "Shanghai",
    other: "extra",
  },
  {
    value: "guangzhou",
    label: "Guangzhou",
    other: "extra",
  },
  {
    value: "chengdu",
    label: "Chengdu",
    other: "extra",
  },
];
// 獲取當前月份的函數
const getCurrentMonth = () => {
  const now = new Date();
  const monthIndex = now.getMonth(); // 取得月份（0-11）
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex]; // 返回當前月份的名稱
};
// 創建一個反應式變量來存儲當前月份
const currentMonth = ref(getCurrentMonth());

// 獲取指定月份天數的函數
const getDaysInMonth = (year: number, month: number) => {
  // 月份從0開始（0代表一月，11代表十二月）
  return new Date(year, month + 1, 0).getDate();
};

// 設定當前年份和月份
const year = ref(new Date().getFullYear());
const month = ref(new Date().getMonth()); // 當前月份（0-11）

// 獲取當前月份的天數
const daysInCurrentMonth = ref(getDaysInMonth(year.value, month.value));

// 更新指定月份的天數
const updateDaysInMonth = (newYear: number, newMonth: number) => {
  daysInCurrentMonth.value = getDaysInMonth(newYear, newMonth);
};
</script>
<template>
  <Select v-model="value" :options="options" />
</template>

<style scoped></style>
