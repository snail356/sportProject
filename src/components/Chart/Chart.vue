<script setup lang="ts">
import { ref, onMounted, PropType, watch } from "vue";
import { Line } from "vue-chartjs";
import Chart from "chart.js/auto";
import { ChartDatasets } from "@/components/interface";

const props = defineProps({
  labels: {
    type: Array as PropType<any[]>,
  },
  datasets: {
    type: Array as PropType<ChartDatasets[]>,
  },
  isShowTitle: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
  },
});

// 創建數據對象
const dataObj = ref({
  labels: props.labels,
  datasets: [
    {
      label: "運動時間",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      data: [10, 20, 30, 50, 40, 30, 10],
      fill: true, // 如果需要填充顏色
    },
  ],
});

// 設定圖表配置
const setObj = ref({
  type: "line", // 設定為 line chart
  data: dataObj,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Superhero Attendance",
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  },
});
let chartInstance: Chart | null = null; // 儲存圖表實例
// 繪製圖表
function drawChart() {
  const ctx = document.getElementById("heroChart") as HTMLCanvasElement;
  if (ctx) {
    // 如果已經有舊的圖表，先銷毀它
    if (chartInstance) {
      chartInstance.destroy();
    }

    // 創建新的圖表實例
    chartInstance = new Chart(ctx, setObj.value as any);
  }
}

watch(
  () => props.labels,
  (curr: any) => {
    dataObj.value.labels = curr;
    drawChart();
  },
  {
    deep: true,
  }
);
onMounted(() => {
  drawChart();
});
</script>

<template>
  <div class="card-content-image">
    <canvas id="heroChart" width="100%" height="380"></canvas>
  </div>
</template>

<style scoped>
.card-content-image {
  width: 500px;
  height: 400px;
}

@media (max-width: 992px) {
  .card-content-image {
    width: 300px;
    height: 200px;
    border: 1px solid red;
  }
}
</style>
