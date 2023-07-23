/*
  Warnings:

  - Made the column `date` on table `transactions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "date" SET NOT NULL;
