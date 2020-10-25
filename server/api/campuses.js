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
    numberOfCampusesDeleted>0 ? res.sendStatus(204) : 
          res.status(404).send('Campus was Not found in DB');
  } catch (error) {
      next (error);
  }
});

router.put('/:campusId', async (req, res, next) => {
  try{
    const campusToUpdate = await Campus.update(req.body, {
      returning: true,
      where: {id: req.params.campusId}
    });
    const [numUpdated, [updatedCampus]] = campusToUpdate;
    numUpdated>0 ? res.send(updatedCampus) :
      res.status(404).send('Campus was Not found in DB');
  } catch (error) {
    next (error);
  }
});

module.exports = router;