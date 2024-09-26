<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

import Bubbles from "@/components/Bubbles";
import DayCard from "@/components/DayCard";
import axios from "axios";
const state = reactive({
  data: {
    calories: 105,
    excerciseTime: 0,
    weight: 50,
    streakDays: 3,
    sportsCategory: 0,
    fatigueIndex: 3.5, // 星數
    text: "",
  },
});
const getData = async () => {
  try {
    const response = await axios.get("/api/products");

    state.data = response.data.data[0];
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
const set = () => {
  state.data = {
    calories: 99999,
    excerciseTime: 0,
    weight: 50,
    streakDays: 3,
    sportsCategory: 0,
    fatigueIndex: 3.5, // 星數
    text: "",
  };
};
getData();
</script>
<template>
  <div>
    <DayCard v-model="state.data"
      ><Bubbles v-model="state.data.calories"
    /></DayCard>
  </div>
</template>
<style scoped>
.item {
  padding: 5px 0px;
}
</style>
