const { Campus, Student } = require("../db");
const router = require('express').Router();

router.get ('/', async (req, res, next) => {
  try{
   const allStudents = await Student.findAll();
    res.send (allStudents);
  } catch (error){
      next (error);
    }
});

router.get ('/:id', async (req, res, next) =>{
  try{
    const singleStudent = await Student.findByPk( req.params.id, {
      include: { model: Campus }
    });
    res.send (singleStudent);
  } catch (error){
      next (error)
  }
});

router.put('/', async (req, res, next) =>{
  try{
    const student = await Student.create(req.body);
    res.status(201).send(student);
  } catch (error){
      next (error)
  }
});

module.exports = router;