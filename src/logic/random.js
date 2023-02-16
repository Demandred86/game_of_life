import randomIntFromInterval, { generateRandomPosition } from "./grid";

//generates a random position
const random = () => {
  const currentGeneration = Math.floor(Math.random() * 100);
  const numRows = randomIntFromInterval();
  const numCols = randomIntFromInterval();
  const populationState = generateRandomPosition(numRows, numCols);

  const newState = {
    generation: currentGeneration,
    gridSize: [numRows, numCols],
    populationState,
  };
  return newState;
};

export default random;
