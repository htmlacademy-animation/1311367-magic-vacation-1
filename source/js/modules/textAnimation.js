import lettersBuilder from './lettersBuilder.js';
import {possibleHashOptions} from "../constants";

const createAnimation = (node, delay) => {
  const titleAnimation = lettersBuilder({
    node,
  });

  titleAnimation.stopAnimation();
  titleAnimation.runAnimation(delay);
};

export default () => {
  const menuLinksCollection = document.querySelectorAll(`.js-menu-link`);

  const linkClickHandler = ({target}) => {
    const {href} = target.dataset;
    const screen = document.getElementById(href);
    const titleTag = href === possibleHashOptions.top ? `h1` : `h2`;
    const title = screen.querySelector(titleTag);
    const delay = href === possibleHashOptions.prizes ? 750 : 250;

    createAnimation(title, delay);

    if (href === `top`) {
      const introDate = document.querySelector(`.intro__date`);

      createAnimation(introDate, 750);
    }
  };

  const pageLoadHandler = () => {
    const {hash} = window.location;
    const link = document.querySelector(`[href='${hash || `#${possibleHashOptions.top}`}']`);

    link.click();
  };

  menuLinksCollection.forEach((link) => {
    link.addEventListener(`click`, linkClickHandler);
  });

  pageLoadHandler();
};
