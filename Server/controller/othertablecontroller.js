let express = require('express');
let router = express.Router(); 
let validateSession = require('../middleware/validate-session');
let log = require('../db').import('../models/log');

/******POST LOG*******/

router.post('/create', validateSession, (req, res) => {
    let logWorkout = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner: req.user.id
    }
    log.create(logWorkout)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({error:err}))
})

/*****GET All LOGS******/

router.get('/', (req, res) => {
    log.findAll()
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({error: err}))
});

/*****GET USER LOGS******/

router.get('/mine', validateSession, (req, res) => {
    let userid = req.user.id
    log.findAll({
        where: { owner: userid } 
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => ({error: err}))
});
/*****GET LOG BY ID******/
router.get('/mine/:id', validateSession, (req, res) => {
    let userid = req.user.id
    log.findAll({
        where: { owner: userid } 
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => ({error: err}))
});

/*****UPDATE LOG******/
router.put('/update/:id', validateSession, (req, res) => {
    const updateWorkoutLog = {
        definition: req.body.log.definition,
        description: req.body.log.description,
        results: req.body.log.results
    };
    const query = { where: { id: req.params.id}};

    log.update(updateWorkoutLog, query)
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({error:err})
)});

/*****DELETE LOG******/
router.delete('/delete/:id', validateSession, (req, res) => {
    const query = { where: {id: req.params.id}};
        log.findOne(query)
    .then ((results) => {
        if (results) {
            log.destroy(query)
            .then(() => res.status(200).json({message: 'LOG DELETED'}));
        } else {
            res.status(502).send({ error:'LOG NOT FOUND'});
        }
    })
    .catch(err => res.status(500).json({error:err}));
});

module.exports = router