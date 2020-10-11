
const Post = require('../models/post');
const User = require('../models/user');

// the getPosts function will get all the posts of the doctors

exports.getPosts = (req, res, next) => {
    Post.find()
      .then(posts => {
        res
          .status(200)
          .json({
            message: 'Fetched posts successfully.',
            posts: posts,
          });
      })
      .catch(err => {
        console.log(err)
      });
  };
  
  // the createPost function to get the detailed information about the doctor
  
  exports.createPost = (req, res, next) => {
  
    const { reg_no ,phone_no ,gender ,qualification ,experience,
           specialist ,fees ,timings ,address ,name_of_clinic ,state,city ,pin_code
     } = req.body
  
    let admin;
  
    const post = new Post({
      reg_no,
      phone_no,
      gender,
      qualification,
      experience,
      specialist,
      fees,
      timings,
      address,
      name_of_clinic,
      state,
      city,
      pin_code,
      creator: req.userId
    });
    post
      .save()
      .then(result => {
        return User.findById(req.userId);
      })
      .then(user => {
        admin = user;
        user.posts.push(post);
        return user.save();
      })
      .then(result => {
        res.status(201).json({
          message: 'Created the post successfully',
          post: post,
          admin: {
             _id: admin._id,
              name: admin.name
            }
        });
      })
      .catch(err => {
        console.log(err)
      });
  };

  // getPost function to fetch a single post of the doctor

  exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId)
      .then(post => {
        if (!post) {
          const error = new Error('Could not find post.');
          throw error;
        }
        res.status(200).json({ 
          message: 'Post fetched.', 
          post
         });
      })
      .catch(err => {
        console.log(err)
      });
  };

  // updatePost function for the doctor to update his details

  exports.updatePost = (req, res, next) => {
    const postId = req.params.postId;
    
    const { reg_no ,phone_no ,gender ,qualification ,experience,
            specialist ,fees ,timings ,address ,name_of_clinic ,
            state,city ,pin_code
          } = req.body

    Post.findById(postId)
      .then(post => {
        if (!post) {
          const error = new Error('Could not find post.');
          throw error;
        }

        // only the creator is allowed to update

        if (post.creator.toString() !== req.userId) {
          const error = new Error('Not authorized! You are not allowed to update the details');
          throw error;
        }

        post.reg_no = reg_no;
        post.phone_no = phone_no;
        post.gender = gender;
        post.qualification = qualification;
        post.experience = experience;
        post.specialist = specialist;
        post.fees = fees;
        post.timings = timings;
        post.address = address;
        post.name_of_clinic = name_of_clinic;
        post.state = state;
        post.city = city;
        post.pin_code = pin_code;

        return post.save();
      })
      .then(result => {
        res.status(200).json({ 
          message: 'Post updated successful!', 
          post: result 
        });
      })
      .catch(err => {
        console.log(err)
      });
  };