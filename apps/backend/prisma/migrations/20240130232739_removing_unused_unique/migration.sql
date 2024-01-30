/*
  Warnings:

  - You are about to drop the column `owner_id` on the `VerificationEmails` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "VerificationEmails_owner_id_key";

-- AlterTable
ALTER TABLE "VerificationEmails" DROP COLUMN "owner_id";
