import { randomizeArray } from './utils';

test('Randomize array', () => {
  const arr1 = randomizeArray();
  const arr2 = randomizeArray();
  expect(arr1).not.toMatchObject(arr2);
});
