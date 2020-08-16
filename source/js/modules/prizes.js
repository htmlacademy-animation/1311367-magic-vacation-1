import {uuid} from './generateId';
import {updatePrizesCounter} from './updatePrizesConter'

export default () => {
  const $screenOverlay = document.querySelector(`.screen__overlay`);
  const $prizesJourneys = document.querySelector(`.js-prizes-journeys`);
  const $prizesJourneysIcon = $prizesJourneys.querySelector(`.prizes__icon`);

  const $prizesCases = document.querySelector(`.js-prizes-cases`);
  const $prizesCodes = document.querySelector(`.js-prizes-codes`);
  const $countPrizesCases = $prizesCases.getElementsByTagName(`b`)[0];
  const $countPrizesCodes = $prizesCodes.getElementsByTagName(`b`)[0];

  $screenOverlay.onanimationstart = () => {
    $prizesJourneysIcon.innerHTML = ``;
  };

  $screenOverlay.onanimationend = () => {
    $prizesJourneysIcon.innerHTML = `<picture>
      <source srcset="img/primary-award-from.svg?v=${uuid()}" media="(orientation: portrait)">
      <img src="img/primary-award-from.svg?v=${uuid()}" alt="">
    </picture>`;

    window.requestAnimationFrame(() => updatePrizesCounter($countPrizesCases, 1, 7));
    window.requestAnimationFrame(() => updatePrizesCounter($countPrizesCodes, 11, 900));
  };
};
