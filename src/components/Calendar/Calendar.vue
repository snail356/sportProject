<template>
  <div class="calendar">
    <CalendarHeader
      :year="year"
      :month="month"
      @changeYearMonth="handleYearMonthChange"
    />
    <CalendarGrid :year="year" :month="month" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CalendarHeader from "./CalendarHeader.vue";
import CalendarGrid from "./CalendarGrid.vue";

const year = ref(new Date().getFullYear());
const month = ref(new Date().getMonth() + 1);

const handleYearMonthChange = (newYear: number, newMonth: number) => {
  year.value = newYear;
  month.value = newMonth;
};
</script>

<style scoped>
.calendar {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>
