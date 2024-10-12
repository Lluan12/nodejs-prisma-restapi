import { connect } from "http2";
import prisma from "../db/connection.js";
import { getEmployee } from "./employees.controller.js";

export const getOrders = async (req, res) => {
	try {
		const orders = await prisma.order.findMany({
		});
		res.json(orders);
	} catch (error) {
		res.status(500).json({ message: "Order not found", error });
	}
};

export const getOrder = async (req, res) => {
	try {
		const order = await prisma.order.findUnique({
			where: { id: parseInt(req.params.id) },
		});
		if (!order) return res.status(404).json({ message: "Order not found" });
		res.json(order);
	} catch (error) {
		res.status(500).json({ message: "Order not found", error });
	}
};

export const createOrder = async (req, res) => {
	const { employeeId, customerId, products } = req.body
	console.log(employeeId);
	console.log(customerId)
	console.log(products)
	try {
		const newOrder = await prisma.order.create({
			data:{
				employeeId,
				customerId,
				orderProduct: {
					create: products.map(product => ({
						product: {
							update: {
								where: { id: product.productId },
								data: {
									stock: {
										decrement: product.quantity
									}
								}
							},
							connect: {
								id: product.productId,
							},
							
						},
						quantity: product.quantity, 
					}))
				}
			}
		})
		res.json(newOrder);
	} catch (error) {
		res.status(500).json({ message: "Order not created", error });
	}
};

export const updateOrder = async (req, res) => {
	try {
		const updatedOrder = await prisma.order.update({
			where: { id: parseInt(req.params.id) },
			data: req.body,
		});
		if (!updatedOrder)
			return res.status(404).json({ message: "Order not found" });
		res.json(updatedOrder);
	} catch (error) {
		res.status(500).json({ message: "Order not updated", error });
	}
};

export const deleteOrder = async (req, res) => {
	try {
		const deletedOrder = await prisma.order.delete({
			where: { id: parseInt(req.params.id) },
		});
		if (!deletedOrder)
			return res.status(404).json({ message: "Order not found" });
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ message: "Order not deleted", error });
	}
};
