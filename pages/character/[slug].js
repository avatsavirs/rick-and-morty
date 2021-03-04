import Head from 'next/head';
import {getAllCharacters, getCharacter} from 'utils/api';
import {useRouter} from 'next/router';
import Image from 'next/image';
import styles from 'styles/Character.module.css';
import Spinner from 'components/Spinner';

export default function Character({character}) {
  const router = useRouter();
  if (router.isFallback) {
    return (<div className={styles.container}><Spinner /></div>)
  }
  return (
    <>
      <Head>
        <title> {character.name} | Rick and Morty </title>
      </Head>
      <div className={styles.container}>
        <Image height={480} width={480} src={character.image} />
        <div>
          <h1> {character.name} </h1>
          <p> <b>Status:</b> <span className={styles[character.status.toLowerCase()]} />{character.status} </p>
          <p> <b>Species:</b> {character.species} </p>
          <p> <b>Gender:</b> {character.gender} </p>
          <p> <b>Origin:</b> {character.origin.name} </p>
          <p> <b>Last Known Location:</b> {character.location.name} </p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({params}) {
  try {
    const character = await getCharacter(params.slug);
    return {
      props: {character},
    }
  } catch (e) {
    return {
      props: {},
      notFound: true
    }
  }
}

export async function getStaticPaths() {
  const characters = await getAllCharacters();
  return {
    paths: characters.map(function getCharacterPaths(character) {
      return {
        params: {
          slug: character.slug
        },
      }
    }),
    fallback: true
  }

}
