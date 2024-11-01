import mongoose from "mongoose";

const productSchema = new mangoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // It will capture created time and Updated time
});

const Product = mongoose.model('Product', productSchema);

export default Product;