import assert from 'assert';
import { doubleLength } from './../src/double-length';

describe('Dynamic', () => {
  const cases = [
    {arr: [1, 2, 3], expected: 6},
    {arr: [], expected: 0},
    {arr: [4, 5, 6, 7, 8, 1], expected: 12},
    {arr: [1, 10, 20, 30], expected: 8}
  ];

  cases.forEach(testCase => {
    it(`should double array with length ${testCase.arr.length}`, () => {
      assert.equal(testCase.expected, doubleLength(testCase.arr));
    });
  });
});
