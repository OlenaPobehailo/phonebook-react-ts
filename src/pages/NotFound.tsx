import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/authSelectors";
import { CenterWrapper, PageWrapper } from "./Page.styled";

const NotFound: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <PageWrapper>
      <CenterWrapper>
        <p>Page Not Found</p>
        {isLoggedIn ? (
          <Link to="/contacts">Contacts</Link>
        ) : (
          <Link to="/">Home page</Link>
        )}
      </CenterWrapper>
    </PageWrapper>
  );
};

export default NotFound;
