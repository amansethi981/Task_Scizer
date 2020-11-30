const User = require("../Models/Usermodel");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "user not found in DB"
      });
    }
    req.user = cate;
    next();
  });
};

exports.createUser = (req, res) => {
  const {name, number} = req.body;
  console.log(req.body)
  const user = new User({name, number});
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err
      });
    }
    res.json({ user });
  });
};  


exports.getuser = (req, res) => {
  return res.json(req.user);
};

exports.getAllUser = (req, res) => {
    let sortBy = req.query.sortBy ? req.query.sortBy : "number";

    User.find()
    .sort([[sortBy, "asc"]])
    .exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: "NO user found"
      });
    }
    res.json(users);
  });
};
exports.updateUser = (req, res) => {
    const user = req.user;
    console.log(user);
    user.name = req.body.name;
    user.number=req.body.number;
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update category"
        });
      }
      res.json(updatedUser);
    });

  };

exports.removeuser=(req,res)=>{
const user = req.user;
console.log(user);
user.remove((err,deleteuser)=>{
    if(err){
        return res.status(400).json({
            error:"Failed to delete this category"
        });
    }
    res.json({
        message:"Succesfull deleted",
        deleteuser
    });
});
};

