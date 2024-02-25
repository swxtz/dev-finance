/*
  Warnings:

  - You are about to drop the column `confirmed` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verificationEmailsId` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_verificationEmailsId_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "confirmed";
ALTER TABLE "users" DROP COLUMN "verificationEmailsId";
ALTER TABLE "users" ADD COLUMN     "email_confirmed" BOOL NOT NULL DEFAULT false;
