import { useAppSelector } from "../../../hooks/hooks";
import { capitalize } from "../../../utils/helpers/helpers";
import { HomepageHeaderStyle } from "./HomePageStyles";

const HomePage = () => {
  const authLogin = useAppSelector((state) => state.usersAuth.authLogin);
  return <h1 className={HomepageHeaderStyle}>Привет, {authLogin ? capitalize(authLogin) : 'Гость'}!</h1>;
};

export default HomePage;