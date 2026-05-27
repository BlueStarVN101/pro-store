import {z} from 'zod';

// Schema for in
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    category: z.string().min(3, 'Category must be at least 3 characters long'),
    brand: z.string().min(3, 'Brand must be at least 3 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    stock: z.coerce.number().min(0, 'Stock must be a positive number'),
    images : z.array(z.string().min(1, 'Image URL must be at least 1 character long')),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),



})