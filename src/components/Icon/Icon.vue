<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <component :is="props.iconName" />
</template>

<style scoped></style>
