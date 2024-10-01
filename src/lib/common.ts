import { log } from "console";

const getDaysInMonth = (year: number, month: number): string[] => {
  const days: string[] = [];
  const lastDay = new Date(year, month, 0).getDate(); // 取得該月份的最後一天

  for (let day = 1; day <= lastDay; day++) {
    const date = new Date(year, month - 1, day);
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    days.push(formattedDate); // 格式化為 YYYY-MM-DD
  }

  return days;
};

export { getDaysInMonth };
