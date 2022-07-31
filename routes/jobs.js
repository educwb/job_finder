const express = require('express');
const router = express.Router();
const Job = require('../models/Job.js');

// rota para adicionar um novo job
router.post('/add', (req, res) => {
  let { title, description, salary, company, email, new_job } = req.body;
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/test', (req, res) => {
  res.send('Rota Job de teste!');
});

module.exports = router;