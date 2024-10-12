-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("orderId", "productId");
