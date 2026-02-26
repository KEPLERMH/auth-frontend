const Home = ({ user, error }) => {
  return (
    <>
      {user ? (
        <>
          <h2 className="text-4xl font-medium ">Welcome, {user.name} 🤠</h2>
          <h2 className=" text-center">Email: {user.email}</h2>
        </>
      ) : (
        <h2>Please Login or Register</h2>
      )}
    </>
  );
};

export default Home;
