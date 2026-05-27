const ProductPrice = ({price, stock}: {price: number; stock: number}) => {
  return (
    <span className="text-lg font-bold">
      {" "}
      {stock > 0 ? `$ ${price.toFixed(2)}` : "Out of Stock"}
    </span>
  );
};
export default ProductPrice;
