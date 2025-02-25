export type Props = {
  wrapperClassName?: string;
  wrapperComponent?: 'div' | 'span';
  src: string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
  type?: 'svg' | 'graphic';
};

export const Icon: React.FunctionComponent<Props> = ({
  wrapperClassName,
  wrapperComponent = 'span',
  src,
  className,
  width,
  height,
  alt,
}) => {
  const Wrapper = wrapperComponent;
  return (
    <Wrapper className={wrapperClassName}>
      <img
        src={src}
        className={className}
        width={width}
        height={height}
        alt={alt}
      />
    </Wrapper>
  );
};
