function getDayName(dateString) {
  // Write your code here
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date(dateString).getUTCDay()];
}
