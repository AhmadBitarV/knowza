import cx from 'classnames';

export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<Props> = ({ className, ...props }) => {
  return (
    <section
      className={cx(className, {
        'container px-6 py-8 sm:py-16 mx-auto': true,
      })}
      {...props}
    >
      {props.children}
    </section>
  );
};
