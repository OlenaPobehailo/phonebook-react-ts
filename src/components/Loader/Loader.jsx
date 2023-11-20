import { PropagateLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <PropagateLoader color="#008080" />
    </LoaderWrapper>
  );
};

export default Loader;
