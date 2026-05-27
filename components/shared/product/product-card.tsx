import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "./product-price";
import { Product } from "@/types";
//create interface for product


const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="w-full h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 bg-gray-200">
            <Image
              src={product.images?.[0] || "/images/placeholder.jpg"}
              alt={product.name}
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold truncate">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
          <div className="flex justify-between items-center">
             <ProductPrice price = {product.price} stock={product.stock} />
            {product.rating && (
              <span className="text-sm text-yellow-500">★ {product.rating}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
