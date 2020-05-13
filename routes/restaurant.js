const express = require("express");
const restaurantRouter = new express.Router();
const Restaurant = require("./../models/restaurant");

restaurantRouter.get("/list", (req, res, next) => {
    Restaurant.find()
        .then(restaurant => {

            res.render("restaurant/list", { restaurant });
        });
});

restaurantRouter.get("/create", (req, res, next) => {
    res.render("restaurant/create");
});

restaurantRouter.post("/create", (req, res, next) => {
    const name = req.body.name;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    Restaurant.create({
        name,
        location: {
            type: "Point",
            coordinates: [longitude, latitude]
        }
    })
    .then(restaurant => {
        res.redirect("/restaurant/list");
    })
    .catch(error => {
        next(error);
    });
        
});

module.exports = restaurantRouter;