<script setup lang="ts">
import InputPage from "@/components/InputPage";
import Calendar from "@/components/Calendar";
import ChartPage from "@/components/ChartPage";
import DynamicWall from "@/components/DynamicWall";
import Icon from "@/components/Icon";
import { useStore } from "@/store/useStore";
import { computed, onMounted, ref } from "vue";
import axios from "axios";

const store = useStore();
const component = computed(() => {
  switch (store.useComponent) {
    case "InputPage":
      return InputPage;
    case "Calendar":
      return Calendar;
    case "ChartPage":
      return ChartPage;
    case "DynamicWall":
      return DynamicWall;
    default:
      return InputPage;
  }
});
const triggerComponent = (name: string) => {
  store.setConponent(name);
};
</script>
<template>
  <a-layout style="height: 800px">
    <a-layout-content>
      <div class="container">
        <component :is="component" />
      </div>
    </a-layout-content>
    <a-layout-footer>
      <a-space size="large">
        <Icon
          iconName="icon-apps"
          size="30px"
          class="icon"
          :strokeWidth="3"
          @click="triggerComponent('ChartPage')"
        />
        <Icon
          iconName="icon-plus-circle-fill"
          size="30px"
          class="icon"
          :strokeWidth="3"
          @click="triggerComponent('InputPage')"
        />
        <Icon
          iconName="icon-calendar"
          size="30px"
          class="icon"
          :strokeWidth="3"
          @click="triggerComponent('Calendar')"
        />
      </a-space>
    </a-layout-footer>
  </a-layout>

  <!-- <Calendar /> -->
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.icon {
  padding: 20px;
}
</style>
