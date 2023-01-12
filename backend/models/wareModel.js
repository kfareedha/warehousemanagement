import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema({
  warehouseName: {
    type: String,
  },
});

export default mongoose.model("Warehouses", warehouseSchema);
