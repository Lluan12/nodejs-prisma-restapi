import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

import customersRoutes from './routes/customers.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import productsRoutes from './routes/products.routes.js'
import ordersRoutes from './routes/orders.routes.js'

app.use(express.json());
app.use(morgan('dev'));

app.use('/', (req, res) => {
	res.send('Prueba de api con ORM prisma usando postgresql');
})

app.use('/customers', customersRoutes);
app.use('/employees', employeesRoutes);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.listen(port, () => {
	console.log(`Escuchando en el puerto: ${port}`);
})