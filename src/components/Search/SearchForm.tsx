import React, { ChangeEvent, FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Search from '../../../public/icons/Search.svg';
import Close from '../../../public/icons/Close.svg';
import { Col, Row } from '../Grid/Grid';

import styles from './SearchForm.module.scss';

const formatValue = (value: string) => {
  const parts = value.trimStart().replace(/\s+/g, ' ').split(/\s/);

  if (!value || parts.length < 2) {
    return value;
  } else {
    const [first, ...rest] = parts;
    return `${first}\n${rest.join(' ')}`;
  }
};

export const SearchForm: FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const _onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    onChange(event.target.value.replace(/\n/, ' ').replace(/[^a-zA-Z ]/, ''));

  const _value = formatValue(value);
  const hasValue = Boolean(_value);
  const twoRows = !hasValue || Boolean(_value.match('\n'));

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
          <textarea
            className={styles.input}
            value={_value}
            onChange={_onChange}
            placeholder="Crypto&#10;buddies"
          ></textarea>
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
