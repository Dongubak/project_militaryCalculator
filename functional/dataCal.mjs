function dateCal() {
  const arr = [...arguments];
  const timeCal = arr[0].getTime() - arr[1].getTime();
  const MILLITODAY = 1000 * 60 * 60 * 24;
  return timeCal / MILLITODAY;
}

export default dateCal;
