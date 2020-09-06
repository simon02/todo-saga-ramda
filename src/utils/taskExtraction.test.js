import {
  extractTaskInfo,
  replaceCategory,
  replaceTags,
  replaceCategoriesTagsDates,
} from './taskExtraction';

test('it can handle plain text', () => {
  const text = 'plain text for a task';
  const task = extractTaskInfo(text);
  expect(task.title).toBe(text);
  expect(task.category).toBe(undefined);
  expect(task.tags).toEqual([]);
  expect(task.completeBy).toEqual(undefined);
});

test('it trims extra whitespace', () => {
  const text = 'plain text for a task';
  const task = extractTaskInfo(` ${text}   `);
  expect(task.title).toBe(text);
  expect(task.category).toBe(undefined);
  expect(task.tags).toEqual([]);
});

test('it works with one category', () => {
  const task = extractTaskInfo('#test-category');
  expect(task.title).toBe('');
  expect(task.category).toBe('test-category');
  expect(task.tags).toEqual([]);
});

test('it ignores multiple categories', () => {
  const task = extractTaskInfo('#test1 #test2');
  expect(task.title).toBe('');
  expect(task.category).toBe('test1');
  expect(task.tags).toEqual([]);
});

test('it works with just one tag', () => {
  const task = extractTaskInfo('~test-tag');
  expect(task.title).toBe('');
  expect(task.category).toBe(undefined);
  expect(task.tags).toEqual(['test-tag']);
});

test('it works with multiple tags', () => {
  const task = extractTaskInfo('~test-tag ~tag2');
  expect(task.title).toBe('');
  expect(task.category).toBe(undefined);
  expect(task.tags).toEqual(['test-tag', 'tag2']);
});

test('it works with a date without year', () => {
  const text = 'plain text for a task';
  const task = extractTaskInfo(`${text} @2/21`);
  expect(task.title).toBe(text);
  expect(task.category).toBe(undefined);
  expect(task.tags).toEqual([]);
  expect(task.completeBy).toEqual('2/21');
});

test('it works with a date with year', () => {
  const text = 'plain text for a task';
  const task = extractTaskInfo(`${text} @2/21/2030`);
  expect(task.title).toBe(text);
  expect(task.category).toBe(undefined);
  expect(task.tags).toEqual([]);
  expect(task.completeBy).toEqual('2/21/2030');
});

test('it works with a combination of text, category and tags', () => {
  const text = 'plain text for a task';
  const task = extractTaskInfo(`${text} ~tag1 ~tag2 #cat1 ~tag3`);
  expect(task.title).toBe(text);
  expect(task.category).toBe('cat1');
  expect(task.tags).toEqual(['tag1', 'tag2', 'tag3']);
});

describe('replaceCategory', () => {
  test('works with a span and classes', () => {
    const parsed = replaceCategory(
      '<span class="a b">#$1</span>',
      'plain text for a task ~tag1 #cat1 ~tag2',
    );
    expect(parsed).toBe(
      'plain text for a task ~tag1 <span class="a b">#cat1</span> ~tag2',
    );
  });
});

describe('replaceTags', () => {
  test('works with a span and classes', () => {
    const parsed = replaceTags(
      '<span class="a b">~$1</span>',
      'plain text for a task ~tag1 #cat1 ~tag2',
    );
    expect(parsed).toBe(
      'plain text for a task <span class="a b">~tag1</span> #cat1 <span class="a b">~tag2</span>',
    );
  });
});

describe('replaceCategoriesAndTags', () => {
  test('works with a combination of categories and tags', () => {
    const parsed = replaceCategoriesTagsDates(
      '<span class="a">#$1</span>',
      '<span class="b">~$1</span>',
      '<span class="c">@$1</span>',
      'plain text for a task ~tag1 #cat1 ~tag2 @12/02/2020',
    );
    expect(parsed).toBe(
      'plain text for a task <span class="b">~tag1</span> <span class="a">#cat1</span> <span class="b">~tag2</span> <span class="c">@12/02/2020</span>',
    );
  });
});
