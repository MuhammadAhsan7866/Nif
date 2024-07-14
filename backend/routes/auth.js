const express = require('express');
const router = express.Router();
const multer=require('multer');
const formData=multer()

// Login endpoint
router.post('/login',formData.none(), async (req, res) => {
    const { email, password } = req.body;
console.log(req.body);
    try {
        // Validate request body
        if (!email || !password) {
            return res.status(400).json({ message: "wrong credentials", status: false });
        }
        const result = {
            email, password
        }

        res.status(200).json({ status: true, data: result, message: 'login success' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;