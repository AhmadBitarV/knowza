import { Icon } from '../Icon';
import LogoDevLinksIcon from '../../assets/images/logo-devlinks-large.svg';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { Tab } from './Tab';

import { useState } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Header: React.FC<Props> = () => {
  const [activeLinks, setActiveLinks] = useState(true);
  const [activeProfile, setActiveProfile] = useState(false);

  return (
    <header className='container flex justify-between items-center px-6 py-4 rounded-xl bg-white-secondary border-grey-light border mx-auto'>
      <Link to={'/'}>
        <Icon src={LogoDevLinksIcon} width={146} height={32} />
      </Link>
      <div className='flex gap-4'>
        <Tab
          active={activeLinks}
          onClick={() => {
            setActiveLinks(true);
            setActiveProfile(false);
          }}
          icon='links'
          text='Links'
        />

        <Tab
          active={activeProfile}
          onClick={() => {
            setActiveProfile(true);
            setActiveLinks(false);
          }}
          icon='profile'
          text='Profile Details'
        />

        <Tab
          active={activeProfile}
          onClick={() => {
            setActiveProfile(true);
            setActiveLinks(false);
          }}
          icon='profile'
          text='Profile Details'
        />
      </div>
      <Button variant='secondary'>Preview</Button>
    </header>
  );
};
