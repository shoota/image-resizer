# image-resizer

A simple CLI tool to resize images using Node.js and Sharp.

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

## Features

- Resize images by width, height, or both
- Maintains aspect ratio when only one dimension is specified
- Supports various image formats (JPEG, PNG, WebP, TIFF, GIF, etc.)
- Simple command-line interface
- Can be used programmatically

## License

ISC