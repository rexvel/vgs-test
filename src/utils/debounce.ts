export const debounce = (callback, delay) => {
  const timerClear = () => clear = true;
  var clear = true;
  return event => {
      if (clear) {
          clear = false;
          setTimeout(timerClear, delay);
          callback(event);
      }
  }
}