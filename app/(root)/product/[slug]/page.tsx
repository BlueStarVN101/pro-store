import notFound from "@/app/not-found";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { Product } from "@/types";

const ProductDetailsPage = async (props : {params: Promise<{slug :string}>}) => {
  const {slug} = await props.params;
  const product= await getProductBySlug(slug);
  return <>{slug}{product?.name }</>
}
export default ProductDetailsPage;