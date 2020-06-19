let currentVersion = 0;

export default () => {
  const $screenOverlay = document.querySelector(`.screen__overlay`);
  const $prizesJourneys = document.querySelector(`.js-prizes-journeys`);
  const $prizesJourneysIcon = $prizesJourneys.querySelector(`.prizes__icon`);

  $screenOverlay.onanimationstart = () => {
    $prizesJourneysIcon.innerHTML = ``;
  };

  $screenOverlay.onanimationend = () => {
    $prizesJourneysIcon.innerHTML = `<picture>
      <source srcset="/img/primary-award-from.svg" media="(orientation: portrait)">
      <img src="/img/primary-award-from.svg?v=${currentVersion}" alt="">
    </picture>`;

    currentVersion += 1;
  };
};
