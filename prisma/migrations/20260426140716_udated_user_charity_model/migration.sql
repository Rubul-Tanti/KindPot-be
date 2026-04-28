/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `subscription_orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "subscription_orders_userId_key" ON "subscription_orders"("userId");
