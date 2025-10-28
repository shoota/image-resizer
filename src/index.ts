import sharp from 'sharp';

export interface ResizeOptions {
  width?: number;
  height?: number;
}

/**
 * Resize an image to the specified dimensions
 * @param inputPath - Path to the input image
 * @param outputPath - Path to save the resized image
 * @param options - Resize options
 * @returns Promise that resolves when the image is resized
 */
export async function resizeImage(
  inputPath: string,
  outputPath: string,
  options: ResizeOptions = {}
): Promise<void> {
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