/*
  Warnings:

  - A unique constraint covering the columns `[balance_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "balances" DROP CONSTRAINT "balances_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "balance_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_balance_id_key" ON "users"("balance_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_balance_id_fkey" FOREIGN KEY ("balance_id") REFERENCES "balances"("id") ON DELETE SET NULL ON UPDATE CASCADE;
