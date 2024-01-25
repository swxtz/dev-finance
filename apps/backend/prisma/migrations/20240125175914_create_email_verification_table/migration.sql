-- CreateTable
CREATE TABLE "VerificationEmails" (
    "id" STRING NOT NULL,
    "email_to_send" STRING NOT NULL,
    "token" STRING NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "verified" BOOL NOT NULL DEFAULT false,
    "verified_at" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationEmails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationEmails_email_to_send_key" ON "VerificationEmails"("email_to_send");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationEmails_token_key" ON "VerificationEmails"("token");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_email_fkey" FOREIGN KEY ("email") REFERENCES "VerificationEmails"("email_to_send") ON DELETE RESTRICT ON UPDATE CASCADE;
