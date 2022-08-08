import { FC } from 'react';
import clsx from 'clsx';

import { BuddyModel } from '../../graphql';
import { Col, Row } from '../Grid/Grid';

import { BuddiesList } from './BuddiesList';
import { H1 } from './H1';
import styles from './IndexBuddies.module.scss';

export const IndexBuddies: FC<{ buddies?: BuddyModel[]; fade?: boolean }> = ({
  buddies,
  fade,
}) => {
  return (
    <Row className={clsx(styles.root, fade && styles.root_faded)}>
      <Col xs={4} md={7} lg={10} mdOffset={1} lgOffset={1}>
        <H1>Fresh cryptobuddies</H1>
        <BuddiesList buddies={buddies} />
      </Col>
    </Row>
  );
};
