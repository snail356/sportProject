<script setup lang="ts">
import { onMounted, ref } from "vue";

import Bubbles from "@/components/Bubbles";
import DayCard from "@/components/DayCard";
import Icon from "@/components/Icon";
import axios from "axios";
const data = ref({
  calories: 150,
  excerciseTime: 0,
  weight: 50,
  streakDays: 3,
  sportsCategory: 0,
  fatigueIndex: 3.5, // 星數
  text: "",
});
const products = ref<any[]>([]);
onMounted(async () => {
  try {
    const response = await axios.get("/api/products");
    products.value = response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
<template>
  {{ products[0] }}
  <div>
    <DayCard :data="data"><Bubbles v-model="data.calories" /></DayCard>
  </div>
</template>
<style scoped>
.item {
  padding: 5px 0px;
}
</style>
