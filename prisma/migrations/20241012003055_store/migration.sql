/*
  Warnings:

  - You are about to drop the column `stock` on the `OrderProduct` table. All the data in the column will be lost.
  - Changed the type of `salary` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `quantity` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "salary",
ADD COLUMN     "salary" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "stock",
ADD COLUMN     "quantity" INTEGER NOT NULL;
