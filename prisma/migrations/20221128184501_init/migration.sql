-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);
