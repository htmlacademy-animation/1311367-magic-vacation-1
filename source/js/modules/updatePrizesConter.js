import {fpsRequestAnimationFrame} from "./fpsRequestAnimationFrame";

let request = null;

export const updatePrizesCounter = ($element, initialCounterValue, maxCounterValue) => {
  const currentValue = Number($element.textContent);

  if (currentValue < maxCounterValue) {
    $element.textContent = currentValue + initialCounterValue;
    request = fpsRequestAnimationFrame(() => updatePrizesCounter($element, initialCounterValue, maxCounterValue));
  } else {
    $element.textContent = maxCounterValue;
    window.cancelAnimationFrame(request);
  }
};
