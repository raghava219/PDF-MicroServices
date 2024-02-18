import express from 'express';
import conversionController from './controllers/conversions.js';

const PORT = 5001;

class Application {
    static async main() {

        const app = express();

        app.use('/conversions', conversionController);

        app.listen(PORT, () => {
            console.log(`Application listening on port ${PORT}...`);
        });
    }
}

export default Application;