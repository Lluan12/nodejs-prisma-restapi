import { Router } from "express";
import {
	getOrders,
	getOrder,
	createOrder,
	updateOrder,
	deleteOrder,
} from "../controllers/orders.controller.js";

const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
