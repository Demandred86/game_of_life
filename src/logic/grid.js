//Creates Random Interval

const MIN = 15;
const MAX = 50;

function randomIntFromInterval() {
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

function generateRandomPosition(rowNum, colNum) {
  const newRandomPosition = [];
  for (let i = 0; i < rowNum; i++) {
    newRandomPosition.push(
      Array.from(Array(colNum), () => Math.floor(Math.random() * 2))
    );
  }
  return newRandomPosition;
}

export default randomIntFromInterval;
export { generateRandomPosition };
