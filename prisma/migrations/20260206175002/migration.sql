/*
  Warnings:

  - Added the required column `stripePriceId` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "stripePriceId" TEXT NOT NULL,
ALTER COLUMN "price" DROP DEFAULT;
