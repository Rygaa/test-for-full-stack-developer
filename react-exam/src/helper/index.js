export const getColorByPerimeter = (perimeter) => {
  if (perimeter <= 300) return "lightblue";
  if (perimeter <= 350 && perimeter > 300) return "blue";
  if (perimeter <= 750 && perimeter > 350) return "red";
  return "darkblue";
};
