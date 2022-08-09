import { FC } from 'react';

import { BuddyModel } from '../../graphql';
import { BuddiesList } from '../Buddies/BuddiesList';
import { Col, Row } from '../Grid/Grid';

import styles from './SearchResults.module.scss';

export const SearchResults: FC<{ buddies?: BuddyModel[] }> = ({ buddies }) => {
  return (
    <div className={styles.root}>
      <Row>
        <Col xs={4} md={7} lg={10} mdOffset={1} lgOffset={1}>
          <BuddiesList buddies={buddies} budyClassName={styles.result} />
        </Col>
      </Row>
    </div>
  );
};
