-- AlterTable
ALTER TABLE "users" ALTER COLUMN "user_type" SET DEFAULT ARRAY['USER']::"UserType"[];
