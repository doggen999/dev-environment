// move to util
export const randomizeArray = () =>
  /* https://stackoverflow.com/questions/5836833/create-an-array-with-random-values#comment78572385_33833649 */
  new Array(16)
    .fill()
    .map((a, i) => (a = i))
    .sort(() => Math.random() - 0.5);
