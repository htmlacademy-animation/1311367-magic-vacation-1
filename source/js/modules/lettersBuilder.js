const splitText = ({ text = ``, delimiter = ` `, element = `span` }) => {
  const fragment = document.createDocumentFragment();
  const textArray = text.split(delimiter);

  textArray.forEach((item) => {
    const resultElement = document.createElement(element);

    resultElement.textContent = item;
    fragment.appendChild(resultElement);
  });

  return fragment;
};

const lettersBuilder = ({ node = null, settings = {}  }) => {
  const isHTMLElement = node instanceof HTMLElement === true;

  if (!node || !isHTMLElement) {
    return console.error(`Dom node is required. Dom element must be a HTMLElement`);
  }

  const initialSettings = {};
  const params = { ...initialSettings, ...settings };
  const nodeText = node.textContent;
  const splittedTextByWords = splitText({ text: nodeText }).querySelectorAll(`span`);

  node.innerHTML = Array.from(splittedTextByWords).reduce((acc, currentElement, index, array) => {
    const text = currentElement.textContent;
    const result = splitText({ text, delimiter: `` });

    if (index !== array.length - 1) {
      const spaceSpan = document.createElement(`span`);

      spaceSpan.textContent = ` `;
      result.appendChild(spaceSpan);
    }

    currentElement.innerHTML = ``;
    currentElement.appendChild(result);

    return acc + currentElement.outerHTML;
  }, ``);

  return {
    node,
    settings: params,
    start: () => {},
    stop: () => {},
  };
};

export default lettersBuilder;
