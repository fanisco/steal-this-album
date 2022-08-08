import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../../public/icons/Logo.svg';
import User from '../../../public/icons/User.svg';
import Love from '../../../public/icons/Love.svg';
import { Container } from '../Grid/Grid';

import styles from './Layout.module.scss';

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Link href="/">
            <a>
              <Image {...Logo} />
            </a>
          </Link>
        </div>
        <div className={styles.header__login}>
          <Link href="/">
            <a>
              <Image {...User} />
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span className={styles.footer__madeWith}>Made with</span>
        <Image className={styles.footer__heart} {...Love} />
      </footer>
    </Container>
  );
};
