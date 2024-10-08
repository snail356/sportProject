<script setup lang="ts">
import { computed, defineProps, Ref, ref } from "vue";
import { getDaysInMonth } from "@/lib/common";
import Chart from "@/components/Chart";
import DateSelect from "@/components/DateSelect";

const props = defineProps({});
const dateMap: Map<string, string[] | null> = new Map();
const date = ref("");
const mode = ref(false); //true月，false周
const daysInMonth = ref([]) as Ref<string[]>;

const labels = computed(() => {
  const result = mode.value
    ? daysInMonth
    : [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
  return result;
});

const init = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear(); // 獲取當前年份
  const month = currentDate.getMonth() + 1; // 獲取當前月份，getMonth() 從 0 開始，需加 1
  daysInMonth.value = getDaysInMonth(year, month);
};
const change = (dateString: string) => {
  const year = dateString.split("-")[0];
  const month = dateString.split("-")[1];
  daysInMonth.value = getDaysInMonth(Number(year), Number(month));
};

init();
</script>
<template>
  <div>
    <a-month-picker style="width: 200px" v-model="date" @change="change" />
    <a-switch type="round" v-model="mode">
      <template #checked> 月 </template>
      <template #unchecked> 週 </template>
    </a-switch>
    <Chart :labels="labels" />
  </div>
</template>

<style scoped></style>
