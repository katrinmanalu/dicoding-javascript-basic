import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 5), 15);
});

test('mengembalikan 0 jika salah satu parameter bukan number', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
});

test('mengembalikan 0 jika ada angka negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-2, -3), 0);
});