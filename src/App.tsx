import { FREE_SPACE_LABEL, GRID_SIZE } from "./helpers/constants";
import createBoards from "./helpers/createBoards";

import Intro from "./components/Intro";

import "./App.css";

const App = () => {
  const boards = createBoards();

  return (
    <div>
      {boards.map((board, index) => {
        return (
          <div className="page-wrapper" key={index}>
            <Intro />
            <div
              className="board-grid"
              style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, 1fr`,
              }}
            >
              {board.map((item, index) => {
                const isCenterSpace =
                  index === Math.floor((GRID_SIZE * GRID_SIZE) / 2);
                if (isCenterSpace && FREE_SPACE_LABEL) {
                  return (
                    <div key="free-space" className="free-space board-item">
                      <div>FREE SPACE</div>
                      <div>{FREE_SPACE_LABEL}</div>
                    </div>
                  );
                }
                return (
                  <div key={index} className="board-item">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
