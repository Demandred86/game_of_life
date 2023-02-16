import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";
import random from "../logic/random";
import Button from "../modules/Button";
import Panel from "./Panel";

const Navbar = ({ isLive, handleStartStop }) => {
  const { setStatus } = useContext(TextContext);

  const handleRandom = () => {
    const newState = random();
    setStatus(newState);
  };

  return (
    <div>
      <Panel>
        {/* contains the logic to upload the text tile */}
        <div>
          <Button warning onClick={handleStartStop} className="m-5">
            {isLive ? "Stop" : "Start"}
          </Button>
        </div>

        {isLive ? (
          ""
        ) : (
          <div>
            <Button warning onClick={handleRandom} className="m-5">
              Generate Random
            </Button>
          </div>
        )}
      </Panel>
    </div>
  );
};

export default Navbar;
