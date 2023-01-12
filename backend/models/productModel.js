import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  stock: {
    type: Number,
  },

  warehouse: {
    type: Schema.Types.ObjectId,
    ref: "Warehouses",
    required: true,
  },
});

export default mongoose.model("Products", productSchema);
