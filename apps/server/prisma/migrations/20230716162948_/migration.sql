/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `users` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "CreatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "rule" "UserRoles" NOT NULL DEFAULT 'USER',
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "idOwner" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_idOwner_fkey" FOREIGN KEY ("idOwner") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
