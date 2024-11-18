const shuffleItems = (items: string[], totalItems: number) => {
  // Create copy of array to avoid mutating original
  const shuffled = [...items];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return only the requested number of items
  return shuffled.slice(0, totalItems);
};

export default shuffleItems;
