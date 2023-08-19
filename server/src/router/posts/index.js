import express from 'express';

const router = express.Router();


router.get('/me', (req, res) => {
    res.json({ message: "working posts" })
})



export default router;