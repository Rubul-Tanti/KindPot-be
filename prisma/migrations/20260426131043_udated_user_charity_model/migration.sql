/*
  Warnings:

  - A unique constraint covering the columns `[subscriptionId]` on the table `user_charities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_charities_subscriptionId_key" ON "user_charities"("subscriptionId");
