import Skeleton from './Skeleton';
import './WelcomeHeader.css';

interface WelcomeHeaderProps {
  loading: boolean;
}

function WelcomeHeader({ loading }: WelcomeHeaderProps) {
  return (
    <header className='welcome-header'>
      {loading && (
        <>
          <Skeleton type="text" />
          <Skeleton type="text" />
        </>
      )}
    </header>
  );
}

export default WelcomeHeader;