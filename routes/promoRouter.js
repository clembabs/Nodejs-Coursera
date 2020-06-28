const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req,res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req,res,next) => {
    res.end('Will Send all the promotions');
})
.post( (req,res,next) => {
    res.end('Will Add all the promotions: ' + req.body.name + 'with details: ' + req.body.description);
})
.delete( (req,res,next) => {
    res.end('Deleting all the promotions');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT Operation not supported on /promotions');
});



promoRouter.route('/:promoId').all((req,res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req,res,next) => {
    res.end('Will Send details of the promo: ' +req.params.promoId + ' with details: ' + req.body.description);
}).post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST Operation not supported on /promotions/ ' + req.params.promoId);
}).delete( (req,res,next) => {
    res.end('Deleting all the promotions: ' + req.params.promoId);
}).put((req,res,next) => {
    res.write('Updating the promo: ' + req.params.promoId + '\n')
    res.end('Will update the promo: ' + req.body.name + ' with details: '+ req.body.description);
});

module.exports = promoRouter;