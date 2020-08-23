const express = require("express")
const knex = require("knex")
const db = require("../data/config")

const router = express.Router()

// GET ALL CARS
router.get("/cars", async (req, res, next) => {
	try {
		res.json(await db("cars"))
	} catch(err) {
		next(err)
	}
})

// GET ALL CARS BY ID
router.get("/cars/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const car = await db("cars").where({ id }).first()
		
		res.json(car)
	} catch(err) {
		next(err)
	}
})

// CREATE NEW CAR
router.post("/cars", async (req, res, next) => {
	try {
		const [id] = await db("cars").insert(req.body)
		const newCar = await db("cars").where({ id }).first()

		res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})

// UPDATE CAR
router.put("/cars/:id", async (req, res, next) => {
    try {
        await db("cars")
            .update({
                vin: req.body.vin,
                make: req.body.make,
                model: req.body.model,
                mileage: req.body.mileage,
                transmission: req.body.transmission,
                title: req.body.title
            })
            .where("id", req.params.id)

        const car = await db("cars")
            .where("id", req.params.id)
            .first()
        
        res.json(car)

    } catch (err) {
        next(err)
    }
})

// DELETE CAR
router.delete("/cars/:id", async (req, res, next) => {
    try {
        await db("cars")
            .where("id", req.params.id)
            .del()

        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router