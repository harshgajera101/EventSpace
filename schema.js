const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    venueName: Joi.string().required(),
    eventRate: Joi.number().required().min(0),
    capacity: Joi.number().required().min(0),
    venueDescription: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    // image: Joi.string().allow("", null),
    venueType: Joi.string()
      .valid(
        "Banquet Halls",
        "Open Lawns / Gardens",
        "Rooftop Venues",
        "Hotels & Resorts",
        "Auditoriums",
        "Beachside Venues",
        "Heritage Properties"
      )
      .required(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().required().min(1).max(5),
  }).required(),
});
