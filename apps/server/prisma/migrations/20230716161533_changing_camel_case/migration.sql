/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `users` table. All the data in the column will be lost.
  - The `rule` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `surname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "CreatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "surname" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "rule",
ADD COLUMN     "rule" "UserRoles" NOT NULL DEFAULT 'USER';

-- DropEnum
DROP TYPE "Rule";


-- Drop "users" table

DROP TABLE "transactions";

DROP TABLE "users";

-- Create "users" table

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
  	"surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");



