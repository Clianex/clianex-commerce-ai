/*
  Warnings:

  - You are about to drop the column `active` on the `UserModule` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserModule` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[clerkUserId,moduleId]` on the table `UserModule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkUserId` to the `UserModule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `UserModule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserModule" DROP CONSTRAINT "UserModule_userId_fkey";

-- DropIndex
DROP INDEX "UserModule_userId_moduleId_key";

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserModule" DROP COLUMN "active",
DROP COLUMN "userId",
ADD COLUMN     "clerkUserId" TEXT NOT NULL,
ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE INDEX "UserModule_clerkUserId_idx" ON "UserModule"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "UserModule_clerkUserId_moduleId_key" ON "UserModule"("clerkUserId", "moduleId");
