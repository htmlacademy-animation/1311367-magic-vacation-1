export default () => {
  window.onload = function () {
    const $rules = document.querySelector(`.rules`);
    const $rulesCollection = $rules.querySelectorAll(`.rules__item`);
    const $lastRuleElement = $rulesCollection[$rulesCollection.length - 1];
    const $LastRuleElementText = $lastRuleElement.querySelector(`p`);
    const $rulesLink = $rules.querySelector(`.rules__link`);
    const $rulesLinkText = $rulesLink.querySelector(`span`);

    $LastRuleElementText.onanimationend = (evt) => {
      if (evt.animationName === `fadeIn`) {
        $rulesLink.style.animationName = `animationBtn`;
        $rulesLink.style.animationFillMode = `forwards`;
        $rulesLink.style.animationDuration = `0.35s`;
        $rulesLink.style.overflow = `visible`;

        $rulesLinkText.style.animationName = `fadeIn`;
        $rulesLinkText.style.animationDuration = `0.35s`;
        $rulesLinkText.style.animationDelay = `0.2s`;
        $rulesLinkText.style.animationFillMode = `forwards`;
      }
    };
  };
};
