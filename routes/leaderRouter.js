const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res, next) => {
    res.end('Will Send all the leaders');
})
    .post((req, res, next) => {
        res.end('Will Add all the leaders: ' + req.body.name + 'with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting all the leaders');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT Operation not supported on /leaders');
    });



leaderRouter.route('/:leaderId').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res, next) => {
    res.end('Will Send details of the leader: ' + req.params.leaderId + ' with details: ' + req.body.description);
}).post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST Operation not supported on /leaders/' + req.params.leaderId);
}).delete((req, res, next) => {
    res.end('Deleting all the leaders: ' + req.params.leaderId);
}).put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n')
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

module.exports = leaderRouter;