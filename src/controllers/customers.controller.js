import prisma from "../db/connection.js";

export const getCustomers = async (req, res) => {
	try {
		const customers = await prisma.customer.findMany();
		res.json(customers);
	} catch (error) {
		res.status(500).json({ message: "Customer not found", error });
	}
};

export const getCustomer = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const customer = await prisma.customer.findUnique({
			where: { id: id },
		});
		if (!customer)
			return res.status(404).json({ message: "Customer not found" });
		res.json(customer);
	} catch (error) {
		res.status(500).json({ message: "Customer not found", error });
	}
};

export const createCustomer = async (req, res) => {
	try {
		const newCustomer = await prisma.customer.create({
			data: req.body
		});
		res.json(newCustomer);
	} catch (error) {
		res.status(500).json({ message: "Customer not created", error });
	}
};

export const updateCustomer = async (req, res) => {
	try {
		const updatedCustomer = await prisma.customer.update({
			where: { id: parseInt(req.params.id) },
			data: req.body,
		});
		if (!updatedCustomer)
			return res.status(404).json({ message: "Customer not found" });
		res.json(updatedCustomer);
	} catch (error) {
		res.status(500).json({ message: "Customer not updated", error });
	}
};

export const deleteCustomer = async (req, res) => {
	try {
		const deletedCustomer = await prisma.customer.delete({
			where: { id: parseInt(req.params.id) },
		});
		if (!deletedCustomer)
			return res.status(404).json({ message: "Customer not found" });
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ message: "Customer not deleted", error });
	}
};
