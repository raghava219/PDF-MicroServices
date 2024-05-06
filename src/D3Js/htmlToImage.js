
const fs = require('fs');
const path = require('path');
const htmlImage = require('html-to-image');
const puppeteer = require('puppeteer');

(async () => {
    // Read the HTML template
    const htmlTemplate = fs.readFileSync(path.join(__dirname, 'simple-graph.html'), 'utf8');

    // Launch a new browser instance
    const browser = await puppeteer.launch();

    // Convert the HTML template to an image buffer
    const imageBuffer = await htmlImage.convert(htmlTemplate, {
        browser,
        type: 'png',
        puppeteerArgs: {
            defaultViewport: {
                width: 800,
                height: 600,
            },
        },
    });

    // Save the image buffer to a file
    fs.writeFileSync(path.join(__dirname, 'output.png'), imageBuffer);

    // Close the browser instance
    await browser.close();

    console.log('NodeJS HTML to Image conversion successful. Output image saved as output.png.');
})();
