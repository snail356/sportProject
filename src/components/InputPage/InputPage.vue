<script setup lang="ts">
import { ref } from "vue";

import Bubbles from "@/components/Bubbles";
import DayCard from "@/components/DayCard";
import Icon from "@/components/Icon";
const data = ref({
  calories: 150,
  excerciseTime: 0,
  weight: 50,
  streakDays: 3,
  sportsCategory: 0,
  fatigueIndex: 3.5,
  text: "",
});
</script>
<template>
  <div>
    <DayCard :data="data"><Bubbles v-model="data.calories" /></DayCard>
  </div>
</template>
<style scoped>
.item {
  padding: 5px 0px;
}
</style>
