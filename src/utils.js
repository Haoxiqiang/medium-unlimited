import {MEMBERSHIP_PROMPT_CLASSNAME, MEMBERSHIP_PROMPT_ID, METERED_CONTENT_CLASSNAME} from './constants';

export function log(...messages) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  console.log(...messages);
}

export function init() {
  chrome.runtime.setUninstallURL('https://manojvivek.typeform.com/to/c0VaBs');
}

export function urlWithoutQueryParams(url) {
  if (!url) {
    return '';
  }
  return url.split('?')[0];
}

function hasMembershipPromptNew(document) {
  const article = document.getElementsByTagName('article')[0];
  if (!article) {
    return false;
  }
  const computedStyles = (document.defaultView || window).getComputedStyle(article.nextSibling);
  if (!computedStyles.background) {
    return false;
  }
  return computedStyles.background.indexOf('linear-gradient') > -1;
}

export function hasMembershipPrompt(document) {
  return (
    document.getElementById(MEMBERSHIP_PROMPT_ID) ||
    hasMembershipPromptNew(document)
  );
}

export function getTwitterReferer() {
  return `https://t.co/${Math.random().toString(36).slice(2)}`;
}

export function getMeteredContentElement(doc) {
  return (doc || document).getElementsByClassName(METERED_CONTENT_CLASSNAME)[0];
}
