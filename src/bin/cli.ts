#!/usr/bin/env node

import { program } from 'commander';
import { resizeImage, ResizeOptions } from '../index.js';
import path from 'path';
import fs from 'fs';

interface CliOptions {
  width?: string;
  height?: string;
  output?: string;
}

program
  .name('image-resizer')
  .description('CLI tool to resize images')
  .version('1.0.0')
  .argument('<input>', 'Path to the input image file')
  .option('-w, --width <number>', 'Width of the resized image')
  .option('-H, --height <number>', 'Height of the resized image')
  .option('-o, --output <path>', 'Output file path (optional, defaults to input_resized.ext)')
  .action(async (input: string, options: CliOptions) => {
    try {
      // Validate input file exists
      if (!fs.existsSync(input)) {
        console.error(`Error: Input file '${input}' does not exist`);
        process.exit(1);
      }

      // Parse dimensions
      const width = options.width ? parseInt(options.width, 10) : undefined;
      const height = options.height ? parseInt(options.height, 10) : undefined;

      if (!width && !height) {
        console.error('Error: At least one dimension (width or height) must be specified');
        process.exit(1);
      }

      // Validate dimensions
      if (width && (isNaN(width) || width <= 0)) {
        console.error('Error: Width must be a positive number');
        process.exit(1);
      }

      if (height && (isNaN(height) || height <= 0)) {
        console.error('Error: Height must be a positive number');
        process.exit(1);
      }

      // Generate output path if not provided
      let output = options.output;
      if (!output) {
        const parsed = path.parse(input);
        output = path.join(parsed.dir, `${parsed.name}_resized${parsed.ext}`);
      }

      // Resize the image
      console.log(`Resizing ${input}...`);
      
      // Create options object with proper typing
      const resizeOptions: ResizeOptions = {};
      if (width !== undefined) {
        resizeOptions.width = width;
      }
      if (height !== undefined) {
        resizeOptions.height = height;
      }
      
      await resizeImage(input, output, resizeOptions);

      console.log(`Successfully resized image saved to: ${output}`);
      console.log(`Dimensions: ${width || 'auto'} x ${height || 'auto'}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error: ${errorMessage}`);
      process.exit(1);
    }
  });

program.parse();