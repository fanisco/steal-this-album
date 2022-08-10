import { FC } from 'react';

export const InputPlaceholder: FC<{
  placeholder: string;
  className?: string;
}> = ({ placeholder, className }) => {
  if (placeholder.match(' ')) {
    const parts = placeholder?.split(' ');
    return (
      <div className={className}>
        {parts[0]}
        <br />
        {parts[1]}
      </div>
    );
  }

  return <div className={className}></div>;
};
