import cx from 'classnames';
import { IconLink } from './Icons/IconLink';
import { ProfileIcon } from './Icons/Profile';
import { Text } from '../Text';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  icon: 'profile' | 'links';
}

export const Tab: React.FC<Props> = ({
  className,
  text,
  active,
  icon,
  ...props
}) => {
  return (
    <button
      role='tab'
      className={cx(
        className,
        'group py-3 px-6 outline-none leading-5 flex gap-2 rounded-lg font-semibold text-grey',
        {
          'bg-purple-light': active,
        }
      )}
      {...props}
    >
      <span className='flex gap-2 items-center'>
        {icon === 'profile' && (
          <ProfileIcon
            className={cx('fill-grey group-hover:fill-purple', {
              'fill-purple': active,
            })}
          />
        )}

        {icon === 'links' && (
          <IconLink
            className={cx('fill-grey group-hover:fill-purple', {
              'fill-purple': active,
            })}
          />
        )}

        <Text
          className={cx('text-grey group-hover:text-purple', {
            'text-purple': active,
          })}
          text={text}
        />
      </span>
    </button>
  );
};
