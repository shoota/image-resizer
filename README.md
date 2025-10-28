# image-resizer

A simple CLI tool to resize images using Node.js, Sharp, and TypeScript.

## Installation

```bash
npm install -g image-resizer
```

Or use it locally in a project:

```bash
npm install image-resizer
```

## CLI Usage

Resize an image by specifying width and/or height:

```bash
# Resize by width only (height will be calculated to maintain aspect ratio)
image-resizer input.jpg --width 800

# Resize by height only (width will be calculated to maintain aspect ratio)
image-resizer input.jpg --height 600

# Resize by both width and height
image-resizer input.jpg --width 800 --height 600

# Specify custom output path
image-resizer input.jpg --width 800 --output resized.jpg
```

### Options

- `-w, --width <number>` - Width of the resized image
- `-H, --height <number>` - Height of the resized image
- `-o, --output <path>` - Output file path (defaults to `input_resized.ext`)
- `-V, --version` - Output the version number
- `-h, --help` - Display help information

## Programmatic Usage

You can also use the package programmatically in your Node.js applications:

### TypeScript/ESM

```typescript
import { resizeImage, ResizeOptions } from 'image-resizer';

// Resize an image
const options: ResizeOptions = {
  width: 800,
  height: 600
};

try {
  await resizeImage('input.jpg', 'output.jpg', options);
  console.log('Image resized successfully!');
} catch (err) {
  console.error('Error resizing image:', err);
}
```

### CommonJS

```javascript
const { resizeImage } = require('image-resizer');

// Resize an image
resizeImage('input.jpg', 'output.jpg', {
  width: 800,
  height: 600
}).then(() => {
  console.log('Image resized successfully!');
}).catch(err => {
  console.error('Error resizing image:', err);
});
```

## Development

### Prerequisites

- Node.js 18.0.0 or higher
- TypeScript 5.9.3 or higher

### Building

```bash
# Install dependencies
npm install

# Build TypeScript to JavaScript
npm run build

# Run in development mode
npm run dev <input> [options]

# Clean build directory
npm run clean
```

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run the CLI in development mode with tsx
- `npm run start` - Run the compiled CLI
- `npm run clean` - Remove the dist directory

## Features

- Written in TypeScript with full type safety
- Resize images by width, height, or both
- Maintains aspect ratio when only one dimension is specified
- Supports various image formats (JPEG, PNG, WebP, TIFF, GIF, etc.)
- Simple command-line interface
- Can be used programmatically with TypeScript support
- Modern ES modules with CommonJS compatibility

## License

ISC