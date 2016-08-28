import assert from 'assert';
import add from '../src/add';

describe('ADD', function () {
  it('should return a sum of two numbers', function () {
    assert.equal(add(1, 2), 3);
  });
});
