import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div
      id='error-page'
      className='flex flex-col gap-8 justify-center items-center h-screen'
    >
      <h1 className='text-4xl font-bold'>Welcome to Knowza</h1>
      <div className='flex gap-4'>
        <Link
          className='text-purple hover:text-purple-hover ease-out transition-colors duration-300'
          to={'/login'}
        >
          Login
        </Link>
        <Link
          className='text-purple hover:text-purple-hover ease-out transition-colors duration-300'
          to={'/sign-up'}
        >
          Create account
        </Link>
      </div>
    </div>
  );
};
