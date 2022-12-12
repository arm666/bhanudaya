import React from "react";

const calculateDateTime = () => new Date().toString();

const Home = () => {
  const [dateTime, setDateTime] = React.useState(calculateDateTime());

  React.useEffect(() => {
    let interval = setInterval(() => {
      setDateTime(calculateDateTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="h-screen grid place-items-center bg-blue-600 text-3xl text-white text-center">
      <div className="grid gap-4">
        <h1> Welcome to bhanudaya.edu.np</h1>
        <p className="text-sm">{dateTime}</p>
        <p className="text-lg">Coming soon...</p>
      </div>
    </main>
  );
};

export default Home;
