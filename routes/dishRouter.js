const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req,res,next) => {
    res.end('Will Send all the dishes to you');
})
.post( (req,res,next) => {
    res.end('Will Add all the dishes: ' + req.body.name + 'with details: ' + req.body.description);
})
.delete( (req,res,next) => {
    res.end('Deleting all the dishes');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT Operation not supported on /dishes');
});



dishRouter.route('/:dishId').all((req,res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req,res,next) => {
    res.end('Will Send details of the dish: ' +req.params.dishId + ' with details: ' + req.body.description);
}).post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST Operation not supported on /dishes/' + req.params.dishId);
}).delete( (req,res,next) => {
    res.end('Deleting all the dishes: ' + req.params.dishId);
}).put((req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n')
    res.end('Will update the dish: ' + req.body.name + ' with details: '+ req.body.description);
});

module.exports = dishRouter;