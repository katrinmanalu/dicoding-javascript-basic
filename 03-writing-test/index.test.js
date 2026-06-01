import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('pengujian fungsi sum', () => {
  assert.strictEqual(sum(2, 3), 5);

  assert.strictEqual(sum(-1, -1), -2);

  assert.strictEqual(sum(5, 0), 5);
});