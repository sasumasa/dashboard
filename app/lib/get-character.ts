export async function getCharacter() {
  const res = await fetch(`https://randomuser.me/api`, {
    next: { tags: ['health'] },
  });
  const data = await res.json();
  const result = data.results[0];
  return result.name;
}
