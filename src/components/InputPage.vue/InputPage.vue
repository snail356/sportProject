<script setup lang="ts">
import { ref } from "vue";
import {
  Input,
  Space,
  Typography,
  Textarea,
  Rate,
  InputNumber,
  Row,
  Col,
} from "@arco-design/web-vue";
import Bubbles from "@/components/Bubbles";
const form = ref("");
const inputValue = ref("初始化");
</script>
<template>
  <div>
    <Space direction="vertical" size="medium">
      <Bubbles />
      <Space size="medium">
        <Typography>卡路里</Typography>
        <Input v-model="inputValue" placeholder="輸入一些文字" />
      </Space>
      <Space size="medium">
        <Typography>運動時間</Typography>
        <Input v-model="inputValue" placeholder="輸入一些文字" />
      </Space>
      <Space size="medium">
        <Typography>今日體重</Typography>
        <InputNumber
          v-model="value"
          placeholder="Please Enter"
          :min="10"
          :max="100"
        />
      </Space>
      <Space size="medium">
        <Typography>連勝天數</Typography>
        <Input v-model="inputValue" placeholder="輸入一些文字" />
      </Space>
      <Space size="medium">
        <Typography>運動類別</Typography>
        <Input v-model="inputValue" placeholder="輸入一些文字" />
      </Space>
      <Space size="medium">
        <Typography>疲憊指數</Typography>
        <Rate :default-value="2.5" allow-half />
      </Space>
      <Textarea placeholder="Please enter something" allow-clear />
    </Space>
  </div>
</template>
<style scoped></style>
