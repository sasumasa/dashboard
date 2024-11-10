export async function getProduct() {
  const res = await fetch(`https://fakerapi.it/api/v2/products`, {
    next: { tags: ['hoge'] },
  });
  const data = await res.json();
  const result = data.data[0];
  return result.name;
}
