const sharp = require('sharp');

/**
 * Resize an image to the specified dimensions
 * @param {string} inputPath - Path to the input image
 * @param {string} outputPath - Path to save the resized image
 * @param {Object} options - Resize options
 * @param {number} options.width - Width of the resized image
 * @param {number} options.height - Height of the resized image
 * @returns {Promise<void>}
 */
async function resizeImage(inputPath, outputPath, options = {}) {
  const { width, height } = options;

  if (!width && !height) {
    throw new Error('At least one dimension (width or height) must be specified');
  }

  await sharp(inputPath)
    .resize(width, height, {
      fit: 'inside',
      withoutEnlargement: false
    })
    .toFile(outputPath);
}

module.exports = {
  resizeImage
};
