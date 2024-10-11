import { Router } from "express";
import {
	getEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
