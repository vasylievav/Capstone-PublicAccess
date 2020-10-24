const { Campus, Student } = require("../db");
const router = require('express').Router();

router.get ('/', async (req, res, next) => {
  try{
    const allCampuses = await Campus.findAll();
    res.send (allCampuses);
  } catch (error) {
      next (error);
    }
});

router.get('/:id', async (req, res, next) => {
  try{
    const singleCampus = await Campus.findByPk( req.params.id, {
      include: { model: Student }
    });
    res.send (singleCampus);
  } catch (error) {
      next (error);
  }
});

router.post('/', async (req, res, next) => {
  try{ 
    const campus = await Campus.create(req.body);
    res.status(201).send(campus);
  } catch (error) {
      next (error);
  }
});

router.delete('/:campusId', async (req, res, next) => {
  try{
    const numberOfCampusesDeleted = await Campus.destroy({
      where: {
        id:req.params.campusId
      }
    });
    numberOfCampusesDeleted>0 ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
      next (error);
  }
});

module.exports = router;