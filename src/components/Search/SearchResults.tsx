import { FC } from 'react';

import { BuddyModel } from '../../graphql';
import { Buddy } from '../Buddies/Buddy';
import { Col, Row } from '../Grid/Grid';

import styles from './SearchResults.module.scss';

export const SearchResults: FC<{ buddies?: BuddyModel[] }> = ({ buddies }) => {
  return (
    <Row className={styles.root}>
      <Col size={10} offset={1}>
        <Row>
          {buddies?.map((buddy) => (
            <Col key={buddy.id} size={2} className={styles.result}>
              <Buddy {...buddy} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
