import { Ref } from "vue";

export interface ChartDatasets {
  label: string;
  backgroundColor: string;
  borderColor: string;
  data: number[];
  fill: boolean; // 如果需要填充顏色
}
