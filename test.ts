const solution2 = (A: number[], budget: number, cucumberCount: number) => {
  const sortedA = A.sort((a, b) => b - a);
  let sum = 0;
  for (let i = cucumberCount; i > 0; i--) {
    sum += sortedA[i];
  }
  if (sum > budget) {
    return "NO";
  }
  return "YES";
};

const solution1 = (A: any) => {
  const MAP: Record<number, number> = {};
  const N = A.length;
  let currentTop = -1;
  for (let i = 0; i < N; i++) {
    MAP[A[i]] = MAP[A[i]] || 0;
    MAP[A[i]]++;
    if (currentTop === -1) {
      currentTop = A[i];
    }
    currentTop = MAP[A[i]] > MAP[currentTop] ? A[i] : currentTop;
  }
  console.log(MAP, currentTop);
};
