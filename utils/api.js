const baseUrl = "https://rickandmortyapi.com/api";

async function client(endpoint) {
  const url = `${baseUrl}/${endpoint}`;
  const response = await fetch(url, {
    method: "GET"
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}

export async function getAllCharacters() {
  try {
    const response = await client("character");
    const characters = response.results;
    characters.forEach(character => {
      character.slug = character.name.replace(/\s+/g, '-').toLowerCase() + "-" + character.id;
    });
    return characters;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getCharacter(slug) {
  const path = slug.split("-");
  const id = path[path.length - 1];
  const character = await client(`character/${id}`);
  return character;
}

export async function searchCharacter(name) {
  const characters = (await client(`character/?name=${name}`)).results;
  characters.forEach(character => {
    character.slug = character.name.replace(/\s+/g, '-').toLowerCase() + "-" + character.id;
  });
  return characters;
}
