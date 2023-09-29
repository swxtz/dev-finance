/*
  Warnings:

  - You are about to drop the column `user_id` on the `balances` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "balances_user_id_key";

-- AlterTable
ALTER TABLE "balances" DROP COLUMN "user_id";
