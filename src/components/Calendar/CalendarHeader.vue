<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{ year: number; month: number }>();
const emit = defineEmits<{
  (e: "changeYearMonth", year: number, month: number): void;
}>();

const monthString = computed(() => String(props.month).padStart(2, "0"));

const prevMonth = () => {
  let newYear = props.year;
  let newMonth = props.month - 1;
  if (newMonth < 1) {
    newMonth = 12;
    newYear--;
  }
  emit("changeYearMonth", newYear, newMonth);
};

const nextMonth = () => {
  let newYear = props.year;
  let newMonth = props.month + 1;
  if (newMonth > 12) {
    newMonth = 1;
    newYear++;
  }
  emit("changeYearMonth", newYear, newMonth);
};
</script>

<template>
  <div class="calendar-header">
    <button @click="prevMonth">Previous</button>
    <span>{{ year }} - {{ monthString }}</span>
    <button @click="nextMonth">Next</button>
  </div>
</template>

<style scoped>
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
