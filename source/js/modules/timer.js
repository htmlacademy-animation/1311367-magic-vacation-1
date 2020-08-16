const timerBuilder = ({initialMinutes = 5} = {}) => {
  const gameCounter = document.querySelector(`.js-game-counter`);
  const minutesCounter = gameCounter.children[0];
  const secondsCounter = gameCounter.children[1];
  const maxTimeOfGame = initialMinutes * 60 * 1000;
  let request = null;

  const resetTimer = () => {
    minutesCounter.textContent = `0${initialMinutes}`;
    secondsCounter.textContent = `00`;
  };

  const updateTimer = (seconds) => {
    const minutes = Math.floor(seconds / 60);

    if (minutes > 0) {
      const restOfSeconds = seconds - minutes * 60;

      minutesCounter.textContent = minutes < 10 ? `0${minutes}` : minutes.toString();
      secondsCounter.textContent = restOfSeconds < 10 ? `0${restOfSeconds}` : restOfSeconds.toString();
    } else {
      minutesCounter.textContent = `00`;
      secondsCounter.textContent = seconds < 10 ? `0${seconds}` : seconds.toString();
    }
  };

  const stopTimer = () => {
    if (request) {
      window.cancelAnimationFrame(request);
    }
  };

  const tick = (finishTimeOfGame) => {
    const dateNow = Date.now();

    if (dateNow <= finishTimeOfGame) {
      const differenceTime = finishTimeOfGame - dateNow;

      request = window.requestAnimationFrame(() => tick(finishTimeOfGame));
      updateTimer(Math.floor(differenceTime / 1000));
    } else {
      stopTimer();
    }
  };

  return {
    start: () => {
      const now = Date.now();
      const finishTimeOfGame = now + maxTimeOfGame;

      request = window.requestAnimationFrame(() => tick(finishTimeOfGame));
    },
    stop: () => {
      stopTimer();
      resetTimer();
    }
  };
};

export default timerBuilder;
