export default () => {
  const $screenOverlay = document.querySelector(`.screen__overlay`);
  const $prizesJourneys = document.querySelector(`.js-prizes-journeys`);
  const $prizesJourneysIcon = $prizesJourneys.querySelector(`.prizes__icon`);
  const html = `
    <picture>
      <source srcset="/img/primary-award-from.svg" media="(orientation: portrait)">
      <img src="/img/primary-award-from.svg" alt="">
    </picture>
  `;

  $screenOverlay.onanimationstart = () => {
    $prizesJourneysIcon.innerHTML = ``;
  };


  $screenOverlay.onanimationend = () => {
    $prizesJourneysIcon.innerHTML = html;
  };
};
