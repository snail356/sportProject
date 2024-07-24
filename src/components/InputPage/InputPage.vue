<script setup lang="ts">
import { ref } from "vue";
import {
  Input,
  Space,
  Typography,
  Textarea,
  Rate,
  InputNumber,
} from "@arco-design/web-vue";
import Bubbles from "@/components/Bubbles";
import Icon from "@/components/Icon";
const data = ref({
  calories: 0,
  excerciseTime: 0,
  weight: 0,
  streakDays: 0,
  sportsCategory: 0,
  fatigueIndex: 0,
  text: "",
});
</script>
<template>
  <div>
    <a-space direction="vertical" size="large" align="center">
      <Bubbles v-model="data.calories" />
      <a-list size="small">
        <a-list-item>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>卡路里</Typography>
            </a-col>
            <a-col :span="12">
              <InputNumber
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
              <Input v-model="data.excerciseTime" placeholder="輸入一些文字" />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>今日體重</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <InputNumber
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
              <Input v-model="data.sportsCategory" placeholder="輸入一些文字" />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" class="item">
              <Typography>疲憊指數</Typography>
            </a-col>
            <a-col :span="12" class="item">
              <Rate
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
