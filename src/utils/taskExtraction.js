import * as R from 'ramda';

const CATEGORIES_REGEXP = new RegExp(/#(\S+)/, 'g');
const TAGS_REGEXP = new RegExp(/~(\S+)/, 'g');
const DATE_REGEXP = new RegExp(/@(\d{1,2}[-\/]\d{1,2}[-\/]?(\d{2})*)/, 'g');

export const replaceCategory = R.replace(CATEGORIES_REGEXP);
export const replaceTags = R.replace(TAGS_REGEXP);
export const replaceDate = R.replace(DATE_REGEXP);
export const replaceCategoriesTagsDates = R.curry(
  (regexpCat, regexpTag, regexpDate, text) =>
    R.pipe(
      replaceCategory(regexpCat),
      replaceTags(regexpTag),
      replaceDate(regexpDate),
      R.trim,
    )(text),
);

const extractHelper = (regexp, toRemove) =>
  R.pipe(R.match(regexp), R.map(R.replace(toRemove, '')));

const extractCategory = R.pipe(extractHelper(CATEGORIES_REGEXP, '#'), R.head);
const extractTags = extractHelper(TAGS_REGEXP, '~');
const extractDate = R.pipe(extractHelper(DATE_REGEXP, '@'), R.head);

export const extractTaskInfo = (text) => {
  const title = replaceCategoriesTagsDates('', '', '', text);
  const category = extractCategory(text);
  const tags = extractTags(text);
  const completeBy = extractDate(text);

  return {
    title,
    category,
    tags,
    completeBy,
  };
};

export const parseDom = (text) =>
  new DOMParser().parseFromString(text, 'text/html').body.textContent;
