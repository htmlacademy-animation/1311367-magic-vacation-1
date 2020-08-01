const timerBuilder = () => {
  const gameCounter = document.querySelector(`.js-game-counter`);
  const minutesCounter = gameCounter.children[0];
  const secondsCounter = gameCounter.children[1];
  const now = new Date();

  return {
    start: () => {
      console.log(`timerStarted`);
    },
    stop: () => {
      console.log(`timerStopped`);
    }
  };
};

export default timerBuilder;
