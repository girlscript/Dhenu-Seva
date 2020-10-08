const express = require('express');
const feedController = require('../controllers/feed');

const router = express.Router();

// ** get method to get list of doctors ** // 

router.get(
    '/posts', 
    feedController.getPosts
);

// ** post method to add doctor details ** // 

router.post(
    '/post',
    feedController.createPost
  );
  
module.exports = router;
