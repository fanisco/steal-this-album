import React, { FC } from 'react';
import Image from 'next/image';

import { BuddyModel } from '../../graphql';
import { Button } from '../Button/Button';
import { Col, Row } from '../Grid/Grid';

import styles from './BuddyDetails.module.scss';

export const BuddyDetails: FC<BuddyModel> = ({ name, image }) => {
  return (
    <Row>
      <Col xs={4} md={2} lg={2}>
        <div className={styles.image}>
          <Image src={image} alt={name} layout="fill" />
        </div>
      </Col>
      <Col xs={4} md={6} lg={10}>
        <h1 className={styles.heading}>
          {name.split(' ').map((part) => (
            <React.Fragment key={part}>
              {part}
              <br />
            </React.Fragment>
          ))}
        </h1>
      </Col>
      <Col xs={4} md={4} lg={3} mdOffset={2} lgOffset={2}>
        <Button>Add buddy</Button>
      </Col>
    </Row>
  );
};
