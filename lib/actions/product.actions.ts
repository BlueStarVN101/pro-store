"use server";

import { prisma } from "@/lib/prisma";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}