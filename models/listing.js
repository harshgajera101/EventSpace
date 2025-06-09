const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string } = require("joi");

const listingSchema = new Schema({
  venueName: {
    type: String,
    required: true,
  },
  venueDescription: String,
  image: {
    url: String,
    filename: String,
  },
  eventRate: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  // category: {
  //   type: string,
  //   enum: [
  //     "Trending",
  //     "Beaches",
  //     "Mountains",
  //     "Swimmingpools",
  //     "IconicCity",
  //     "Rooms",
  //     "Frams",
  //     "Surfing",
  //     "Camping",
  //   ],
  //   required: true,
  // },
  // capacity: {
  //   type: Number,
  //   required: true,
  // },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
