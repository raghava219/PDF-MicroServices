import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Conversion controller");
});

export default router;