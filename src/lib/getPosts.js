import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
/**
 * Get slugs and pages, based on the Next.js blog starter
 * https://github.com/vercel/next.js/tree/canary/examples/blog-starter
 */

/**
 * Generate page slugs based on the page names
 *
 * @returns {Array} Array of filenames found in the pagesDir
 */
const pagesDir = join(process.cwd(), '_pages');
const getFiles = () => fs.readdirSync(pagesDir);

/**
 *  Generate the page content as an object
 *
 * @param {String} slug
 * @param {Array} fields
 * @returns {Object} Object containing the fields passed as args
 */
const getPageBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, ''); // Strip the .md extension from the filename
  const fullPath = join(pagesDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

/**
 * Get a list of the pages by their fields
 *
 * @param {Array} fields
 * @returns {Array} Array of objects containing the fields passed
 */
const getAllPages = (fields = []) => {
  const slugs = getFiles();

  const pages = slugs
    .map((slug) => getPageBySlug(slug, fields))
    .sort((page1, page2) => page1.localeCompare(page2));

  return pages;
};

export { getFiles, getPageBySlug, getAllPages };
