import {uuid} from './generateId';

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
      <img src="/img/primary-award-from.svg?v=${uuid()}" alt="">
    </picture>`;
  };
};
