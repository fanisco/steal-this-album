import { FC } from 'react';
import Image from 'next/image';

import { BuddyModel } from '../../graphql';
import { Button } from '../Button/Button';
import { Col, Row } from '../Grid/Grid';

import styles from './BuddyDetails.module.scss';

export const BuddyDetails: FC<BuddyModel> = ({ id, name, image }) => {
  return (
    <Row>
      <Col size={2}>
        <div className={styles.image}>
          <Image src={image} layout="fill" />
        </div>
      </Col>
      <Col size={10}>
        <h1 className={styles.heading}>{name}</h1>
      </Col>
      <Col size={3} offset={2}>
        <Button>Add buddy</Button>
      </Col>
    </Row>
  );
};
