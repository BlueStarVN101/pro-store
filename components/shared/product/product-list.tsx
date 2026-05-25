import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any[];
  title?: string;
  limit?: number;
}) => {
  const displayedData = typeof limit === "number" ? data.slice(0, limit) : data;

  return (
    <div className="wrapper px-20">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {displayedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedData.map((product: any) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductList;
