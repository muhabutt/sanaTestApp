/**
 * Remove paragraph tag with newLine
 * @param str
 * @returns {string}
 */
export const removeParagraphTag = (str) => {
  if (!str || !str.length) {
    return '';
  }
  return str.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/\/n/, '');
};
