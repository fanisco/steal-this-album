import { FC } from 'react';
import Link from 'next/link';

import { BuddyModel } from '../../graphql';

import styles from './Buddy.module.scss';

export const Buddy: FC<BuddyModel> = ({ id, name, image }) => {
  return (
    <Link href={`/details/${id}/`}>
      <a id={`buddy-${id}`} className={styles.buddy}>
        <img
          className={styles.image}
          src={image}
          alt={name}
          width="336"
          height="336"
        />
        <h5 className={styles.name}>{name}</h5>
      </a>
    </Link>
  );
};
