import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
/**
 * Get slugs and pages, based on the Next.js blog starter
 * https://github.com/vercel/next.js/tree/canary/examples/blog-starter
 */

const pagesDir = join(process.cwd(), '_pages');

/**
 * Recursively loop through the pagesDir and generate an array of
 * all of the pages within it.
 *
 * @returns {Array} Array of filenames found in the pagesDir
 */
const getFiles = (dirPath, arrayOfFiles) => {
  dirPath = dirPath || pagesDir;
  arrayOfFiles = arrayOfFiles || [];

  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      let tidyDirPath = dirPath.replace(join(process.cwd(), '_pages'), '');

      if (tidyDirPath.substring(0, 1) === '/') {
        tidyDirPath = tidyDirPath.replace('/', '');
      }

      tidyDirPath
        ? arrayOfFiles.push(join(tidyDirPath, '/', file))
        : arrayOfFiles.push(file);
    }
  });

  return arrayOfFiles;
};

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
  const slugs = getFiles(pagesDir);

  // Separate the slug out into an array so we can make use of dynamic routes
  // see: https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
  const pages = slugs
    .map((slug) => getPageBySlug(slug, fields))
    .map((page) => page.slug.split('/'));

  return pages;
};

export { getFiles, getPageBySlug, getAllPages };
