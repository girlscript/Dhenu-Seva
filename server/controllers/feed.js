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