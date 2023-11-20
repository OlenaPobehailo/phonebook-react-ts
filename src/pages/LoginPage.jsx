import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="center">
      <LoginForm />
      <div >
        <p>Please, log in.</p>
        <p>If you do not have an account please
          <Link to="/register"> register!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
