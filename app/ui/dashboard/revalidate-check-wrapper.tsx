import Character from "./character";
import Product from "./product";
import { JustRevalidateButton } from "./revalidate-test-button";

export default async function RevalidateCheckWrapper() {
  return <>
    <Character />
    <Product />
    <JustRevalidateButton />
  </>
}
