import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/authSelectors";

const HomePage: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="center">
          <p>Welcome to the PhoneBook, {name}!</p>
          <p>Now you can see your contacts.</p>
        </div>
      ) : (
        <div className="center">
          <p>Welcome to the phone book, guest!</p>
          <p>Please sign up or sign in!</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
