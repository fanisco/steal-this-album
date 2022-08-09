import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { BuddyModel } from '../../graphql';
import { Button } from '../Button/Button';
import { Col, Row } from '../Grid/Grid';

import styles from './BuddyDetails.module.scss';

const ease = [0.175, 0.85, 0.42, 0.96];

export const BuddyDetails: FC<BuddyModel> = ({ name, image }) => {
  return (
    <Row>
      <Col xs={4} md={2} lg={2}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, scale: 0.7, translateX: -100 }}
          animate={{ opacity: 1, scale: 1, translateX: 0 }}
          transition={{ ease, duration: 0.6, delay: 0.1 }}
        >
          <Image src={image} alt={name} layout="fill" />
        </motion.div>
      </Col>
      <Col xs={4} md={6} lg={10}>
        <motion.h1
          className={styles.heading}
          initial={{ translateX: -140 }}
          animate={{ translateX: 0 }}
          transition={{ ease, duration: 0.6, delay: 0.1 }}
        >
          {name.split(' ').map((part) => (
            <React.Fragment key={part}>
              {part}
              <br />
            </React.Fragment>
          ))}
        </motion.h1>
      </Col>
      <Col xs={4} md={4} lg={3} mdOffset={2} lgOffset={2}>
        <motion.div
          initial={{ translateX: -140 }}
          animate={{ translateX: 0 }}
          transition={{ ease, duration: 0.6, delay: 0.1 }}
        >
          <Button>Add buddy</Button>
        </motion.div>
      </Col>
    </Row>
  );
};
