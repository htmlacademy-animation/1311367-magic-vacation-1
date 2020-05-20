import {sleep} from "./sleep";

const splitText = ({text = ``, delimiter = ` `, element = `span`, className}) => {
  const fragment = document.createDocumentFragment();
  const textArray = text.split(delimiter);

  textArray.forEach((item) => {
    const resultElement = document.createElement(element);

    if (className) {
      resultElement.classList.add(className);
    }

    resultElement.textContent = item;
    fragment.appendChild(resultElement);
  });

  return fragment;
};

const lettersBuilder = ({node = null, settings = {}}) => {
  const isHTMLElement = node instanceof HTMLElement;

  if (!node || !isHTMLElement) {
    // eslint-disable-next-line no-console
    return console.error(
        `Dom node is required. Dom element must be a HTMLElement`
    );
  }

  const initialSettings = {speed: 80, activeClass: `animated-text`, finishedAnimationClass: `animated-text--finished`};
  const params = {...initialSettings, ...settings};
  const nodeText = node.textContent;
  const splittedTextByWords = splitText({text: nodeText, className: `word`}).querySelectorAll(
      `span`
  );

  let {speed} = initialSettings;
  let counter = 0;

  node.innerHTML = Array.from(splittedTextByWords).reduce(
      (acc, currentElement, index, array) => {
        const text = currentElement.textContent;
        const result = splitText({text, delimiter: ``});

        result.querySelectorAll(`span`).forEach((item) => {
          item.style.transitionDelay = `${speed}ms`;
          counter = counter + 1;
          speed = params.speed + (counter % 2 !== 0 ? counter + params.speed * 2 : params.speed);
        });

        if (index !== array.length - 1) {
          const spaceSpan = document.createElement(`span`);

          spaceSpan.textContent = ` `;
          result.appendChild(spaceSpan);
        }

        currentElement.innerHTML = ``;
        currentElement.appendChild(result);

        return acc + currentElement.outerHTML;
      },
      ``
  );

  const firstLetter = node.querySelector(`span`);

  firstLetter.ontransitionend = () => {
    node.classList.add(params.finishedAnimationClass);
  };

  const startAnimation = () => {
    node.classList.add(params.activeClass);
  };

  const delayedStartAnimation = async (delay) => {
    await sleep(delay);

    startAnimation();
  };

  return {
    node,
    settings: params,
    runAnimation: (delay) => {
      if (delay) {
        delayedStartAnimation(delay);
      } else {
        startAnimation();
      }
    },
    stopAnimation: () => {
      node.classList.remove(params.activeClass);
      node.classList.remove(params.finishedAnimationClass);
    },
  };
};

export default lettersBuilder;
