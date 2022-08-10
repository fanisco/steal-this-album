import { memo } from 'react';

import { BuddyModel } from '../../graphql';
import { Buddy } from '../Buddies/Buddy';
import { Col, Row } from '../Grid/Grid';

import styles from './SearchResults.module.scss';

interface SearchResultsProps {
  buddies?: BuddyModel[];
}

const propsAreEqual = (
  prevProps: SearchResultsProps,
  nextProps: SearchResultsProps
) => {
  if (prevProps.buddies && nextProps.buddies) {
    if (prevProps.buddies.length !== nextProps.buddies.length) {
      return false;
    }
    for (let i = 0; i < prevProps.buddies.length; i++) {
      if (prevProps.buddies[i].id !== nextProps.buddies[i].id) {
        return false;
      }
    }
  }
  return true;
};

export const SearchResults = memo<SearchResultsProps>(({ buddies }) => {
  return (
    <div className={styles.root}>
      <Row>
        <Col xs={4} md={7} lg={10} mdOffset={1} lgOffset={1}>
          <Row className={styles.list}>
            {buddies?.map((buddy, i) => (
              <Col
                key={buddy.id}
                xs={2}
                md={2}
                lg={2}
                className={styles.buddyWrapper}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, translateY: 140 },
                  visible: {
                    opacity: 1,
                    translateY: 0,
                    transition: { delay: i * 0.05, duration: 0.3 },
                  },
                }}
              >
                <Buddy {...buddy} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}, propsAreEqual);
