export default () => {
  const $rules = document.querySelector(`.rules`);
  const $rulesCollection = $rules.querySelectorAll(`.rules__item`);
  const $lastRuleElement = $rulesCollection[$rulesCollection.length - 1];
  const $LastRuleElementText = $lastRuleElement.querySelector(`p`);
  const $rulesLink = $rules.querySelector(`.rules__link`);

  $LastRuleElementText.onanimationend = (evt) => {
    if (evt.animationName === `fadeIn`) {
      $rulesLink.classList.add(`rules__link--animated`);
    }
  };
};
