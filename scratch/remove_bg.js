const sharp = require('sharp');
const path = require('path');

async function removeBackground() {
  const inputPath = path.join(__dirname, 'input.png');
  const outputPath = path.join(__dirname, 'output.png');

  try {
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixelArray = new Uint8ClampedArray(data);

    // Magenta color to remove (R: 255, G: 0, B: 255)
    // We'll use a small threshold
    for (let i = 0; i < pixelArray.length; i += 4) {
      const r = pixelArray[i];
      const g = pixelArray[i + 1];
      const b = pixelArray[i + 2];

      // If it's close to magenta, make it transparent
      if (r > 150 && b > 150 && g < 100) {
        pixelArray[i + 3] = 0; // Alpha = 0
      }
    }

    await sharp(pixelArray, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(outputPath);

    console.log('Successfully removed magenta background!');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBackground();
