import express from 'express';
import htmlToPDF from '../helpers/html-to-pdf.js';

const router = express.Router();

router.get('/', async (req, res) => {

    const pdf = await htmlToPDF('<html><body><h1>Conversion Controller in PDF</h1></body></html>');
    res.contentType('application/pdf');
    res.send(pdf);

});

export default router;