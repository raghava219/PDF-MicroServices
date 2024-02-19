import express from 'express';
import htmlToPDF from '../helpers/html-to-pdf.js';

const router = express.Router();

router.post('/', async (req, res) => {

    const { html } = req.body;

    if (!html) {
        res.send(400).send('Request body should contain an html property.');
        return;
    }

    const pdf = await htmlToPDF(html);
    res.contentType('application/pdf');
    res.send(pdf);

});

export default router;