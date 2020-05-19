import lettersBuilder from './lettersBuilder.js';

export default () => {
  const introTitle = document.querySelector(`.intro__title`);
  const introDate = document.querySelector(`.intro__date`);
  const pageHeader = document.querySelector(`.page-header`);

  const introTitleAnimation = lettersBuilder({
    node: introTitle,
  });

  const introDateAnimation = lettersBuilder({
    node: introDate,
  });

  pageHeader.onanimationstart = () => {
    introTitleAnimation.runAnimation();
  };

  introDateAnimation.runAnimation(750);
};
