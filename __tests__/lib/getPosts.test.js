import { getFiles, getPageBySlug, getAllPages } from '@/lib/getPosts';

const mockPages = ['page1.md', 'page2.md', 'page3.md'];

jest.mock('@/lib/getPosts', () => {
  const originalModule = jest.requireActual('@/lib/getPosts');

  return {
    __esModule: true, // Use it when dealing with esModules
    ...originalModule,
    getFiles: jest.fn(() => mockPages),
  };
});

beforeEach(() => {
  jest.resetModules();
});

test('it lists the pages from the _pages dir', () => {
  const slugs = getFiles();
  expect(slugs).toHaveLength(3);
  expect(slugs).toEqual(mockPages);
});

test('it returns an object containing the markdown content', () => {
  const page = getPageBySlug('portfolio', ['title', 'content']);

  expect(page.title).toEqual('Portfolio');
  expect(page.content).not.toEqual('');
});

test('it returns an array of objects containing the slug property', () => {
  const pages = getAllPages(['slug']);

  expect(pages).toEqual(expect.arrayContaining(pages));
  expect(pages[0]).toHaveProperty('slug');
});
