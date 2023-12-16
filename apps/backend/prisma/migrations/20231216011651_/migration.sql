/*
  Warnings:

  - A unique constraint covering the columns `[email_owner]` on the table `balances` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email_owner` to the `balances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "balances" ADD COLUMN     "email_owner" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "balances_email_owner_key" ON "balances"("email_owner");
