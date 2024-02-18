import express from 'express';

const PORT = 5001;

class Application {
    static async main() {

        const app = express();

        app.get("/", (req, res) => {
            res.send('Test endpoint');
        });

        app.listen(PORT, () => {
            console.log(`Application listening on port ${PORT}...`);
        });
    }
}

export default Application;