import { getCharacter } from "@/app/lib/get-character";

export default async function Character() {
  const character = await getCharacter();
  return <div>{JSON.stringify(character)}</div>;
}
