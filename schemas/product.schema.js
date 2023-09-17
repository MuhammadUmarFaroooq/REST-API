const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "products",
    timestamps: true
});

module.exports = mongoose.model("Products", productsSchema);
