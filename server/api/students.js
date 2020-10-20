const { Student } = require("../db");
const router = require('express').Router();

router.get ('/',async (req, res, next) => {
  try{
   const allStudents = await Student.findAll();
    res.send(allStudents);
  } catch (error){
      next(error);
    }
});

module.exports = router;