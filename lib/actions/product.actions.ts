"use server";

import { prisma } from "../prisma";


// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return data.map((product) => ({
    ...product,
    images: product.images as string[],
    price: Number(product.price),
    rating: Number(product.rating),
  }));
}