import {
  FC,
  HTMLAttributes,
  KeyboardEvent as ReactKeyboardEvent,
  SyntheticEvent,
  useEffect,
  useRef,
} from 'react';
import clsx from 'clsx';
import ContentEditable from 'react-contenteditable';

import { formatValue, getCaretCalculatedCoordinates } from './Input.helpers';
import styles from './Input.module.scss';
import { InputPlaceholder } from './InputPlaceholder';

const VALUE_SPACE_REGEX = /\<br\>|\<br\/>|\<br \/\>|\&nbsp;|\s+/g;
const VALUE_CLEAN_REGEX = /[^a-zA-Z ]/g;

interface InputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onInput'> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  className,
  placeholder,
  ...rest
}) => {
  const _value = formatValue(value);
  const rootRef = useRef<HTMLDivElement>(null);
  const editableRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const getCoordinates = useRef<ReturnType<
    typeof getCaretCalculatedCoordinates
  > | null>(null);

  useEffect(() => {
    const handleEvent = (event: KeyboardEvent | MouseEvent) => {
      if (!rootRef.current || !caretRef.current || !event.target) {
        return;
      }
      if (
        event.target === editableRef.current ||
        editableRef.current?.contains(event.target as Node)
      ) {
        const target = event.target as HTMLElement;

        if (!getCoordinates.current) {
          const styles = getComputedStyle(editableRef.current);
          getCoordinates.current = getCaretCalculatedCoordinates({
            family: styles.fontFamily,
            size: styles.fontSize,
            weight: styles.fontWeight,
            height: styles.lineHeight,
          });
        }

        const [top, left] = getCoordinates.current(target);

        caretRef.current.setAttribute(
          'style',
          `top: ${top - 1}px; left: ${left - 1}px`
        );
      }
    };

    document.addEventListener('click', handleEvent);
    document.addEventListener('keyup', handleEvent);

    () => {
      document.removeEventListener('click', handleEvent);
      document.removeEventListener('keyup', handleEvent);
    };
  }, []);

  const onEditableChange = (
    event: SyntheticEvent & { target: { value: string } }
  ) => {
    onChange(
      event.target.value
        .replace(VALUE_SPACE_REGEX, ' ')
        .replace(VALUE_CLEAN_REGEX, '')
        .trim()
    );
  };

  const onEditableKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div {...rest} ref={rootRef} className={clsx(className, styles.root)}>
      <ContentEditable
        innerRef={editableRef}
        className={styles.editable}
        html={_value}
        onChange={onEditableChange}
        onKeyDown={onEditableKeyDown}
      />
      <span ref={caretRef} className={styles.caret}></span>
      {placeholder && (
        <InputPlaceholder
          placeholder={placeholder}
          className={clsx(
            styles.placeholder,
            value && styles.placeholder_hidden
          )}
        />
      )}
    </div>
  );
};
