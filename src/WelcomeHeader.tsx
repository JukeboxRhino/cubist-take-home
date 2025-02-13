import Skeleton from './Skeleton';
import './WelcomeHeader.css';

interface WelcomeHeaderProps {
  loading: boolean;
  name?: string;
}

function WelcomeHeader({ loading, name }: WelcomeHeaderProps) {
  return (
    <header className='welcome-header'>
      {loading ? (
        <>
          <Skeleton type="text" />
          <Skeleton type="text" />
        </>
      ) : (
        <>
          <div>Welcome,</div>
          <div>{name}.</div>
        </>
      )}
    </header>
  );
}

export default WelcomeHeader;