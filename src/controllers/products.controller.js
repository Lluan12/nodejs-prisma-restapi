import prisma from "../db/connection.js";

export const getProducts = async (req, res) => {
	try {
		const products = await prisma.product.findMany();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: "Product not found", error });
	}
};

export const getProduct = async (req, res) => {
	try {
		const product = await prisma.product.findUnique({
			where: { id: parseInt(req.params.id) },
		});
		if (!product)
			return res.status(404).json({ message: "Product not found" });
		res.json(product);
	} catch (error) {
		res.status(500).json({ message: "Product not found", error });
	}
};

export const createProduct = async (req, res) => {
	try {
		const newProduct = await prisma.product.create({
			data: req.body,
		});
		res.json(newProduct);
	} catch (error) {
		res.status(500).json({ message: "Product not created", error });
	}
};

export const updateProduct = async (req, res) => {
	try {
		updatedProduct = await prisma.product.update({
			where: { id: parseInt(req.params.id) },
			data: req.body,
		});
		if (!updatedProduct)
			return res.status(404).json({ message: "Product not found" });
		res.json(updateProduct);
	} catch (error) {
		res.status(500).json({ message: "Product not updated", error });
	}
};

export const deleteProduct = async (req, res) => {
	try {
		deletedProduct = await prisma.product.delete({
			where: { id: parseInt(req.params.id) },
		});
		if (!deleteProduct)
			return res.status(404).json({ message: "Product not found" });
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ message: "Product not deleted", error });
	}
};
