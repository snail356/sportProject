<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { getDaysInMonth } from "@/lib/common";
import Chart from "@/components/Chart";
import DateSelect from "@/components/DateSelect";

const props = defineProps({});
const dateMap: Map<string, string[] | null> = new Map();
const date = ref("");
const mode = ref(false); //true月，false周
const daysInMonth = getDaysInMonth(2024, 10);

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
const change = (dateString: string) => {
  console.log(dateString);
};
</script>
<template>
  <div>
    {{ date }}/{{ mode }}
    <a-month-picker style="width: 200px" v-model="date" @change="change" />
    <a-switch type="round" v-model="mode">
      <template #checked> 月 </template>
      <template #unchecked> 週 </template>
    </a-switch>
    <Chart :labels="labels" />
  </div>
</template>

<style scoped></style>
