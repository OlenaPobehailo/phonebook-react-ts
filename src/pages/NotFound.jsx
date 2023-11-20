import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const NotFound = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="container center">
      <p>Page Not Found</p>
      {isLoggedIn ? (
        <Link to="/contacts">Contacts</Link>
      ) : (
        <Link to="/">Home page</Link>
      )}
    </div>
  );
};

export default NotFound;
