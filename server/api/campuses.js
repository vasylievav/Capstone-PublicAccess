const { Campus, Student } = require("../db");
const router = require('express').Router();

router.get ('/', async (req, res, next) => {
  try{
    const allCampuses = await Campus.findAll();
    res.send (allCampuses);
  } catch (error) {
      next(error);
    }
});

router.get('/:id', async (req, res, next) => {
  try{
    const singleCampus = await Campus.findByPk( req.params.id, {
      include: { model: Student }
    });
    res.send (singleCampus);
  } catch(error) {
      next(error);
  }
});

module.exports = router;