import React, { useContext } from "react";
import Panel from "../components/Panel";
import { TextContext } from "../context/TextContext";
import Square from "./Square";

const Table = () => {
  const { status } = useContext(TextContext);
  let renderedGrid;

  //Do nothing if the grid has not been set up
  if (status.populationState.length === 0) {
    return (renderedGrid = "");
  } else {
    //maps the PopulationState and render 0s and 1s.
    renderedGrid = status.populationState.map((row, i) =>
      row.map((col, k) => (
        <div
          key={`${i}${k}`}
          style={{
            backgroundColor: status.populationState[i][k]
              ? "green"
              : "lightgray",
          }}
        >
          <Square />
        </div>
      ))
    );
  }
  return (
    <Panel>
      <div
        id="table"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${status.gridSize[1]},15px)`,
        }}
      >
        {renderedGrid}
      </div>
    </Panel>
  );
};

export default Table;
