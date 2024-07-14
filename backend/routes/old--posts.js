const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put('/:id', upload.single('file'), async (req, res) => {
  try {

    if (req.file) {
      const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      req.body.url = fileUrl;
      req.body.fileName = req.file.filename;
    }

    await Post.findByIdAndUpdate(req.params.id, req.body);
    const posts = await Post.findById(req.params.id);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', upload.single('file'), async (req, res) => {

  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  req.body.url = fileUrl;
  req.body.fileName = req.file.filename;
  const post = new Post(req.body);

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const posts = await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
