/*
  Warnings:

  - You are about to drop the `FormData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FormData";

-- CreateTable
CREATE TABLE "formData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "formData_pkey" PRIMARY KEY ("id")
);
