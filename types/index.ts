import { insertProductSchema } from "@/lib/validators";
import z from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  rating?: number;
  images?: string[];
}