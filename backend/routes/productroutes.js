import { Router } from "express";
const router = Router();
import {
  addProduct,
  addWarehouse,
  getAllproducts,
  getAllware,
} from "../controller/warehouse-controller.js";

router.post("/addwarehouse", addWarehouse);
router.post("/addproduct", addProduct);
router.get("/getware", getAllware);
router.get("/getproducts", getAllproducts);

export default router;
