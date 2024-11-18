import { NUM_BOARDS, GRID_SIZE, ITEMS } from "./constants";
import shuffleItems from "./shuffleItems";

const createBoards = () => {
  const totalItemsPerBoard = GRID_SIZE ** 2;
  if (ITEMS.length < totalItemsPerBoard) {
    throw new Error(
      `ITEMS must contain at least GRID_SIZE^2 items, ${totalItemsPerBoard}`
    );
  }

  const boards = [];

  for (let i = 0; i < NUM_BOARDS; i++) {
    boards.push(shuffleItems(ITEMS, totalItemsPerBoard));
  }

  return boards;
};

export default createBoards;
