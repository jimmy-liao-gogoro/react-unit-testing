// time-format.test.js
import { toProperUnit } from './time-format';

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

    it('should return minutes if seconds >= 1 min and seconds < 1 hour', () => {
      const seconds = 300;

      const result = toProperUnit(seconds);

      expect(result).toEqual({
        time: 5,
        unit: 'minutes',
      });
    });
  });
});
