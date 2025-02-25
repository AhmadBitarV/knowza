import { createElement } from 'react';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type Variants = 'heading-md' | 'heading-sm' | 'body-md' | 'body-sm';
type WrapperComponents = 'div' | 'span' | 'label';

export type Props = {
  className?: string;
  variant?: Variants;
  tag?: Tags;
  wrapperComponent?: WrapperComponents;
  children?: React.ReactNode;
  text?: string;
  wrapperClassName?: string;
};

export const Text: React.FC<Props> = ({
  className,
  text,
  tag = 'p',
  variant = 'body-md',
  ...props
}) => {
  const getClasses = () => {
    if (variant) {
      return {
        'heading-md': ['sm:text-3xl text-2xl font-semibold'],
        'heading-sm': ['text-base font-semibold'],
        'body-md': ['text-base'],
        'body-sm': ['text-xs'],
      }[variant]?.filter(Boolean);
    }
  };

  return (
    <>
      {createElement(
        tag,
        { className: [getClasses(), className].join(' ') },
        props.children || text
      )}
    </>
  );
};
