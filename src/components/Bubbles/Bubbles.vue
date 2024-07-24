<script setup lang="ts">
import { log } from "console";
import { computed, ref } from "vue";

const emit = defineEmits(["updated", "update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
let timer: number | null = null;
let isMouseDown = false;
const isExploded = ref(false);

const addCount = (e: MouseEvent) => {
  isMouseDown = true;
  timer = window.setTimeout(() => {
    value.value += 100;
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
@keyframes border-rotate {
  0% {
    border-color: #fded8f; /* 深黃色 */
  }
  25% {
    border-color: #f5dc4e; /* 馬卡龍黃 */
  }
  50% {
    border-color: #fded8f; /* 深黃色 */
  }
  75% {
    border-color: #f5dc4e; /* 馬卡龍黃 */
  }
  100% {
    border-color: #fded8f; /* 深黃色 */
  }
}
.circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f5dc4e; /* 馬卡龍黃 */
  border: solid 30px #fded8f;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #fffb00;
  font-size: 2em;
  animation: border-rotate 4s linear infinite;
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
  background-color: #f1f0ae;
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
