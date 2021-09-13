import { useRouter } from 'next/router';
import useCountdown from '../../../hooks/useCountdown';
import { Wrapper } from './404.elements';

const FourOFour = () => {
  const router = useRouter();
  const redirect = () => {
    router.replace('/');
  };
  const [remaining] = useCountdown(5, { onEnd: redirect });
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h2>Page not found!</h2>
        <i>You will be redirected to the homepage in {remaining} seconds</i>
      </div>
    </Wrapper>
  );
};

export default FourOFour;
