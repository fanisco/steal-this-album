import { FC } from 'react';

import { BuddyModel } from '../../graphql';
import { BuddiesList } from '../Buddies/BuddiesList';
import { Col, Row } from '../Grid/Grid';

import styles from './SearchResults.module.scss';

export const SearchResults: FC<{ buddies?: BuddyModel[] }> = ({ buddies }) => {
  return (
    <div className={styles.root}>
      <Row>
        <Col size={10} offset={1}>
          <BuddiesList buddies={buddies} />
        </Col>
      </Row>
    </div>
  );
};
