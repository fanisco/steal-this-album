import { memo } from 'react';

import { BuddyModel } from '../../graphql';
import { Col, Row } from '../Grid/Grid';

import { Buddy } from './Buddy';
import styles from './Buddy.module.scss';

export const BuddiesList = memo<{
  buddies?: BuddyModel[];
}>(({ buddies }) => {
  return (
    <Row className={styles.list}>
      {buddies?.map((buddy) => (
        <Col
          key={buddy.id}
          xs={2}
          md={2}
          lg={2}
          className={styles.buddyWrapper}
        >
          <Buddy {...buddy} />
        </Col>
      ))}
    </Row>
  );
});
