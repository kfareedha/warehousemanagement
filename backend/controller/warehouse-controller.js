import product from "../models/productModel.js";
import warehouse from "../models/wareModel.js";

//add product

export const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { productName, price, stock, ware } = req.body;

    if (!req.body) {
      return res.status(400).json({ message: "Please enter a Product" });
    }
    const newProduct = await new product({
      productName,
      price,
      stock,
      warehouse: ware,
    });
    newProduct.save();
    res.json({ newProduct });
  } catch (error) {
    console.log(error);
  }
};

// add warehouse

export const addWarehouse = async (req, res) => {
  console.log(req.body);
  const { warehouseName } = req.body;
  console.log(warehouseName);

  if (!req.body) {
    return res.status(400).json({ message: "Please enter warehouse" });
  }
  const newWarehouse = await new warehouse({
    warehouseName,
  });
  newWarehouse.save();
  res.json({ newWarehouse });
};

// get all products

export const getAllproducts = async (req, res) => {
  try {
    console.log("uuuuu");
    const products = await product.find().populate("warehouse");
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// get all warehouses

export const getAllware = async (req, res) => {
  try {
    console.log("ppp");
    const warehouses = await warehouse.find();
    console.log(warehouses, "wareeeee");

    res.status(200).json(warehouses);
  } catch (error) {
    res.status(500).json(error);
  }
};
