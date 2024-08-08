<script setup lang="ts">
import { ref, Ref } from "vue";
import {
  Input,
  Typography,
  Textarea,
  Rate,
  InputNumber,
} from "@arco-design/web-vue";
import { DayData } from "@/components/interface";
import DayCard from "@/components/DayCard";
import Icon from "@/components/Icon";
const data: Ref<DayData> = ref({
  calories: 0,
  excerciseTime: 0,
  weight: 0,
  streakDays: 0,
  sportsCategory: 0,
  fatigueIndex: 0,
  text: "",
});
const list = [
  {
    guid: "1",
    calories: 0,
    excerciseTime: 0,
    weight: 0,
    streakDays: 0,
    sportsCategory: 0,
    fatigueIndex: 0,
    text: "",
  },
  {
    guid: "2",
    calories: 0,
    excerciseTime: 0,
    weight: 0,
    streakDays: 0,
    sportsCategory: 0,
    fatigueIndex: 0,
    text: "",
  },
  {
    guid: "3",
    calories: 0,
    excerciseTime: 0,
    weight: 0,
    streakDays: 0,
    sportsCategory: 0,
    fatigueIndex: 0,
    text: "",
  },
];
</script>
<template>
  <div>
    <a-scrollbar style="height: 700px; overflow: auto">
      <DayCard
        v-for="(item, key) in list"
        :key="key"
        :disabled="true"
        :data="item"
        style="margin: 20px 15px"
      >
      </DayCard>
    </a-scrollbar>
  </div>
</template>
<style scoped>
.item {
  padding: 5px 0px;
}
</style>
