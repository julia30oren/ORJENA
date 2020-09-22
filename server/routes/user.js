const express = require('express');
const router = express.Router();
const UserSchema = require('./register/register-model');

router.get("/:id", async(req, res) => {
    try {
        const user = await UserSchema.find({ "_id": req.params.id });
        return res.status(200).send(user)
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

router.post("/new-favorites", async(req, res) => {
    try {
        const user = await UserSchema.update({ "_id": req.body._id }, {
            $set: {
                "favorites": req.body.favorites,
            }
        });
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

router.post("/new-cart", async(req, res) => {
    // console.log(req.body._id, req.body.cart)
    try {
        const user = await UserSchema.update({ "_id": req.body._id }, {
            $set: {
                "cart": req.body.cart,
            }
        });
        return res.status(200).send({ message: 'good' })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

module.exports = router;