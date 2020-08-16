import {possibleHashOptions} from '../constants';
import timerBuilder from './timer';

export default () => {
  const messageField = document.getElementById(`message-field`);
  const timer = timerBuilder();
  const handlerHashChange = () => {
    const {hash} = window.location;
    const transformedHash = hash.slice(1);

    switch (transformedHash) {
      case possibleHashOptions.game:

        messageField.onanimationend = () => {
          timer.start();
        };

        return null;
      case possibleHashOptions.story:
      case possibleHashOptions.prizes:
      case possibleHashOptions.rules:
        return timer.stop();
      default:
        return null;
    }

  };

  window.addEventListener(`hashchange`, handlerHashChange, false);
  handlerHashChange();
};
