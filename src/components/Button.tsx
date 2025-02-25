import cx from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export const Button: React.FC<Props> = ({
  variant = 'primary',
  disabled,
  className,
  children,
  text,
  isFullWidth,
  ...props
}) => {
  const getClasses = () => {
    return {
      primary: [
        'bg-purple focus-visible:bg-purple-hover active:bg-purple-hover text-white-primary rounded-lg',
      ],
      secondary: [
        'bg-white-primary text-purple rounded-lg border border-purple focus-visible:bg-purple-light active:bg-purple-light',
      ],
    }[variant]?.filter(Boolean);
  };
  return (
    <button
      disabled={disabled}
      className={cx(getClasses(), className, {
        'opacity-25': disabled,
        'w-full': isFullWidth,
        'py-3 px-4 transition-all duration-200 ease-out outline-none leading-5':
          true,
      })}
      {...props}
    >
      {children || text}
    </button>
  );
};
