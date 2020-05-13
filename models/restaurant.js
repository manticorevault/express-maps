const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [
            {
                type: Number,
                min: -180,
                max: 180

            }
        ]
    }
});

//TRack records on MongoDB based on their coordinates.
restaurantSchema.index({ location: "2dsphere" });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;