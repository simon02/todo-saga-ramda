import * as R from 'ramda';

const CATEGORIES_REGEXP = new RegExp(/#(\S+)/, 'g');
const TAGS_REGEXP = new RegExp(/~(\S+)/, 'g');

export const replaceCategory = R.replace(CATEGORIES_REGEXP);
export const replaceTags = R.replace(TAGS_REGEXP);
export const replaceCategoriesAndTags = (regexpCat, regexpTag, text) =>
  R.compose(replaceCategory(regexpCat), replaceTags(regexpTag))(text);

const extractHelper = (regexp, toRemove) =>
  R.pipe(R.match(regexp), R.map(R.replace(toRemove, '')));

const extractCategory = R.pipe(extractHelper(CATEGORIES_REGEXP, '#'), R.head);
const extractTags = extractHelper(TAGS_REGEXP, '~');

export const extractTaskInfo = (text) => {
  const title = R.pipe(replaceCategory(''), replaceTags(''), R.trim)(text);
  const category = extractCategory(text);
  const tags = extractTags(text);

  return {
    title,
    category,
    tags,
  };
};

export const parseDom = (text) =>
  new DOMParser().parseFromString(text, 'text/html').body.textContent;
