-- CreateEnum
CREATE TYPE "DrawStatus" AS ENUM ('active', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "WinnerType" AS ENUM ('fiveMatch', 'fourMatch', 'threeMatch');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "WinnerPaymentStatus" AS ENUM ('pending', 'paid', 'failed');

-- CreateTable
CREATE TABLE "Draw" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "prizePool" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "entryStartDate" TIMESTAMP(3) NOT NULL,
    "lastEntryDate" TIMESTAMP(3) NOT NULL,
    "resultDate" TIMESTAMP(3) NOT NULL,
    "drawNumber" TEXT NOT NULL,
    "status" "DrawStatus" NOT NULL DEFAULT 'active',
    "fiveMatchPct" INTEGER NOT NULL DEFAULT 40,
    "fourMatchPct" INTEGER NOT NULL DEFAULT 35,
    "threeMatchPct" INTEGER NOT NULL DEFAULT 25,
    "jackpotRolledOver" BOOLEAN NOT NULL DEFAULT false,
    "rolledOverFromId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Draw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Winner" (
    "id" TEXT NOT NULL,
    "drawId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "winnerType" "WinnerType" NOT NULL,
    "winnerScore" TEXT NOT NULL,
    "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'pending',
    "paymentStatus" "WinnerPaymentStatus" NOT NULL DEFAULT 'pending',
    "proofImage" TEXT,
    "prizeAmount" INTEGER,
    "adminNotes" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Winner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Draw_drawNumber_key" ON "Draw"("drawNumber");

-- AddForeignKey
ALTER TABLE "Draw" ADD CONSTRAINT "Draw_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Draw" ADD CONSTRAINT "Draw_rolledOverFromId_fkey" FOREIGN KEY ("rolledOverFromId") REFERENCES "Draw"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winner" ADD CONSTRAINT "Winner_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Draw"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winner" ADD CONSTRAINT "Winner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
