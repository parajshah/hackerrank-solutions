const getMaxLessThanK = (n, k) => {
  let max = 0;
  for (let a = n; a > 0; a--) {
    for (let b = a - 1; b > 0; b--) {
      const aAndB = a & b;
      if (aAndB < k && aAndB > max) {
        max = aAndB;
      }
    }
  }
  return max;
};
