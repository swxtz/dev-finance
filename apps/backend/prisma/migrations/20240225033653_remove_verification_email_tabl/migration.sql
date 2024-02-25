/*
  Warnings:

  - You are about to drop the column `salts` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `VerificationEmails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_verificationEmailsId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "salts";
ALTER TABLE "users" ADD COLUMN     "confirmed" BOOL NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "VerificationEmails";
