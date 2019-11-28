// time-format.js
const MINUTE = 60;

export function toProperUnit(seconds) {
  if (seconds < MINUTE) {
    return {
      time: seconds,
      unit: 'seconds',
    };
  }
  return null;
}

export default {
  toProperUnit,
};
