import prisma from "../db/connection.js";

export const getEmployees = async (req, res) => {
	try {
		const employees = await prisma.employee.findMany();
		res.json(employees);
	} catch (error) {
		res.status(500).json({ message: "Employees not found", error });
	}
};

export const getEmployee = async (req, res) => {
	try {
		const employee = await prisma.employee.findUnique({
			where: { id: parseInt(req.params.id) },
		});
		if (!employee)
			return res.status(404).json({ message: "Employee not found" });
		res.json(employee);
	} catch (error) {
		res.status(500).json({ message: "Employee not found", error });
	}
};

export const createEmployee = async (req, res) => {
	try {
		const newEmployee = await prisma.employee.create({
			data: req.body,
		});
		res.json(newEmployee);
	} catch (error) {
		res.status(500).json({ message: "Employee not created", error });
	}
};

export const updateEmployee = async (req, res) => {
	try {
		const updatedEmployee = await prisma.employee.update({
			where: { id: parseInt(req.params.id) },
			data: req.body,
		});

		if (!updatedEmployee)
			return res.status(404).json({ message: "Employee not found" });
		res.json(updatedEmployee);
	} catch (error) {
		res.status(500).json({ message: "Employee not updated", error });
	}
};

export const deleteEmployee = async (req, res) => {
	try {
		const deletedEmployee = await prisma.employee.delete({
			where: { id: parseInt(req.params.id) },
		});
		if (deletedEmployee)
			return res.status(404).json({ message: "Employee not found" });
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ message: "Employee not deleted" });
	}
};
