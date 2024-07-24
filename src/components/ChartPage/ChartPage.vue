<script setup lang="ts">
import { defineProps, ref } from "vue";
import Chart from "@/components/Chart";
import DateSelect from "@/components/DateSelect";

const props = defineProps({});
const date = ref("");
const mode = ref("");
const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
</script>
<template>
  <div>
    {{ date }}/{{ mode }}
    <a-month-picker style="width: 200px" v-model="date" />
    <a-switch type="round" v-model="mode">
      <template #checked> 月 </template>
      <template #unchecked> 週 </template>
    </a-switch>
    <Chart :labels="labels" />
  </div>
</template>

<style scoped></style>
