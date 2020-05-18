// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import screen from './modules/screen.js';
import rules from './modules/rules.js';
import lettersBuilder from './modules/lettersBuilder.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
screen();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const titleNode = document.querySelector(`.intro__title`);
const pageHeader = document.querySelector(`.page-header`);
const lettersAnimation = lettersBuilder({
  node: titleNode,
});

pageHeader.onanimationstart = () => {
  lettersAnimation.runAnimation();
};

