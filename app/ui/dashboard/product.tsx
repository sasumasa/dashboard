import { getProduct } from "@/app/lib/get-product";

export default async function Product() {
  const product = await getProduct();
  return <div>{product}</div>;
}
