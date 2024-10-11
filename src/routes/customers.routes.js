import { Router } from "express";
import {
	getCustomers,
	getCustomer,
	createCustomer,
	updateCustomer,
	deleteCustomer,
} from "../controllers/customers.controller.js";

const router = Router();

router.get("/", getCustomers);
router.get("/:id", getCustomer);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
