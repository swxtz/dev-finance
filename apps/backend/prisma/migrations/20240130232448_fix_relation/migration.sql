/*
  Warnings:

  - A unique constraint covering the columns `[owner_id]` on the table `VerificationEmails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[verificationEmailsId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner_id` to the `VerificationEmails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verificationEmailsId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_email_fkey";

-- AlterTable
ALTER TABLE "VerificationEmails" ADD COLUMN     "owner_id" STRING NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "verificationEmailsId" STRING NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VerificationEmails_owner_id_key" ON "VerificationEmails"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_verificationEmailsId_key" ON "users"("verificationEmailsId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_verificationEmailsId_fkey" FOREIGN KEY ("verificationEmailsId") REFERENCES "VerificationEmails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
