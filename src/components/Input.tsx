import { Icon, Props as IconProps } from './Icon';
import { Text } from './Text';
import cx from 'classnames';

import { ERROR_MESSAGES, ErrorTypes } from './Forms/constants';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'number' | 'email';
  name: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
  label: string;
  icon?: IconProps;
  onData?: (name: string, value?: string, err?: boolean) => void;
  validateFn?: (value: string) => boolean;
  error?: ErrorTypes;
}

export const Input: React.FC<Props> = ({
  type = 'text',
  wrapperClassName,
  placeholder,
  name,
  icon,
  error,
  onData,
  ...props
}) => {
  const validate = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    onData?.(name, value);
  };

  return (
    <div className={wrapperClassName}>
      <Text
        text={props.label}
        variant='body-sm'
        className='mb-1 text-grey-dark'
      />

      <div className='relative'>
        {icon && (
          <Icon
            {...icon}
            wrapperClassName='absolute left-0 top-1/2 -translate-y-1/2 py-4 pr-3 pl-4'
          />
        )}
        <input
          formNoValidate
          type={type}
          className={cx({
            'w-full text-base outline-none flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ease-out reset-autofill':
              true,
            'border-red text-red hover:bg-[#f9efef]': error,
            'border-grey-light hover:border-purple-hover hover:shadow-xl text-grey-dark':
              !error,
            ' focus:border-purple-hover focus:shadow-xl': !error,
            'pl-[44px]': icon,
          })}
          placeholder={placeholder}
          onInput={(e) => validate(e)}
          name={name}
          {...props}
        />
      </div>

      {!!error && (
        <Text
          variant='body-sm'
          className='text-red mt-1'
          text={ERROR_MESSAGES[error]}
        />
      )}
    </div>
  );
};
