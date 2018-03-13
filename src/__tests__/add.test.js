import { add } from '../add';

describe('`add()` method', () => {
  test('It should be able to add two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });
});
