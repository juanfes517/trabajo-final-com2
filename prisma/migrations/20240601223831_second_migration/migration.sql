/*
  Warnings:

  - You are about to drop the `InputValue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "InputValue";

-- CreateTable
CREATE TABLE "FormData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "FormData_pkey" PRIMARY KEY ("id")
);
