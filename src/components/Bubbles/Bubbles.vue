<script setup lang="ts">
import { ref } from "vue";

const value = ref(0);
let timer: number | null = null;
let isMouseDown = false;
const isExploded = ref(false);

const addCount = (e: MouseEvent) => {
  isMouseDown = true;
  timer = window.setTimeout(() => {
    value.value += 200;
    isExploded.value = true;
    setTimeout(() => {
      isExploded.value = false;
    }, 500); // 爆破效果持續時間
    isMouseDown = false;
    timer = null;
  }, 1000);
};

const cancelCount = () => {
  if (isMouseDown && timer) {
    clearTimeout(timer);
    timer = null;
  }
  isMouseDown = false;
};
</script>

<template>
  <div
    class="circle parent"
    @mousedown="addCount"
    @mouseup="cancelCount"
    @mouseleave="cancelCount"
  >
    <div class="progress-circle" :class="{ exploded: isExploded }"></div>
    <span>{{ value }}</span>
  </div>
</template>

<style scoped>
.circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f7d5df;
  border: solid 3px #f38eac;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #f38eac;
  font-size: 2em;
}

.circle span {
  position: absolute;
  z-index: 10;
}

.progress-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f38eac;
  transform: translateY(100%);
  transition: transform 1s linear;
  pointer-events: none;
}

.circle:active .progress-circle {
  transform: translateY(0);
}

.progress-circle.exploded {
  transition: none;
  transform: none;
  animation: explode 0.5s forwards;
}

@keyframes explode {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(3);
  }
}

.parent {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
</style>
