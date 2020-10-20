const { Campus } = require("../db");
const router = require('express').Router();

router.get ('/',async (req, res, next) => {
  try{
   const allCampuses = await Campus.findAll();
    res.send(allCampuses);
  } catch (error){
      next(error);
    }
});

module.exports = router;