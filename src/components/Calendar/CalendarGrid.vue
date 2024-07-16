<script setup lang="ts">
import { defineProps, computed, ref } from "vue";

const props = defineProps<{ year: number; month: number; pickDate: Array }>();

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const daysInMonth = computed(() => {
  const date = new Date(props.year, props.month, 0);
  return Array.from({ length: date.getDate() }, (_, i) => i + 1);
});

const leadingEmptyDays = computed(() => {
  const firstDayOfMonth = new Date(props.year, props.month - 1, 1).getDay();
  return Array.from({ length: firstDayOfMonth }, (_, i) => i + 1);
});
const pickDate = ref(["2024/7/12", "2024/7/15"]);
const handlePickDate = computed(() => {
  return pickDate.value.map((date: string) => date.split("/")[2]);
});
const bindClass = (day: string) => {
  return { "date-pick": handlePickDate.value.includes(day.toString()) };
};

const getDay = (e: any) => {
  console.log("e", e);
};
</script>

<template>
  {{ handlePickDate }}
  {{ year }}/{{ month }}
  <div class="calendar-grid">
    <div class="calendar-grid-header">
      <div
        v-for="day in daysOfWeek"
        :key="day"
        class="calendar-grid-header-cell"
      >
        {{ day }}
      </div>
    </div>
    <div class="calendar-grid-body">
      <div
        v-for="day in leadingEmptyDays"
        :key="'leading-' + day"
        class="calendar-grid-cell empty"
      ></div>
      <div
        v-for="day in daysInMonth"
        :key="'day-' + day"
        class="calendar-grid-cell"
        :class="bindClass(day)"
        @click="getDay(day)"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.calendar-grid-header {
  display: contents;
}

.calendar-grid-header-cell,
.calendar-grid-cell {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
}

.date-pick::after {
  content: "";
  background-color: #6666661e;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 4px;
  left: 10px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.empty {
  background-color: #f5f5f5;
}

.calendar-grid-body {
  display: contents;
}
</style>
