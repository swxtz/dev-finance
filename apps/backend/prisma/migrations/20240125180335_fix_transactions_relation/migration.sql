/*
  Warnings:

  - You are about to drop the column `salts` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_owner_id_fkey";

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "userId" STRING;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "salts";

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
