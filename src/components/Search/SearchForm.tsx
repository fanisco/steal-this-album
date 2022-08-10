import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Search from '../../../public/icons/Search.svg';
import Close from '../../../public/icons/Close.svg';
import { Col, Row } from '../Grid/Grid';

import { Input } from './Input';
import styles from './SearchForm.module.scss';

export const SearchForm: FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const hasValue = Boolean(value);
  const twoRows = !hasValue || Boolean(value.trim().match(' '));

  return (
    <Row className={clsx(styles.root, hasValue && styles.root_hasValue)}>
      <Col md={1} lg={1} className={styles.zoomWrapper}>
        <div className={clsx(styles.zoom, !value && styles.zoom_disabled)}>
          <Image {...Search} layout="fill" />
        </div>
      </Col>
      <Col md={6} lg={10}>
        <form
          className={clsx(styles.form, twoRows && styles.form_twoRows)}
          onSubmit={(event) => event.preventDefault()}
        >
          <Input
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder="Crypto buddies"
          />
        </form>
      </Col>
      <Col md={1} lg={1} align="end" className={styles.closeWrapper}>
        <div className={styles.close} onClick={() => onChange('')}>
          <Image {...Close} layout="fill" />
        </div>
      </Col>
    </Row>
  );
};
