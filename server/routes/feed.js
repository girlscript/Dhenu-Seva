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

// ** get method to fetch individual doctor detail ** // 

router.get(
    '/post/:postId',
    feedController.getPost
 );

 // ** put method to update individual doctor detail ** // 

router.put(
    '/post/:postId',
    feedController.updatePost
);

 // ** delete method to delete individual doctor detail ** // 

router.delete(
    '/post/:postId',
     feedController.deletePost
);
  
module.exports = router;
