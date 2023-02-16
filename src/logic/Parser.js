/**
 * @param {string} fileText
 * Returns a state object. If the grid contains a non . or * character, returns -1
 * more error handling needs to be implemented.
 */

const Parser = (fileText) => {
  // finds the number in the first row
  //TODO: insert error handling logic
  const newGenerationNumber = +fileText.match(/\d+/);

  const textIntoLines = fileText.split("\n");

  const newPopulationState = [];

  //parse from the 3rd array/line. That is where the grid is supposed to start.
  //TODO insert error handling logic
  for (let i = 2; i < textIntoLines.length; i++) {
    const newArr = [];
    textIntoLines[i] = textIntoLines[i]
      .replace("\r", "")
      .replaceAll("*", +1)
      .replaceAll(".", +0);
    for (const char of textIntoLines[i]) {
      newArr.push(+char);
    }
    newPopulationState.push(newArr);
  }

  // error logic if not . od *
  if (newPopulationState.flat().includes(NaN)) {
    alert("Please upload a grid that contains only . or *");
    return -1;
  } else {
    const newState = {
      generation: newGenerationNumber,
      gridSize: [newPopulationState.length, newPopulationState[0].length],
      populationState: newPopulationState,
    };

    return newState;
  }
};

export { Parser };
