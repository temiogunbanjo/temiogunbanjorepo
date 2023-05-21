export const getRandomItem = (array) => {
  const itemIndex = Math.floor(Math.random() * array.length);
  return array[itemIndex];
};