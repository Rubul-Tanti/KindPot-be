/*
  Warnings:

  - You are about to drop the column `isActiveChoice` on the `user_charities` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `user_charities` table. All the data in the column will be lost.
  - Added the required column `subscriptionId` to the `user_charities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_charities" DROP COLUMN "isActiveChoice",
DROP COLUMN "reference",
ADD COLUMN     "subscriptionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "user_charities" ADD CONSTRAINT "user_charities_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "subscription_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
