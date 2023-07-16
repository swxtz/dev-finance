/*
  Warnings:

  - You are about to drop the `Transction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transction" DROP CONSTRAINT "Transction_idOwner_fkey";

-- DropTable
DROP TABLE "Transction";

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
