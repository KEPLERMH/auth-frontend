import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser, API_URL }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const logOut = async () => {
      await axios.post(`${API_URL}/api/auth/logout`);
      setUser(null);
      navigate("/");
    };
    logOut();
  };
  return (
    <header className=" w-full bg-neutral-600 py-4">
      <nav
        aria-label="Main navigacion"
        className="px-5 flex items-center justify-between max-w-6xl mx-auto"
      >
        <Link to="/" className="text-2xl font-bold">
          Auth-User
        </Link>

        <div className="space-x-3 text-white">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-2xl px-2 py-1 rounded-lg hover:bg-red-400 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className=" text-xl inline-block transform hover:text-neutral-400 transition-transform duration-300 hover:scale-105 "
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="text-xl inline-block transform transition-transform duration-300  hover:text-neutral-400 hover:scale-105"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
