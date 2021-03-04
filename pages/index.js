import Head from 'next/head';
import {getAllCharacters, searchCharacter} from 'utils/api';
import CardGrid from 'components/CardGrid';
import CharacterCard from 'components/CharacterCard';
import {useEffect} from 'react';
import styles from 'styles/Home.module.css';
import useAsync from 'hooks/useAsync';
import {useSearchTerm} from 'context/searchContext';
import Spinner from 'components/Spinner';

export default function Home({characters}) {
  const {data: searchedCharacters, isLoading, isSuccess, isError, isIdle, error, run, resetState} = useAsync([]);
  const [searchTerm, debouncedSearchTerm, setSearchTerm] = useSearchTerm();

  function handleInput(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(function search() {
    if (debouncedSearchTerm == "") {
      resetState();
      return;
    }
    run(searchCharacter(debouncedSearchTerm));
  }, [debouncedSearchTerm, run]);

  return (
    <>
      <Head>
        <title>Welcome | Rick and Morty </title>
      </Head>
      <div className={styles.searchbar}>
        <input type="text" value={searchTerm} onChange={handleInput} placeholder="Search" />
      </div>
      <CardGrid>
        <Characters isIdle={isIdle} isSuccess={isSuccess} isError={isError} isLoading={isLoading} characters={debouncedSearchTerm == "" ? characters : searchedCharacters} error={error} />
      </CardGrid>
    </>
  )
}

function Characters({isLoading, isSuccess, isError, isIdle, characters = [], error}) {
  if (isLoading) {
    return <Spinner />
  } else if (isSuccess || isIdle) {
    return characters.map(character => <CharacterCard key={character.id} character={character} />)
  } else if (isError) {
    console.log(error);
    return <div>ERROR</div>
  }

}

export async function getStaticProps() {
  const characters = (await getAllCharacters());
  return {
    props: {
      characters
    }
  }
}
