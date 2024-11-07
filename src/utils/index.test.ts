import {generateRandomId} from './index';

describe('generateRandomId', () => {});
it('should handle multiple rapid calls without duplicates', () => {
  const ids = new Set();
  for (let i = 0; i < 1000; i++) {
    ids.add(generateRandomId());
  }
  expect(ids.size).toBe(1000);
});
