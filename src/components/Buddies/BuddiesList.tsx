import { FC } from 'react';

import { BuddyModel } from '../../graphql';
import { Col, Row } from '../Grid/Grid';

import { Buddy } from './Buddy';
import { H1 } from './H1';
import styles from './BuddiesList.module.scss';
import buddyStyles from './Buddy.module.scss';

export const BuddiesList: FC<{ buddies?: BuddyModel[] }> = ({ buddies }) => {
  return (
    <Row>
      <Col size={10} offset={1}>
        <H1>Fresh cryptobuddies</H1>
        <Row className={buddyStyles.list}>
          {buddies?.map((buddy) => (
            <Col key={buddy.id} size={2} className={styles.buddyCell}>
              <Buddy {...buddy} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
