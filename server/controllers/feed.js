
const Post = require('../models/post');
const User = require('../models/user');

// the getPosts function will get all the posts of the doctors

exports.getPosts = async (req, res, next) => {
  try {
    let posts = await Post.find()
    res
      .status(200)
      .json({
        message: 'Fetched posts successfully.',
        posts: posts,
      });
  }
  catch (error) {
    console.log(error)
  }
}
// the createPost function to get the detailed information about the doctor

exports.createPost = async (req, res, next) => {

  const { reg_no, phone_no, gender, qualification, experience,
    specialist, fees, timings, address, name_of_clinic, state, city, pin_code
  } = req.body

  let admin;

  try {
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
    let result = await post.save();
    let user = await User.findById(req.userId);
    admin = user;
    user.posts.push(post);

    let savedUser = await user.save();
    res.status(201).json({
      message: 'Created the post successfully',
      post: post,
      admin: {
        _id: admin._id,
        name: admin.name
      }
    });
  }
  catch (error) {
    console.log(error)
  }
}
// getPost function to fetch a single post of the doctor

exports.getPost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    let post = await Post.findById(postId)
    if (!post) {
      const error = new Error('Could not find post.');
      throw error;
    }
    res.status(200).json({
      message: 'Post fetched.',
      post
    });
  }
  catch (error) {
    console.log(error)
  }
}

// updatePost function for the doctor to update his details

exports.updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {

    const { reg_no, phone_no, gender, qualification, experience,
      specialist, fees, timings, address, name_of_clinic,
      state, city, pin_code
    } = req.body

    let post = await Post.findById(postId)

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

    let result = await post.save();

    res.status(200).json({
      message: 'Post updated successful!',
      post: result
    })
  }
  catch (error) {
    console.log(error)
  }
}

// delete post for doctor //

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    let post = await Post.findById(postId)

    if (!post) {
      const error = new Error('Could not find post.');
      throw error;
    }

    // only the creator is allowed to delete

    if (post.creator.toString() !== req.userId) {
      const error = new Error('Not authorized!');
      throw error;
    }

    let result = await Post.findByIdAndRemove(postId);
    let user = await User.findById(req.userId);

    user.posts.pull(postId);

    let savedUser = await user.save();

    res.status(200).json({
      message: 'Deleted post successfully.'
    });
  }
  catch (error) {
    console.log(error)
  }
}