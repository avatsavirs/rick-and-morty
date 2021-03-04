import Link from 'next/link';
import Image from 'next/image';
import styles from 'styles/CharacterCard.module.css';

export default function CharacterCard({character}) {
  return (
    <Link href={`/character/${character.slug}`}>
      <a under="none">
        <article className={styles.card}>
          <div className={styles.cardImg}>
            <Image height={300} width={300} src={character.image} sizes="(min-width: 640px) 336px" />
          </div>
          <div className={styles.cardBody}>
            <h3>{character.name}</h3>
            <p> <span className={`${styles.status} ${styles[character.status.toLowerCase()]}`}></span> {character.status} - {character.species}  </p>
            <p> <b>Origin:</b> {character.origin.name} </p>
            <p> <b>Last Known Location:</b> {character.location.name} </p>
          </div>
        </article>
      </a>
    </Link>
  )
}
