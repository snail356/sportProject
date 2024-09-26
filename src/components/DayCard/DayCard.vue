<script setup lang="ts">
import { computed, PropType } from "vue";
import {
  Input,
  Typography,
  Textarea,
  Rate,
  InputNumber,
} from "@arco-design/web-vue";
import { DayData } from "@/components/interface";
import Icon from "@/components/Icon";

const props = defineProps({
  disabled: {
    type: Boolean,
  },
  modelValue: {
    type: Object as PropType<DayData>,
  },
});
const emit = defineEmits(["update:modelValue"]);
const data = computed({
  get: () =>
    props.modelValue ?? {
      calories: 0,
      excerciseTime: " 0",
      weight: 50,
      streakDays: 3,
      sportsCategory: 0,
      fatigueIndex: 3.5, // 星數
      text: "",
    },
  set: (newValue) => {
    emit("update:modelValue", newValue);
  },
});
</script>
<template>
  <div>
    <a-space direction="vertical" size="large" align="center">
      <slot></slot>
      <a-list size="small">
        <a-list-item>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>卡路里</Typography>
            </a-col>
            <a-col :span="12">
              <span v-if="props.disabled">{{ data.calories }}</span>
              <InputNumber
                v-else
                class="item"
                v-model="data.calories"
                :step="100"
                mode="button"
                placeholder="Please Enter"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>運動時間</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <span v-if="props.disabled">{{ data.calories }}</span>
              <Input
                v-else
                v-model="data.excerciseTime"
                placeholder="輸入一些文字"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>今日體重</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <span v-if="props.disabled">{{ data.weight }}</span>
              <InputNumber
                v-else
                v-model="data.weight"
                mode="button"
                placeholder="Please Enter"
                :min="10"
                :max="100"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>連勝天數</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <Icon iconName="icon-face-smile-fill" />
              {{ data.streakDays }}
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>運動類別</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <span v-if="props.disabled">{{ data.calories }}</span>
              <Input
                v-else
                v-model="data.sportsCategory"
                placeholder="輸入一些文字"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>疲憊指數</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <Rate
                :disabled="props.disabled"
                :default-value="2.5"
                allow-half
                v-model="data.fatigueIndex"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>心得</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <Textarea
                placeholder="Please enter something"
                allow-clear
                v-model="data.text"
              />
            </a-col>
          </a-row>
        </a-list-item>
      </a-list>
    </a-space>
  </div>
</template>
<style scoped>
.item {
  padding: 5px 0px;
}
</style>
