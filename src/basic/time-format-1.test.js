// time-format.test.js
import { toProperUnit } from './time-format-1';

describe('time-format', () => {
  describe('toProperUnit()', () => {
    it('should return seconds if seconds < 1 min', () => {
      const seconds = 30;

      const result = toProperUnit(seconds);

      expect(result).toEqual({
        time: 30,
        unit: 'seconds',
      });
    });
  });
});
