export const generateRandomArray = (length, max) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * max);
    arr.push(randomNum);
  }
  return arr;
};
