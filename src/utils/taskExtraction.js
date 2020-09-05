const CATEGORIES_REGEXP = new RegExp(/#(\S+)/, 'g');
const TAGS_REGEXP = new RegExp(/~(\S+)/, 'g');

export const extractTaskInfo = (text) => {
  const title = text
    .replace(CATEGORIES_REGEXP, '')
    .replace(TAGS_REGEXP, '')
    .trim();
  const category = text
    .match(CATEGORIES_REGEXP)
    ?.map((cat) => cat.replace('#', ''))?.[0];
  const tags =
    text.match(TAGS_REGEXP)?.map((tag) => tag.replace('~', '')) || [];
  const test = 'asfasdf';

  return {
    title,
    category,
    tags,
  };
};

export const replaceCategory = (text, catRegexp) => {
  return text.replace(CATEGORIES_REGEXP, catRegexp);
};

export const replaceTags = (text, tagRegexp) => {
  return text.replace(TAGS_REGEXP, tagRegexp);
};
