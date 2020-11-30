const express = require("express");
const router = express.Router();

const {
  
    createUser,
    getuser,
    getAllUser,
    updateUser,
    removeuser,
    getUserById
} = require("./Controller/User");

router.param("userid", getUserById);
//create
router.post(
    "/user/create",
    createUser,
  );
//read
router.get("/user", getAllUser);

//update
router.put(
  "/user/:userid",updateUser
);

router.delete("/user/:userid",removeuser);
  


module.exports = router;
