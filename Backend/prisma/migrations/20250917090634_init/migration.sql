-- CreateTable
CREATE TABLE "public"."Datapersonal" (
    "id" SERIAL NOT NULL,
    "firs_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,

    CONSTRAINT "Datapersonal_pkey" PRIMARY KEY ("id")
);
