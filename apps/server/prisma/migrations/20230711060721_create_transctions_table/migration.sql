-- CreateTable
CREATE TABLE "Transction" (
    "id" TEXT NOT NULL,
    "idOwner" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Transction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transction" ADD CONSTRAINT "Transction_idOwner_fkey" FOREIGN KEY ("idOwner") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
