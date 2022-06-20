import { useAppSelector } from "../../../hooks/hooks";
import { capitalize } from "../../../utils/helpers/helpers";

const HomePage = () => {
  const authLogin = useAppSelector((state) => state.usersAuth.authLogin);
  return <h1 className="text-5xl mt-24 mx-auto container text-center">Привет, {authLogin ? capitalize(authLogin) : 'Гость'}!</h1>;
};

export default HomePage;