import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BuddyModel } from '../../graphql';

import styles from './Buddy.module.scss';

export const Buddy: FC<BuddyModel> = ({ id, name, image }) => {
  return (
    <Link href={`/details/${id}/`} scroll={false}>
      <a id={`buddy-${id}`} className={styles.buddy}>
        <div className={styles.image}>
          <Image src={image} alt={name} layout="fill" />
        </div>
        <h5 className={styles.name}>{name}</h5>
      </a>
    </Link>
  );
};
