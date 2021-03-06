// time-format.js
const MINUTE = 60;
const HOUR = 3600;

export function toProperUnit(seconds) {
  if (seconds < MINUTE) {
    return {
      time: seconds,
      unit: 'seconds',
    };
  }
  if (MINUTE <= seconds && seconds < HOUR) {
    return {
      time: parseInt(seconds / MINUTE, 10),
      unit: 'minutes',
    };
  }
  return null;
}

export default {
  toProperUnit,
};
