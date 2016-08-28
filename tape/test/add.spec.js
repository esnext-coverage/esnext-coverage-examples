import test from 'tape';
import add from '../src/add';

test('ADD should return a sum of two numbers', t => {
  t.plan(1);
  t.equal(add(1, 2), 3);
});
