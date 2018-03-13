import legacyBlockies from '../blockies';

describe('`legacyBlockies` module', () => {
  test("It should have it's original export methods", () => {
    expect(legacyBlockies).toHaveProperty('create');
    expect(legacyBlockies).toHaveProperty('render');
  });
});
