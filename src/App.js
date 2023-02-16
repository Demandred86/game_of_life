import { useRef, useState } from "react";
import Table from "./modules/Table";
import produce from "immer";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import { calculations } from "./logic/logic";
import { TextContext } from "./context/TextContext";
import LoadFile from "./modules/LoadFile";

function App() {
  const [fileText, setFileText] = useState(null);
  const [isLive, setIsLive] = useState(false);
  const [status, setStatus] = useState({
    generation: "",
    gridSize: [0, 0],
    populationState: [[]],
  });

  const rows = status.gridSize[0];
  const cols = status.gridSize[1];

  const isLiveRef = useRef(isLive);
  isLiveRef.current = isLive;

  const runSimulation = () => {
    if (!isLiveRef.current) return;

    //simulate
    setStatus((status) => {
      return produce(status, (statusCopy) => {
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            let totalNearCells = 0;
            for (let [x, y] of calculations) {
              const newI = i + x;
              const newK = j + y;

              if (newI >= 0 && newI < rows && newK >= 0 && newK < cols) {
                totalNearCells += status.populationState[newI][newK];
              }
            }
            if (totalNearCells < 2 || totalNearCells > 3) {
              statusCopy.populationState[i][j] = 0;
            } else if (
              statusCopy.populationState[i][j] === 0 ||
              totalNearCells === 3
            ) {
              statusCopy.populationState[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 500);
  };

  //returning grid with markup

  const handleStartStop = () => {
    if (status.populationState[0].length === 0) {
      alert("Generate Random or upload a configuration");
      return;
    }
    setIsLive(!isLive);
    if (!isLive) {
      isLiveRef.current = true;
      runSimulation();
    }
  };
  return (
    <>
      <TextContext.Provider
        value={{ fileText, setFileText, status, setStatus }}
      >
        <Panel className={"table-cell object-contain "}>
          <Navbar handleStartStop={handleStartStop} isLive={isLive}></Navbar>

          <div>
            <Table></Table>
          </div>
          <Panel>
            <LoadFile></LoadFile>
          </Panel>
        </Panel>
      </TextContext.Provider>
    </>
  );
}

export default App;
