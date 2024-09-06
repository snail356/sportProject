// src/mock/productMock.ts
import Mock from "mockjs";
const Random = Mock.Random;

// 模擬商品列表
const productList = Mock.mock({
  "products|10": [
    {
      "id|+1": 1,
      name: "@ctitle(5, 10)", // 隨機生成 5 到 10 個字的商品名稱
      "calories|10-100.2": 1, // 隨機生成價格，兩位小數
      "excerciseTime|10-100.2": 1, // 隨機生成價格，兩位小數
      "weight|10-100.1": 1, // 體重
      "streakDays|0-10": 1, // 連勝天數
      sportsCategory: ["拳擊", "跑步", "舉重", "瑜珈"], // 運動種類，兩位小數
      "fatigueIndex|0-5.1": 1, // 疲憊指數，兩位小數
      text: Random.sentence(3, 5), // 隨機生成價格，兩位小數
    },
  ],
});

// 模擬 API 端點
Mock.mock("/api/products", "get", () => {
  return {
    status: 200,
    message: "Success",
    data: productList.products,
  };
});

Mock.mock(/\/api\/products\/\d+/, "get", (options: any) => {
  const id = parseInt(options.url.match(/\d+$/)[0]);
  const product = productList.products.find((item: any) => item.id === id);
  return {
    status: 200,
    message: "Success",
    data: product,
  };
});
