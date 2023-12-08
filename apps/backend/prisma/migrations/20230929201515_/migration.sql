/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `balances` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `balances` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_balance_id_fkey";

-- AlterTable
ALTER TABLE "balances" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "balances_user_id_key" ON "balances"("user_id");

-- AddForeignKey
ALTER TABLE "balances" ADD CONSTRAINT "balances_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
