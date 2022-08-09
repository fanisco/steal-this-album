import clsx from 'clsx';
import { FC } from 'react';

import { BuddyModel } from '../../graphql';
import { Col, Row } from '../Grid/Grid';

import { Buddy } from './Buddy';
import styles from './Buddy.module.scss';

export const BuddiesList: FC<{
  buddies?: BuddyModel[];
  budyClassName?: string;
}> = ({ buddies, budyClassName }) => {
  return (
    <Row className={styles.list}>
      {buddies?.map((buddy) => (
        <Col
          key={buddy.id}
          xs={2}
          md={2}
          lg={2}
          className={clsx(styles.buddyWrapper, budyClassName)}
        >
          <Buddy {...buddy} />
        </Col>
      ))}
    </Row>
  );
};
