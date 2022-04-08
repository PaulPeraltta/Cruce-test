const { Router } = require('express');
const axios = require('axios');
const { Product } = require("../db");

const router = Router();

router.get('/', (req, res, next) => {
    return Product.findAll()
    .then((p) => res.send(p))
})

router.get('/:id', (req, res, next) => {
    const ID = req.params.id;
    return Product.findByPk(ID)
    .then((p) => res.send(p))
    .catch((e) => next(e))
})

router.post('/', (req, res, next) => {
    const { name, image, price, category, stock, discount, term } = req.body;
    return Product.create({
        name, image, price, category, stock, discount, term
    })
    .then((e) => {
        res.send("Congratulations! Your product has been published")
    })
    .catch((e) => next(e))
})

router.put('/:id', (req, res, next) => {
    const ID = req.params.id;
    const { name, image, price, category, stock, discount, term } = req.body;
    return Product.update({name, image, price, category, stock, discount, term}, {
        where: {
            id: ID,
        }
    })
    .then((e) => {
        res.send("Your product has been updated")
    })
    .catch((e) => next(e))
})

router.delete('/:id', (req, res, next) => {
    const ID = req.params.id;
    return Product.destroy({
        where: {
            id: ID,
        }
    })
    .then((e) => {
        res.send("Your product has been deleted")
    })
    .catch((e) => next(e))
})


module.exports = router;
