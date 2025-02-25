import { Icon } from '../components/Icon';
import LogoDevLinksIcon from '../assets/images/logo-devlinks-large.svg';
import { Text } from '../components/Text';
import { SignUpForm } from '../components/Forms/SignUp';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';

export const SignUpPage: React.FC = () => {
  return (
    <main className='sm:bg-white-primary bg-white-secondary items-center'>
      <Section className='flex flex-col sm:justify-center items-center justify-start sm:min-h-screen'>
        <Link to='/' className='mb-10 self-start sm:self-auto'>
          <Icon src={LogoDevLinksIcon} width={180} height={40} />
        </Link>

        <div className='bg-white-secondary sm:p-10 rounded-xl sm:min-w-[476px] min-w-full sm:border border-grey-light'>
          <Text
            text='Create account'
            variant='heading-md'
            className='mb-2 text-grey-dark'
          />
          <Text
            text='Let’s get you started sharing your links!'
            variant='body-md'
            className='text-grey mb-10'
          />
          <SignUpForm action='http://localhost:3000/signup' method='post' />
        </div>
      </Section>
    </main>
  );
};
