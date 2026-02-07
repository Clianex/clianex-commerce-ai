-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('PAID', 'REFUNDED', 'FAILED');

-- AlterTable
ALTER TABLE "UserModule" ADD COLUMN     "activePurchaseId" TEXT;

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "stripeEventId" TEXT NOT NULL,
    "stripePaymentIntent" TEXT NOT NULL,
    "stripeChargeId" TEXT,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "status" "PurchaseStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "refundedAt" TIMESTAMP(3),

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_stripeEventId_key" ON "Purchase"("stripeEventId");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_stripePaymentIntent_key" ON "Purchase"("stripePaymentIntent");

-- CreateIndex
CREATE INDEX "Purchase_clerkUserId_idx" ON "Purchase"("clerkUserId");

-- CreateIndex
CREATE INDEX "Purchase_moduleId_idx" ON "Purchase"("moduleId");

-- AddForeignKey
ALTER TABLE "UserModule" ADD CONSTRAINT "UserModule_activePurchaseId_fkey" FOREIGN KEY ("activePurchaseId") REFERENCES "Purchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;
