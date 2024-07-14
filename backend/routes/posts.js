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
    console.log('blogs fetched successfully');
    res.json({ status: true,posts, message: 'blogs fetched successfully' });
  } catch (err) {
    res.json({ message: err, status: false });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id);
    res.json({status:true,data:posts,message:'post fetched'});
  } catch (err) {
    res.json({ message: err,status:false });
  }
});

router.put('/:id', upload.single('file'), async (req, res) => {
  console.log(req.params.id);
  try {

    if (req.file) {
      const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      req.body.url = fileUrl;
      req.body.fileName = req.file.filename;
    }

    await Post.findByIdAndUpdate(req.params.id, req.body);
    const posts = await Post.findById(req.params.id);
    res.json({ status: true, data: posts, message: 'blod edited successfully' });
  } catch (err) {
    res.json({ message: err, status: false });
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
    res.json({ status: true, data: savedPost, message: 'post saved' });
  } catch (err) {
    res.json({ message: err, status: false });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const posts = await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully", status: true });
  } catch (err) {
    res.json({ message: err.message, status: false });
  }
});

module.exports = router;
