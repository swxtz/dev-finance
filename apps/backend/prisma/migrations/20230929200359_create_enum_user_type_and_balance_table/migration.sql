/*
  Warnings:

  - Added the required column `balance_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'USER', 'BETA_USER');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "balance_id" TEXT NOT NULL,
ADD COLUMN     "user_type" "UserType"[];

-- CreateTable
CREATE TABLE "balances" (
    "id" TEXT NOT NULL,
    "income" BIGINT NOT NULL,
    "expense" BIGINT NOT NULL,
    "balance" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "balances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_balance_id_fkey" FOREIGN KEY ("balance_id") REFERENCES "balances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
