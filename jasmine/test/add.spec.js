import add from '../src/add';

describe('ADD', function() {
  it('should return a sum of two numbers', function() {
    expect(add(1, 2)).toBe(3);
  });
});
